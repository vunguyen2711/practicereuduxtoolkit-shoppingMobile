import styled, { css } from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
  ${(props) =>
    props.isShowModal
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`;
export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 150px;
  padding: 20px 40px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #000;
  z-index: 100;
  text-align: center;
  ${(props) =>
    props.isShowModal
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
  .modal-button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 100%;
    margin-top: 30px;
  }
`;
