import serviceAPI from '../../serviceAPI';
import { productsReducer } from '.';

const {
  addProductsSuccess,
  addProductsRequest,
  addProductsError,
  deleteProductSuccess,
  deleteProductRequest,
  deleteProductError,
  downloadProductsSuccess,
  downloadProductsRequest,
  downloadProductsError,
} = productsReducer.actions;

const addProducts = payload => async dispatch => {
  dispatch(addProductsRequest());
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

const dowloadProducts = () => async dispatch => {
  dispatch(downloadProductsRequest());
  try {
    const { data } = await serviceAPI.getProductsQuery();
    dispatch(downloadProductsSuccess(data));
  } catch (error) {
    dispatch(downloadProductsError(error.message));
  }
};

export { addProducts, deleteProducts, dowloadProducts };
