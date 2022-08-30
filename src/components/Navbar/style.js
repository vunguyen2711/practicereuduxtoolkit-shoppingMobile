import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 100px;
  padding: 20px 40px;
  background-color: #604cf8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: 36px;
    color: white;
  }
  svg {
    font-size: 36px;
    color: white;
  }
  .cart-amount {
    position: absolute;
    top: 20px;
    right: 30px;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 21px;
    border-radius: 50%;
    background-color: red;
    color: white;
  }
`;
