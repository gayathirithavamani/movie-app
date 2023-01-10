import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email: yup
    .string()
    .min(8, "need a bigger email😒")
    .required("need cooler email is needed😁")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i
    ),
  password: yup
    .string()
    .min(4, "need bigger password👍")
    .required("need cooler password is needed😘"),
});

export function BasicForm() {
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        console.log("form values:", values);
      },
    });
  return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <input
        value={values.email}
        type="email"
        placeholder="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.email && errors.email ? errors.email : null}
      <input
        value={values.password}
        type="text"
        placeholder="password"
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.password && errors.password ? errors.password : null}

      {/* <h1>errors</h1>
      <pre>{JSON.stringify(formik.errors)}</pre>
      <h1>touvhed</h1>
      <pre>{JSON.stringify(formik.touched)}</pre> */}

      <button type="submit">Submit</button>
    </form>
  );
}
