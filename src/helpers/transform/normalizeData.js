/**
 * It takes an object and returns a new object with all the keys that have a falsy value removed
 * @param data - The data object that you want to normalize.
 */
const normalizeData = (data) =>
  Object.keys(data).reduce((acc, key) => {
    if (data[key]) {
      acc[key] = data[key]
    } else {
      acc[key] = null
    }
    return acc
  }, {})

export default normalizeData
