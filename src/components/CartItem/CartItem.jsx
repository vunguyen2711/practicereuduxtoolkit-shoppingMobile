import React from "react";
import { Button, Tooltip } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import * as S from "./style";
import { useDispatch } from "react-redux";
import {
  removeItem,
  increaseAmount,
  descreaseAmount,
} from "../../features/Cart/CartSlice";

const CartItem = ({ id, title, img, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <S.CartItemContainer>
      <S.CartItemInfo>
        <img className="cart-item-img" src={img} alt="" />
        <div className="cart-item-text">
          <h4>{title}</h4>
          <h4>{price}</h4>
          <button onClick={() => dispatch(removeItem(id))}>Remove</button>
        </div>
      </S.CartItemInfo>
      <S.CartItemControl>
        <Tooltip title="Plus">
          <Button
            name="plus"
            size="small"
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            onClick={() => dispatch(increaseAmount(id))}
          />
        </Tooltip>
        <p className="cart-item-amount">{amount}</p>
        <Tooltip title="Minus">
          <Button
            name="minus"
            size="small"
            type="primary"
            shape="circle"
            icon={<MinusOutlined />}
            onClick={() => dispatch(descreaseAmount(id))}
          />
        </Tooltip>
      </S.CartItemControl>
    </S.CartItemContainer>
  );
};

export default CartItem;
