# baidu-fanyi
baidu fanyi api on node.js

## Usage

You can gain appid and key from [baidu fanyi website](https://fanyi-api.baidu.com/doc/21).

```typescript
import Translater from 'baidu-fanyi'

const trans = new Translater('Your Appid', 'Your Key')
trans.translate('hello world', { to: 'zh' })
  .then(data => {
    console.log(data) // output: '你好，世界'
  })
```

or CommandJS

```javascript
const Translater = require('baidu-fanyi')

const trans = new Translater('Your Appid', 'Your Key')
trans.translate('こんにちは、世界', { to: 'zh' })
  .then(data => {
    console.log(data) // output: '你好，世界'
  })
```
