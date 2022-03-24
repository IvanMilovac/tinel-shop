export const FieldValidation = {
  required: "This field is required.",
};

export const EmailFieldValidation = {
  required: "Email field is required.",
  pattern: {
    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
    message: "Invalid. Ex.:com@com.com",
  },
};

export const AddressValidation = {
  required: "Address field is required.",
  pattern: {
    value: /^[a-zA-Z0-9_,. ]*$/,
    message: "Invalid characters",
  },
};
