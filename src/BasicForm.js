import { useFormik } from "formik";
import * as yup from "yup";

const formvalidationSchema = yup.object({
  email: yup
    .string()
    .min(8, "need a bigger email😒")
    .required("need cooler email is needed"),
  password: yup
    .string()
    .min(4, "need bigger password")
    .required("need cooler password is needed"),
});

export function BasicForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formvalidationSchema,
    onSubmit: (values) => {
      console.log("form values:", values);
    },
  });
  return (
    <form className="add-movie-form" onSubmit={formik.handleSubmit}>
      <input
        value={formik.values.email}
        type="email"
        placeholder="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? formik.errors.email : null}
      <input
        value={formik.values.password}
        type="text"
        placeholder="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.password.email
        ? formik.errors.password
        : null}

      <h1>errors</h1>
      <pre>{JSON.stringify(formik.errors)}</pre>
      <h1>touvhed</h1>
      <pre>{JSON.stringify(formik.touched)}</pre>
      <button type="submit">submit</button>
    </form>
  );
}
