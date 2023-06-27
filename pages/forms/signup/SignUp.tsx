import { Formik, useFormik } from "formik";
import { type } from "os";
import * as Yup from "yup";

import { SignupValueType } from "@/Types/types";
import { signUp } from "@/services/userService";
import { toast } from "react-toastify";

const SignUp = () => {
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    touched,
    errors,
    resetForm,
  } = useFormik<SignupValueType>({
    initialValues: {
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values: SignupValueType) => {
      console.log(values);
      signUp(values)
        .then((resp) => {
          console.log(resp);
          console.log("Success Log...!!!");
          toast.success("User is registered...!!!!");
        })
        .catch((error) => {
          console.log(error);
          console.log("error log......!");
          toast.error("Went something wrong....!!!");
        });
      resetForm();
    },
  });

  return (
    <>
      <div className="container mt-4">
        <div className="text-center">
          <h1>Register Here !!!!</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label>Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="user name"
              name="userName"
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label>Enter User Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label>Password</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="ConfirmPassword"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label>Confirm Password</label>
          </div>
          <br />
          <div className="text-center">
            <button className="btn btn-primary btn-lg text-center">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
