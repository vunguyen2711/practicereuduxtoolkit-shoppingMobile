import styled from "styled-components";

export const CartContainerDiv = styled.div`
  padding: 20px 40px;
  min-height: calc(100vh - 100px);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    margin: 50px 0 30px 0;
    font-size: 40px;
    letter-spacing: 2px;
    font-weight: normal;
  }
  h3 {
    font-size: 36px;
  }
  .divider {
    margin-top: 20px;
    border-width: 2px;
    width: 100%;
  }
`;
export const CartItemsContainer = styled.div`
  width: 100%;
`;
export const CartBottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  gap: 50px;
`;
