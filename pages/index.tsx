import dynamic from "next/dynamic";
import DashBoard from "@/Components/Home/DashBoard";
import LandingComponent from "@/Components/Home/Landing/LandingComponent";
import Main from "@/Components/Main/Main";
import NavBar from "@/Components/Nav Bar/NavBar";
import { useEffect } from "react";
import { getCurrentUserDetail, isLoggedIn } from "@/auth";
import { SignupValueType } from "@/Types/types";

const Home = () => {
  const userDetail: SignupValueType | undefined = getCurrentUserDetail();

  useEffect(()=>{},[userDetail])
  return (
    <>
      <NavBar />
      <LandingComponent />
    </>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
