import * as yup from "yup";

// ====Validation Schema ========= //

const ValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z]+(\s+[A-Za-z]+)*$/, "Name should not contain numbers"),
  age: yup
    .number()
    .positive("Enter valid Age")
    .transform((value) =>
      isNaN(value) || value === null || value === undefined ? 0 : value
    )
    .required("Age is required"),

  sex: yup
    .string()
    .oneOf(["M", "F", "other"], "Enter a valid sex")
    .required("Gender is required"),

  mobile: yup
    .mixed()
    .nullable(true)
    .test(
      "is-valid-mobile",
      "Enter a valid 10-digit mobile number",
      (value) => !value || /^[0-9]{10}$/.test(value)
    )
    .test(
      "not-start-with-0-5",
      "Mobile number should not start with 0, 1, 2, 3, 4, or 5",
      (value) =>
        !value || !["0", "1", "2", "3", "4", "5"].includes(value.charAt(0))
    ),

  id_Type: yup.string().nullable(true),

  id_No: yup
    .mixed()
    .nullable(true)
    .test("is-valid-id", "Invalid ID Number", function (value) {
      const idType = this.parent.id_Type;
      if (idType === "Aadhar Card") {
        return (
          /^[0-9]{12}$/.test(value || "") ||
          this.createError({ message: "Enter valid Aadhar card number" })
        );
      } else if (idType === "Pan Card") {
        return (
          /^[a-zA-Z0-9]{10}$/.test(value || "") ||
          this.createError({ message: "Enter valid PAN card number" })
        );
      } else {
        return /^[a-zA-Z0-9]*$/.test(value || "");
      }
    }),
  econtact: yup
    .mixed()
    .nullable(true)
    .test(
      "is-valid-mobile",
      "Enter a valid 10-digit mobile number",
      (value) => !value || /^[0-9]{10}$/.test(value)
    )
    .test(
      "not-start-with-0-5",
      "Mobile number should not start with 0, 1, 2, 3, 4, or 5",
      (value) =>
        !value || !["0", "1", "2", "3", "4", "5"].includes(value.charAt(0))
    ),
  email: yup.string().email(),
});

export default ValidationSchema;
