import { ProductType } from "@/Types/types";
import { addProduct, getUser } from "@/services/userService";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

const Admin = () => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    values,
    touched,
    resetForm,
  } = useFormik<ProductType>({
    initialValues: {
      name: "",
      category: "",
      image: "",
      price: "",
    },
    onSubmit: (values: ProductType) => {
      console.log(values);
      addProduct(values)
        .then((resp) => {
          console.log(resp);
          toast.success("Product Inserted...!!!");
        })
        .catch((e) => {
          console.log(e);
          toast.error("Product Not added");
        });
      resetForm();
      
    },
  });

  return (
    <>
      <div className="container mt-4">
        <div className="text-center">
          <h1>Insert product here Here !!!!</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Product Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label>Product Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="category"
              placeholder="Enter Category"
              name="category"
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label>Enter Category</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="image"
              placeholder="Password"
              name="image"
              value={values.image}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label>Image</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="price"
              placeholder="ConfirmPassword"
              name="price"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label>Price</label>
          </div>
          <br />
          <div className="text-center">
            <button className="btn btn-primary btn-lg text-center">
              Insert Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Admin;
