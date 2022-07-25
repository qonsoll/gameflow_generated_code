import { capitalize } from '../transform'

/**
 * It takes an email address, splits it into first and last name, and returns an object with those two
 * properties
 * @param _email - The email address to parse
 * @returns An object with two properties, firstName and lastName.
 */
const parseEmailDisplayName = (_email) => {
  const email = _email.toLowerCase()
  const displayName = email.split('@')[0]

  const firstName = displayName?.split('.')?.[0] ?? 'Anonymous'
  const lastName = displayName?.split('.')?.[1] ?? 'Anonymous'

  return { firstName: capitalize(firstName), lastName: capitalize(lastName) }
}

export default parseEmailDisplayName
