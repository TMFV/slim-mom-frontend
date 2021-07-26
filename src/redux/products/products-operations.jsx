import serviceAPI from '../../serviceAPI';
import { productsReducer } from '.';

const {
  addProductsSuccess,
  addProductsRequest,
  addProductsError,
  deleteProductSuccess,
  deleteProductRequest,
  deleteProductError,
} = productsReducer.actions;

const addProducts = payload => async dispatch => {
  dispatch(addProductsRequest());
  console.log(payload);
  try {
    const { data } = await serviceAPI.addProductQuery(payload);
    dispatch(addProductsSuccess(data));
  } catch (error) {
    dispatch(addProductsError(error.massage));
  }
};

const deleteProducts = id => async dispatch => {
  dispatch(deleteProductRequest());
  try {
    await serviceAPI.deletProductQuery(id);
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductError(error.massage));
  }
};

export { addProducts, deleteProducts };
