import AdminInsert from "@/Components/Admin/AdminInsert";
import NavBar from "@/Components/Nav Bar/NavBar";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();


  return (
    <>
      <NavBar />

      <div className="container">
        <div className="mt-4 p-5 bg-secondary text-white text-center rounded shadow">
          <h1 className="display-4">Welcome Admin </h1>
          <h4>Easily manage website data</h4>
        </div>

        <div className=" d-flex justify-content-center">
          <div className=" mx-3 my-3 card shadow-lg p-3 mb-5 bg-body-tertiary rounded border-0" style={{ width: "25rem" }}>
            <div className="card-body">
              <h1>Products</h1>
              <p>Manage all the products here.</p>
              <a className="btn btn-lg btn-primary" style={{ width: "10rem" }} onClick={() => { router.push("/Admin/Insert") }}>Insert</a>

            </div>
          </div>

          <div className=" mx-3 my-3 card shadow-lg p-3 mb-5 bg-body-tertiary rounded border-0" style={{ width: "25rem" }}>
            <div className="card-body">
              <h1>Registered Users</h1>
              <p>See All Registered Users Here.</p>
              <a className="btn btn-lg btn-primary" style={{ width: "10rem" }} onClick={() => { router.push("/Admin/allusers") }}>List Users</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
