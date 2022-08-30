import React, { useEffect, useState } from "react";
import { GlobalStyle } from "./globalStyle";
import Navbar from "./components/Navbar/Navbar";
import CartContainer from "./components/CartContainer/CartContainer";
import Modal from "./components/Modal/Modal";
import {
  caculateTotal,
  getAllCartState,
  getCartItems,
} from "./features/Cart/CartSlice";
import { useSelector, useDispatch } from "react-redux";
const App = () => {
  const { cartItems, isLoading } = useSelector(getAllCartState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(caculateTotal());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  return (
    <>
      <GlobalStyle />
      <Modal />
      <Navbar />
      {isLoading ? (
        <>
          <h1>...Is Loading</h1>
        </>
      ) : (
        <CartContainer />
      )}
    </>
  );
};

export default App;
