import { REG_EXPS } from '~/__constants__'

/**
 * It validates an email address
 * @param t - the i18n object
 * @param email - The email address to validate.
 * @returns A function that takes two arguments, t and email.
 */
const validateEmail = (t, email) => {
  if (!REG_EXPS.EMAIL.test(email)) {
    return t('email-invalid-validation-message')
  }
}

export default validateEmail
