/* eslint-disable @next/next/no-img-element */
import { CartType, SignupValueType } from "@/Types/types";
import { getCurrentUserDetail } from "@/auth";
import {
  addMoreToCart,
  deleteProduct,
  getCartProducts,
  getUser,
  removeOneByOneFromCart,
} from "@/services/userService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const InsideCart = () => {
  const user: SignupValueType | undefined = getCurrentUserDetail();
  const [cartProduct, setCartProduct] = useState<CartType[]>([]);
  const [rand, setRand] = useState<number>(0);

  useEffect(() => {
    getCartProducts(user?.userName)
      .then((res) => {
        setCartProduct(res);
      })
        .catch((err) => {
          
        console.log(err);
      });
  }, [rand]);

  console.log(user?.userName);
  const add = async (val: CartType) => {
    await addMoreToCart(val)
      .then((res) => {
        console.log(res);
        setRand(Math.random());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const less = async (val: CartType) => {
    await removeOneByOneFromCart(val)
      .then((res) => {
        setRand(Math.random());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const remove = async (val: CartType) => {
    await deleteProduct(val)
      .then((res) => {
        setRand(Math.random());
        console.log("Product deleted...", res);
        toast.success("Deleted.!!!!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const CartProduct = (val: CartType) => {
    return (
      <>
        <div
          className="card mb-3"
          //   style={{ minWidth: "35rem", maxWidth: "55rem" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={val.image}
                className="img-fluid rounded-start"
                alt="randomImage"
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">{val.name}</h5>
                <p className="card-text">
                  {val.price}*{val.price}
                </p>
                <p className="card-text">{val.quantity}</p>
              </div>
            </div>
            <div className=" col-md-2 d-flex flex-column d-grid gap-2 col-6 mx-auto">
              <div className="mx-auto p-2">
                <button
                  className="btn btn-md btn-outline-primary"
                  onClick={() => add(val)}
                >
                  Add more
                </button>
              </div>
              <div className="mx-auto p-2">
                <a
                  className="btn btn-md btn-outline-warning"
                  onClick={() => less(val)}
                >
                  less
                </a>
              </div>
              <div className="mx-auto p-2">
                <a
                  className="btn btn-md btn-outline-danger"
                  onClick={() => remove(val)}
                >
                  remove
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  if(cartProduct!= null){
    return (
      <div>
        <div className="row">
          <div className="col-md-8">{cartProduct.map(CartProduct)}</div>
          <div className="col-6 col-md-4 text-center">
            <div className="border">
              <div>
                <h1>Total</h1>
              </div>
              <div>
                <h3>Sub- Total</h3>
              </div>
              <div>
                <h3>Delivery</h3>
              </div>
              <div>
                <a className="btn btn-md btn-outline-success">CHECKOUT</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    <div>
      <h1>Cart is Empty.!!!!!</h1>
    </div>;
  }
};

export default InsideCart;
