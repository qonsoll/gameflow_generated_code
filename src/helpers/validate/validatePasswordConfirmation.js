/**
 * It returns a validation message if the password confirmation doesn't match the password
 * @param t - the translation function
 * @param password - the password that the user entered
 * @param passwordConfirmation - The password confirmation field value
 * @returns A function that takes in a password and passwordConfirmation and returns a validation
 * message if the password and passwordConfirmation do not match.
 */
const validatePasswordConfirmation = (t, password, passwordConfirmation) => {
  if (passwordConfirmation !== password) {
    return t('confirm-password-not-match-validation-message')
  }
}

export default validatePasswordConfirmation
