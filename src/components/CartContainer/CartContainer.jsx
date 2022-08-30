import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCartState } from "../../features/Cart/CartSlice";
import { toggleShowModal } from "../../features/Modal/ModalSlice";
import CartItem from "../CartItem/CartItem";
import * as S from "./style";
import { Button } from "antd";

const CartContainer = ({ handleSetModal }) => {
  const { cartItems, amount, total } = useSelector(getAllCartState);
  const dispatch = useDispatch();
  if (amount < 1) {
    return (
      <S.CartContainerDiv>
        <h1>Your Bag</h1>
        <h3>Is Currently Empty</h3>
      </S.CartContainerDiv>
    );
  }
  return (
    <>
      <S.CartContainerDiv>
        <h1>Your Bag</h1>
        <S.CartItemsContainer>
          {cartItems.map((cartItem, index) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))}
        </S.CartItemsContainer>
        <hr className="divider" />
        <S.CartBottomContainer>
          <h4>Total :</h4>
          <span>{total}$</span>
        </S.CartBottomContainer>
        <Button onClick={() => dispatch(toggleShowModal())} size="large" danger>
          Clear all Items
        </Button>
      </S.CartContainerDiv>
    </>
  );
};

export default CartContainer;
