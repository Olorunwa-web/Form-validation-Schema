import * as yup from "yup";

export const formSchema = yup
  .object()
  .shape({
    firstName: yup.string().required("firstname is required"),
    lastName: yup.string().required("lastname is required"),
    mobileNumber: yup
      .string()
      .required("phone number is required")
      .matches(/^[0-9]+$/, "Mobile number must contain only digits")
      .max(11, "Enter a valid Nigerian phone number"),
    email: yup
      .string()
      .required("Email is required")
      .email("invalid email format"),
    gender: yup
      .string()
      .required("pick an option")
      .oneOf(["Male", "Female"], "You must select an option!"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "min lenght of password should be at least 8 charcters"),
    file: yup
      .mixed()
      .required("File is required")
      .test("fileSize", "The file should not be more than 2MB", (value) => {
        if (!value || value.length === 0) return false;
        return value[0].size <= 2 * 1024 * 1024;
      }),
  })
  .required();
