import { myAxios } from "./helper";
import { CartType, ProductType, SignupValueType } from "@/Types/types";
import { LoginType } from "@/Types/types";
import { AxiosError } from "axios";

export const signUp = (user: SignupValueType) => {
  return myAxios.post("/adduser", user).then((response) => {
    console.log(response.data);
  });
};

export const loginUser = (user: LoginType) => {
  return myAxios.post("/login", user).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export const getAllUser = () => {
  return myAxios.get("/allUsers").then((response) => {
    return response.data;
  })
}

export const addProduct = (product: ProductType) => {
  return myAxios.post("/product/add", product).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export const getUser = () => {
  return myAxios.get("/product/show").then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export const addProductToCart = (product: CartType) => {
  return myAxios.post("/cart/add", product).then((response) => {
    console.log("product added", response.data);
    return response.data;
  });
};

export const getQuantity = (name: string, userName: string | undefined) => {
  return myAxios
    .get("/cart/quantity", { params: { name: name, userName: userName } })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

export const getCartProducts = (userName: string | undefined) => {
  return myAxios.get(`/cart/products/${userName}`).then((Response) => {
    console.log(Response.data);

    return Response.data;
  }).catch((err: AxiosError) => {
    if (err.response && err.response.status === 404) {
      console.log("cart is empty");
      return null;
    }
    console.log(err);
  });
};

export const addMoreToCart = (product: CartType) => {
  return myAxios.post("/cart/Product/inc", product).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export const removeOneByOneFromCart = (product: CartType) => {
  return myAxios.post("/cart/Product/dec", product).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export const deleteProduct = (product: CartType) => {
  return myAxios.post("/cart/Product/delete", product).then((response) => {
    console.log(response.data);
    return response.data;
  });
}
