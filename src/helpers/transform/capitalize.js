/**
 * Return the first character of the string capitalized, plus the rest of the string.
 * @param str - The string to capitalize.
 * @returns The first character of the string is being capitalized and then the rest of the string is
 * being added to it.
 */
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default capitalize
