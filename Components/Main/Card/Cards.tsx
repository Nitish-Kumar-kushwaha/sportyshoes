import { CartType, ProductType, SignupValueType } from "@/Types/types";
import { getCurrentUserDetail } from "@/auth";
import { addProductToCart, getQuantity } from "@/services/userService";
import { toast } from "react-toastify";

/* eslint-disable @next/next/no-img-element */
const Card = ({ id, name, category, image, price }: ProductType) => {
  const userDetail: SignupValueType | undefined = getCurrentUserDetail();

  const addToCart = async () => {

    const productQuantity = await getQuantity(name, userDetail?.userName)
    const product: CartType = {
      name: name,
      category: category,
      image: image,
      price: price,
      quantity: productQuantity,
      userName: userDetail?.userName,
    };
    addProductToCart(product)
      .then((res) => {
        console.log(res, "added to cart");
        toast.success("product added to cart.!!!!");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(product);
  };

  return (
    <div key={id} className="col-sm d-flex justify-content-center p-2 ">
      <div
        className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded border-0"
        style={{ width: "30rem" }}
      >
        <img src={image} className="card-img-top" alt="image" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{category}</p>
          <p className="card-text">{price}</p>
          <a className="btn btn-primary" onClick={addToCart}>
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
