export const VALIDATION_TYPE_REQUIRE = () => {
  type: "VALIDATION_TYPE_REQUIRE";
};

export const VALIDATION_TYPE_MINLENGTH = (value) => {
  type: "VALIDATION_TYPE_MINLENGTH";
  val: value;
};

export const VALIDATION_TYPE_MAXLENGTH = (value) => {
  type: "VALIDATION_TYPE_MAXLENGTH";
  val: value;
};

export const validate;