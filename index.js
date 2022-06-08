export const encaseSync = (fn) => (...args) => {
  try {
    return fn(...args)
  } catch (throwup) {
    return { throwup }
  }
}

export const encase = (fn) => async (...args) => {
  try {
    return await fn(...args)
  } catch (throwup) {
    return { throwup }
  }
}
