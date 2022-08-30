import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowModal: false,
};

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleShowModal: (state) => {
      state.isShowModal = !state.isShowModal;
    },
  },
});
export const { toggleShowModal } = ModalSlice.actions;
export const getStateIsShow = (state) => state.modal.isShowModal;
export default ModalSlice.reducer;
