import * as dotenv from 'dotenv'
import Translater from '../src/index'

describe('test', () => {
  let trans: Translater

  beforeAll(() => {
    dotenv.config()
    trans = new Translater(process.env.APPID!, process.env.KEY!)
  })

  test('default option(to en)', async () => {
    const data = await trans.translate('戴着贝雷帽和穿黑色高领毛衣的柴犬')
    expect(data).toEqual('Chai dog in beret and black turtleneck sweater')
  })

  test('to zh', async () => {
    const data = await trans.translate('hello world', { to: 'zh' })
    expect(data).toEqual('你好，世界')
  })
})
