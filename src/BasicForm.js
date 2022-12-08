import { useFormik } from "formik";
import * as yup from "yup";

const formvalidationSchema = yup.object({
  password: yup.string().min(4),
});

export function BasicForm() {
  const formik = useFormik({
    initialValues: {
      email: "gayat2000@gmail.com",
      password: "",
    },
    validationSchema: formvalidationSchema,
    onSubmit: (values) => {
      console.log("form values:", values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        value={formik.values.email}
        type="email"
        placeholder="Email"
        name="email"
        onChange={formik.handleChange}
      />
      <input
        value={formik.values.password}
        type="text"
        placeholder="password"
        name="password"
        onChange={formik.handleChange}
      />
      <button type="submit">submit</button>
    </form>
  );
}
