import { createSelector } from '@reduxjs/toolkit';

const getStateProducts = state => state.products.products;
const getStateFilterProducts = state => state.products.filter;
const getSearchList = state => state.products.searchList;

const getFilterProducts = createSelector(
  [getStateProducts, getStateFilterProducts],
  (products, inputFilter) => {
    const normolizeInputFilter = inputFilter.toLowerCase();
    return products.filter(product =>
      product.title.toLocaleLowerCase().includes(normolizeInputFilter),
    );
  },
);

export default { getStateProducts, getFilterProducts, getSearchList };
