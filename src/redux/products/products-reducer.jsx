import { createSlice } from '@reduxjs/toolkit';

const initialProductsState = {
  products: [],
  isLoading: false,
  filter: '',
  error: null,
};

const { actions, reducer } = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {
    addProductsSuccess: (state, { payload }) => {
      state.products = [...state.contacts, payload];
      state.isLoading = false;
      state.error = null;
    },
    addProductsRequest: state => {
      state.isLoading = true;
    },
    addProductsError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    deleteProductSuccess: (state, { payload }) => {
      state.products = payload;
      state.isLoading = false;
      state.error = null;
    },
    deleteProductRequest: state => {
      state.isLoading = true;
    },
    deleteProductError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export default { actions, reducer };
