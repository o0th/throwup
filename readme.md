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

### first

Given an array of function return the first non undefined or resolved value.

```js
const result = await first([
  () => true === false,
  () => new Promise((resolve) => { setTimeout(() => resolve(), 1000) }),
  () => new Promise((resolve, reject) => reject()),
  () => new Promise((resolve) => resolve('something'))
])

console.log(result)
/* something */
```
