import React, { useEffect, useState } from "react";
import AuthForm from "../../../features/auth/AuthForm";
import Input from "../../../widgets/inputs/Input";
import Button from "../../../widgets/buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  editProduct,
  getOneProduct,
} from "../../../store/products/products.actions";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const { oneProduct } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [dispatch]);

  useEffect(() => {
    oneProduct && setProduct(oneProduct);
  }, [oneProduct]);

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
    dispatch(editProduct({ id, product }));
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
        <h2>Edit product</h2>
        <Input onChange={handleChange} name="title" value={product.title} />
        <Input
          onChange={handleChange}
          name="description"
          value={product.description}
        />
        <Input onChange={handleChange} name="price" value={product.price} />
        <Input onChange={handleChange} name="image" value={product.image} />
        <Button>Save changes</Button>
      </form>
    </AuthForm>
  );
};

export default EditProduct;
