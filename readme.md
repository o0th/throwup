### encase

Instead of throwing an error, return `undefined`.

```js
import { encase } from "throwup"

const jsonParse = encase(JSON.parse)

const malform = `{"a":"a}`
console.log(jsonParse(malform)) // undefined

const json = `{"a":"a"}`
console.log(jsonParse(json)) // { a: 'a' }
```
