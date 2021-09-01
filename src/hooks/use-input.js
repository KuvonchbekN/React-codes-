import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valueTouched, setValueTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const notValid = !valueIsValid && valueTouched;

  const enteredValueHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setValueTouched(true);
  };

  const resetInput = () =>{ 
    setValueTouched(true);
  }

  const validationClasses = notValid ? "error-text" : "";
  const ValidClasses = notValid ? "form-control invalid" : "form-control";

  return {
    value: enteredValue,
    isTouched: valueTouched,
    valueIsValid,
    notValid,
    enteredValueHandler,
    valueBlurHandler,
    resetInput,
    validationClasses,
    ValidClasses,
  };
};

export default useInput;
