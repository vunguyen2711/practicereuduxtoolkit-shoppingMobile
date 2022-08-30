import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  border-top: 1px solid #000;
`;

export const CartItemInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  .cart-item-img {
    height: 100px;
  }
`;
export const CartItemControl = styled.div`
  display: flex;

  .cart-item-amount {
    margin: 0 5px;
    font-size: 18px;
  }
`;
