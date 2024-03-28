import React, { useEffect } from "react";
import styles from "./productCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/products/products.actions";
import Button from "../../widgets/buttons/Button";

const HomePage = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  console.log(products);
  return (
    <div className={styles.cardList}>
      {products.map((item) => (
        <div className={styles.card}>
          <img src={item.image} alt="" />
          <h2>{item.title}</h2>
          <h3>{item.price}$</h3>
          <p>{item.description}</p>
          <Button color="blue">edit</Button>
          <Button color="red">delete</Button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
