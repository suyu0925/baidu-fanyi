import axios from 'axios'
import { createHash, randomBytes } from 'crypto'

/**
 * @see https://fanyi-api.baidu.com/api/trans/product/apidoc#languageList
 */
type Lang =
  'zh'
  | 'wyw'
  | 'cht'
  | 'en'
  | 'jp'
  | 'kor'
type FromLang = Lang | 'auto'

type TranslateReq = {
  from: FromLang
  to: Lang
  q: string
  salt: string
  appid: string
  sign: string
}

type TranslateRes = {
  from: FromLang,
  to: Lang,
  trans_result: {
    src: string,
    dst: string,
  }[]
}

type TranslateOption = {
  from?: FromLang
  to: Lang
}

class Translater {
  constructor(private appid: string, private key: string) {
  }

  async translate(q: string, options?: TranslateOption) {
    const { from = 'auto', to = 'en' } = options ?? {}
    const req: TranslateReq = {
      from,
      to,
      q,
      salt: randomBytes(20).toString('hex'),
      appid: this.appid,
      sign: '',
    }
    req.sign = createHash('md5').update(req.appid + req.q + req.salt + this.key).digest('hex')
    const res = await axios.get<TranslateRes>('https://fanyi-api.baidu.com/api/trans/vip/translate', {
      params: req,
    })
    if (res.status >= 200 && res.status < 300) {
      return res.data.trans_result[0].dst
    } else {
      throw new Error(res.statusText + JSON.stringify(res.data))
    }
  }
}

export = Translater
