import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    notValid: notValidName,
    enteredValueHandler: enteredNameChangeHandler,
    valueBlurHandler: usernameBlurHandler,
    validationClasses: nameValidationClasses,
    ValidClasses: nameValidClasses,
    resetInput : nameResetHandler
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    notValid: notValidEmail,
    enteredValueHandler: enteredEmailChangeHandler,
    valueBlurHandler: emailBlueHandler,
    validationClasses: validEmailClasses,
    ValidClasses: emailValidClasses,
    resetInput : emailResetHandler
  } = useInput((value) => value.includes("@"));


  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (notValidName || notValidEmail) {
      return;
    }
    nameResetHandler();
    emailResetHandler();
    console.log(enteredName, enteredEmail);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameValidClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={enteredNameChangeHandler}
          onBlur={usernameBlurHandler}
        />
      </div>
      {notValidName && (
        <p className={nameValidationClasses}>You need to input your name!</p>
      )}
      <div className={emailValidClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={enteredEmailChangeHandler}
          onBlur={emailBlueHandler}
        />
      </div>

      {notValidEmail && (
        <p className={validEmailClasses}>You need to input valid email!</p>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
