/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";

const LandingComponent = () => {
  const router = useRouter();
  return (
    <>
      <div className="container mt-4">
        <div className="fs-1">
          <h1 className="text-center fw-light">Welcome To Sporty Shoes ...</h1>
        </div>
        <div className=" ">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="images/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg"
                  className="d-block w-100 img-fluid"
                  alt="normalimage"
                  style={{ width: "640px", height: "360px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/domino-164_6wVEHfI-unsplash.jpg"
                  className="d-block w-100"
                  alt="normalimage"
                  style={{ width: "640px", height: "360px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/maksim-larin-NOpsC3nWTzY-unsplash.jpg"
                  className="d-block w-100"
                  alt="normalimage"
                  style={{ width: "640px", height: "360px" }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="mt-3 d-flex justify-content-center">
          <div className="btn btn-xl btn-outline-primary fs-3 mx-2 fw-light">
            <a
              onClick={() => {
                router.push("forms/signup");
              }}
            >
              Register
            </a>
          </div>
          <div className="btn btn-xl btn-outline-primary fs-3 mx-2 fw-light">
            <a
              onClick={() => {
                router.push("/forms/login");
              }}
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingComponent;
