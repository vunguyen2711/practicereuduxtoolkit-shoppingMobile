import React from "react";
import * as S from "./style";
import { Button, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getStateIsShow,
  toggleShowModal,
} from "../../features/Modal/ModalSlice";
import { clearCart } from "../../features/Cart/CartSlice";

const { Title } = Typography;

const Modal = () => {
  const dispatch = useDispatch();
  const isShowModal = useSelector(getStateIsShow);

  return (
    <>
      <S.ModalOverlay
        onClick={() => dispatch(toggleShowModal())}
        isShowModal={isShowModal}
      ></S.ModalOverlay>
      <S.ModalContainer isShowModal={isShowModal}>
        <Title level={3}>Do you want to clear your card</Title>
        <div className="modal-button-container">
          <Button
            onClick={() => {
              dispatch(clearCart());
              dispatch(toggleShowModal());
            }}
            type="primary"
          >
            Yes, i do
          </Button>
          <Button onClick={() => dispatch(toggleShowModal())} danger>
            No, i don't
          </Button>
        </div>
      </S.ModalContainer>
    </>
  );
};

export default Modal;
