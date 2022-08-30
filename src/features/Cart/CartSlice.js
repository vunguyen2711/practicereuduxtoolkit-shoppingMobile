import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import cartItems from "../../cartItems";
const initialState = {
  cartItems: [],
  amount: 4,
  total: 0,
  isLoading: true,
};
const url = "https://course-api.com/react-useReducer-cart-project";

// export const getCartItems = createAsyncThunk(
//   "cart/getCartItems",
//   async (thunkAPI) => {
//     try {
//       const response = await axios(url);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue("something went wrong");
//     }
//   }
// );
export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  const response = await axios.get(url);
  console.log(response);
  return response.data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== payload
      );
    },
    increaseAmount: (state, { payload }) => {
      const cartItem = state.cartItems.find(
        (cardItem) => cardItem.id === payload
      );
      cartItem.amount = cartItem.amount + 1;
    },
    descreaseAmount: (state, { payload }) => {
      const cartItem = state.cartItems.find(
        (cardItem) => cardItem.id === payload
      );
      if (cartItem.amount == 0) return;
      cartItem.amount = cartItem.amount - 1;
    },
    caculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((cartItem) => {
        amount += cartItem.amount;
        total += cartItem.amount * cartItem.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      console.log("pending");
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.cartItems = payload;
      console.log(payload);
    },
    [getCartItems.rejected]: (state) => {
      console.log("reject");
      state.isLoading = false;
    },
  },
});

export const getAllCartState = (state) => state.cart;
export const {
  clearCart,
  removeItem,
  increaseAmount,
  descreaseAmount,
  caculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
