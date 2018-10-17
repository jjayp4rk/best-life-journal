const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateJournalInput(data) {
  let errors = {};
  // Uses custom middleware function to check backend

  data.text = !isEmpty(data.text) ? data.text : "";

  // Front end validation
  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "Must between 10 and 300 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
