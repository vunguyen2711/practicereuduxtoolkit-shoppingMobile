import React, { memo } from "react";
import { useSelector } from "react-redux";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { getAllCartState } from "../../features/Cart/CartSlice";
import * as S from "./style";
const Navbar = () => {
  const { amount } = useSelector(getAllCartState);

  return (
    <S.NavbarContainer>
      <h2>VuAppleStore</h2>

      <ShoppingCartOutlined className="cart-icon" />

      <span className="cart-amount">{amount}</span>
    </S.NavbarContainer>
  );
};

export default Navbar;
