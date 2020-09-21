import { Stack } from '@fluentui/react';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Loader } from '@vstore/ui/loader';

import { fetchProducts } from '../actionCreators/productActions';
import { ProductCardContainer } from '../product-card/product-card';
import { CartSummaryContainer } from '@vstore/ui/shopping-cart';
import { AddressContainer } from '@vstore/ui/address';

const stackStyles = {
  root: {
    justifyContent: 'center',
    marginTop: 74,
  },
  inner: {
    width: '1098px',
  },
};

export class Catalogue extends Component {
  render() {
    const { data, loading } = this.props;
    return (
      <>
        {loading && <Loader />}
        {!loading && (
          <Stack horizontal wrap verticalFill styles={stackStyles}>
            {data.map((details) => {
              return <ProductCardContainer {...details} key={details.id} />;
            })}
          </Stack>
        )}
        <CartSummaryContainer />
        <AddressContainer />
      </>
    );
  }
}

const mapStateToProps = ({ products, cart }) => ({
  pageCursor: products.pageCursor,
  data: products.data,
  loading: products.loading,
  error: products.error,
  productsInCart: cart.products,
});
const mapDispatchToProps = {
  fetchProducts,
};
export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
