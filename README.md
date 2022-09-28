# baidu-fanyi
baidu fanyi api on node.js

## Usage

```typescript
import Translater from 'baidu-fanyi'

const trans = new Translater('Your Appid', 'Your Key')
trans.translate('hello world', { to: 'zh' })
  .then(data => {
    console.log(data) // output: '你好，世界'
  })
```
