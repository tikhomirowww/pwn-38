import React, { useState } from "react";
import AuthForm from "../../../features/auth/AuthForm";
import Input from "../../../widgets/inputs/Input";
import Button from "../../../widgets/buttons/Button";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../store/products/products.actions";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    for (let key in product) {
      if (!product[key]) {
        alert("Some inputs are empty!");
        return;
      }
    }
    dispatch(createProduct(product));
    setProduct({
      title: "",
      description: "",
      price: "",
      image: "",
    });
    navigate("/");
    console.log(product);
  }

  return (
    <AuthForm>
      <form className="formStyles" onSubmit={handleSubmit}>
        <h2>Create product</h2>
        <Input onChange={handleChange} name="title" value={product.title} />
        <Input
          onChange={handleChange}
          name="description"
          value={product.description}
        />
        <Input onChange={handleChange} name="price" value={product.price} />
        <Input onChange={handleChange} name="image" value={product.image} />
        <Button>Add product</Button>
      </form>
    </AuthForm>
  );
};

export default AddProduct;
