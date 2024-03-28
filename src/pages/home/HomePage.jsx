import React, { useEffect } from "react";
import styles from "./homePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/products/products.actions";

const HomePage = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  console.log(products);
  return (
    <div>
      {products.map((item) => (
        <div>
          <img src={item.image} alt="" />
          <h2>{item.title}</h2>
          <h3>{item.price}$</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
