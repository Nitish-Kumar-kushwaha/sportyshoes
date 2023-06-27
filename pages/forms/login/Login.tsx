import { useFormik } from "formik";
import * as Yup from "yup";

import { LoginType, SignupValueType } from "@/Types/types";
import { getUser, loginUser } from "@/services/userService";
import { toast } from "react-toastify";
import { doLogin, isLoggedIn } from "@/auth";
import { useRouter } from "next/router";
import { sys } from "typescript";

const Login = () => {
  const router = useRouter();
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    errors,
    values,
    touched,
    resetForm,
  } = useFormik<LoginType>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values: LoginType) => {
      console.log(values);
      loginUser(values)
        .then((response: boolean | SignupValueType | void) => {
          console.log(response);

          if (response === false) {
            toast.error("password is wrong...!!!");
          } else {
            console.log(response);
            doLogin(response, () => {
              console.log("data saved to local storage");
              router.push("/Dashboard");
              console.log("switched to homapeage");
            });

            console.log("user is loged in....!!!!!");
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Something went wrong...!!!!");
        });

      resetForm();
      getUser()
        .then((responseee: SignupValueType) => {
          console.log("values",responseee);
        })
        
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>Login Here !!!!!!</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label>Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label>Password</label>
        </div>
        <br />
        <button className="btn btn-primary btn-lg" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
