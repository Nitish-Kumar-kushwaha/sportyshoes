import Link from "next/link";
import { doLogout, getCurrentUserDetail, isLoggedIn } from "../../auth/index";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SignupValueType } from "@/Types/types";

import { CgProfile } from "react-icons/cg"
const NavBar = () => {
  const router = useRouter();
  const [rand, setRand] = useState("true");

  useEffect(() => { }, [rand]);

  const userDetail: SignupValueType | undefined = getCurrentUserDetail();
  const logout = () => {

    console.log(userDetail);
    doLogout(() => {
      if (userDetail !== undefined) {
        setRand("false");
        router.push('/');

      }

    });
  };

  return (
    <>
      <div>
        <nav className="navbar bg-primary navbar-expand-lg bg-body-primary">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">
              <h3>Sporty-Store</h3>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <form className="d-flex justify-content-center" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-success" type="submit">
                      Search
                    </button>
                  </form>
                </li>
              </ul>
              <ul className="navbar-nav">
                {!isLoggedIn() && (
                  <>
                    <li className="nav-item">
                      <Link
                        className="nav-link active text-white"
                        aria-current="page"
                        href="/forms/signup"
                      >
                        Register
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link active text-white"
                        aria-current="page"
                        href="/forms/login"
                      >
                        Login
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        className="nav-link active text-white"
                        aria-current="page"
                        href="/Admin"
                      >
                        Admin
                      </Link>
                    </li>
                  </>
                )}

                {isLoggedIn() && (
                  <>
                    <li className="nav-item">
                      <div>
                        <Link className="nav-link text-white" href="/Cart">
                          Cart{" "}
                        </Link>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className=" btn nav-link text-white" onClick={logout}>
                        Log Out
                      </a>
                    </li>
                    <li className="nav-item d-flex">
                      <h2 className="text-white"><CgProfile /></h2>
                      <a className=" btn nav-link text-white" >
                        <span className="badge text-bg-danger">{userDetail?.userName}</span>
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
