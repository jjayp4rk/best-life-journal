const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateJournalInput(data) {
  let errors = {};
  // Uses custom middleware function to check backend
  let inputName = Object.values(data)[0];

  inputName = !isEmpty(inputName) ? inputName : "";

  // Front end validation
  if (!Validator.isLength(inputName, { min: 10, max: 300 })) {
    errors.text = "Must between 10 and 300 characters";
  }

  if (Validator.isEmpty(inputName)) {
    errors.text = "Text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
