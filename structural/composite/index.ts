import { ValidateEmail, ValidateNumber, ValidateString } from "./validation-component";
import { ValidationComposite } from "./validation-composite";

const validateEmail = new ValidateEmail();
const validateNumber = new ValidateNumber()
const validateString = new ValidateString()

const validationCompositeNumber = new ValidationComposite()
validationCompositeNumber.add(validateNumber)
console.log(validationCompositeNumber.validate(1))

const validationCompositeNumberAndString = new ValidationComposite()
validationCompositeNumberAndString.add(validateNumber, validateString)
console.log(validationCompositeNumberAndString.validate(1))


const validationCompositeEmailAndString = new ValidationComposite()
validationCompositeEmailAndString.add(validateEmail, validateString)
console.log(validationCompositeEmailAndString.validate('pedro@test.com'))