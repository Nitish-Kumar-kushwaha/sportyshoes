import Admin from "@/Components/Admin/Admin";
import DashBoard from "@/Components/Home/DashBoard";
import Main from "@/Components/Main/Main";
import NavBar from "@/Components/Nav Bar/NavBar";
import { isLoggedIn } from "../../auth/index";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Home = () => {
  const router = useRouter();
  const [check, setCheck] = useState<boolean>(false);

  useEffect(() => {
    const res: boolean | undefined = isLoggedIn();
    if (typeof res !== "undefined") {
      setCheck(res);
    }
  }, [check]);

  console.log(check)

  if (check) {
    return (
      <>
        <NavBar />

        <Main />

        <DashBoard />
      </>
    );
  } else {
    return (
      <>
        <h1>Logged out </h1>
      </>
    );
  }
};

export default Home;
