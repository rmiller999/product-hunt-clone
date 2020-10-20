import React from 'react';
import { toast } from "../utils/toast";

function useFormValidation(initializeState, validate, action) {
  const [values, setValues] = React.useState(initializeState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if(noErrors) {
        action();
        setValues(initializeState);
        setSubmitting(false);
      } else {
        toast(Object.values(errors).join(" "));
        setSubmitting(false);
      }
    }
    // eslint-disable-next-line
  }, [errors]);

  function handleChange(event) {
    setValues(previousValues => ({
      ...previousValues,
      [event.target.name]: event.target.value
    }))
  }

  function handleSubmit() {
    const validateErrors = validate(values);
    setErrors(validateErrors);
    setSubmitting(true);
  }

  return {
    handleSubmit, handleChange, values, setValues, isSubmitting
  };
}

export default useFormValidation;