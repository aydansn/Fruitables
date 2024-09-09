import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SingleRandomTwo = () => {
  const [singleProduct, setSingleProduct] = useState();
  console.log(singleProduct);
  let [searchParam] = useSearchParams();
  let id = searchParam.get("whichProduct");
  console.log(id, "id");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, []);

  return (
    singleProduct && (
      <div>
        <div>{singleProduct.title}</div>
        <div>{singleProduct.price}</div>
      </div>
    )
  );
};

export default SingleRandomTwo;
