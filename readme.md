### install

```bash
npm install throwup
```

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

const reject = encase(() => Promise.reject('Error'))
const resolve = encase(() => Promise.resolve('Ok'))

const rejectRes = await reject()
if (rejectRes.throwup) {
  /* true */
}

const resolveRes = await resolve()
if (resolveRes.throwup) {
  /* false */
}
```
