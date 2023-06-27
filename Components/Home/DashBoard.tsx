import { SignupValueType } from "@/Types/types";
import { doLogout, getCurrentUserDetail, isLoggedIn } from "@/auth";
import Login from "@/pages/forms/login/Login";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LandingComponent from "./Landing/LandingComponent";
import Link from "next/link";

const DashBoard = () => {
  const router = useRouter();
  const [rand, setRand] = useState("true");

  useEffect(() => {}, [rand]);

  const logout = () => {
    const userDetail: SignupValueType | undefined = getCurrentUserDetail();
    console.log(userDetail);
    doLogout(() => {
      if (userDetail !== undefined) {
        console.log(userDetail.userName, "user logout...!!!!");
        setRand("false");
        router.push("/");
      }
    });
  };


  if (isLoggedIn()) {
    return (
      <>
        <div className="conatiner">
          <h1 text-center>Dashboard</h1>

          <div className="container d-flex ">
            <h1>It`st home page</h1>
            <a className="btn btn-primary btn-outline" onClick={logout}>
              LogOut
            </a>
            <a className="btn btn-md btn-success">
              <Link href={"/Cart"}>Cart</Link>{" "}
            </a>
          </div>
        </div>
      </>
    );
  } else {
    router.push("/");
  }
};

export default DashBoard;
