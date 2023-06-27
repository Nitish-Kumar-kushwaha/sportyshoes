import InsideCart from "@/Components/InsideCart/InsideCart";
import NavBar from "@/Components/Nav Bar/NavBar";
import { isLoggedIn } from "@/auth";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/");
    }
  }, []);

  if (isLoggedIn()) {
    return (
      <div>
        <NavBar />
        <h1>Inside Cart.!!!!</h1>
        <InsideCart />
      </div>
    );
  }
  return null;
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
