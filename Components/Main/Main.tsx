/* eslint-disable react-hooks/rules-of-hooks */
import Card from "@/Components/Main/Card/Cards";
import Filter from "@/Components/Main/Filter/Filter";
import { ProductType, SignupValueType } from "@/Types/types";
import { isLoggedIn } from "@/auth";
import { getUser } from "@/services/userService";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Main = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [product, setProduct] = useState<ProductType[]>([]);

  useEffect(() => {
    getUser()
      .then((res: ProductType[]) => {
        setProduct(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const router = useRouter()

  function nCard(val: ProductType): any {
    return (
      <Card
        id={val.id}
        name={val.name}
        category={val.category}
        image={val.image}
        price={val.price}
      />
    );
  }

  if (isLoggedIn()) {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 col-md-3 ">
            <h1 className="text-center">Filters</h1>
            <Filter />
          </div>
          <div className="col-md-9 row ">{product.map(nCard)}</div>
        </div>
      </div>
    );
  }
  else {
    router.push("/");
  }


};

export default Main;
