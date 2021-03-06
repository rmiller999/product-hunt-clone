export default function validateSignup(values) {
  let errors = {};

  // Name errors
  if (!values.name) {
    errors.name = "A username is required.";
  }
  // Email errors
  if (!values.email) {
    errors.email = "Your email is required.";
  } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Your email is invalid";
  }
  // Password erros
  if (!values.password) {
    errors.password = "A password is required.";
  } else if (values.password.length < 6) {
    errors.password = "Your password must be at least 6 characters.";
  }
  return errors;
}