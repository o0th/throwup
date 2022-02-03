export const encase = (fn) => (...args) => {
  try {
    return fn(...args)
  } catch (err) { /* return undefined */ }
}
