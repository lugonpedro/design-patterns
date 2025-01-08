import { EmailValidatorAdapter } from './email-validator-adapter'

const email = 'pedro@test.com'

const validator = new EmailValidatorAdapter()
console.log(validator.isEmail(email))