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

export const first = (fns) => {
  for (const fn of fns) {
    try {
      const result = await fn(...args)
      if (result) return result
    } catch {
      continue
    }
  }
}
