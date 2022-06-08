### encaseSync

Instead of throwing an error, return `{ throwup }`.

```js
import { encaseSync } from "throwup"

const parseOpr = encaseSync(JSON.parse)

const parseRes = parseOpr(`{`)
if (parseRes.throwup) {
  /* true */
}

const parseRes = parseOpr(`{}`)
if (parseRes.throwup) {
  /* false */
}
```

### encase

Instead of throwing an error, return `{ throwup }`.

```js
import { encase } from "throwup"

const reject = () => Promise.reject('Error')
const resolve = () => Promise.resolve('Ok')

const rejectOpr = encase(reject)
const resolveOpr = encase(resolve)

const rejectRes = await rejectOpr()
if (rejectRes.throwup) {
  /* true */
}

const resolveRes = await resolveOpr()
if (resolveRes.throwup) {
  /* false */
}
```
