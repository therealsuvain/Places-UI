export const VALIDATION_TYPE_REQUIRE = () => {
  return { type: "VALIDATION_TYPE_REQUIRE" };
};

export const VALIDATION_TYPE_MINLENGTH = (value) => ({
  type: "VALIDATION_TYPE_MINLENGTH",
  val: value,
});

export const VALIDATION_TYPE_MAXLENGTH = (value) => ({
  type: "VALIDATION_TYPE_MAXLENGTH",
  val: value,
});

export const validate = (value, validators) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === "VALIDATION_TYPE_REQUIRE") {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === "VALIDATION_TYPE_MINLENGTH") {
      isValid = isValid && value.trim().length >= validator.val;
    }
    if (validator.type === "VALIDATION_TYPE_MAXLENGTH") {
      isValid = isValid && value.trim().length <= validator.val;
    }
  }
  return isValid;
};
