import * as React from 'react';
import { connect } from 'react-redux';
import {
  FontWeights,
  Image,
  ImageFit,
  Panel,
  PrimaryButton,
  Stack,
  Text,
} from '@fluentui/react';
import { AddToCart, RemoveFromCart } from '@vstore/ui/buttons';
import {
  addProductIntoCart,
  hideCartPanel,
  removeProductFromCart,
  showCheckoutModal,
} from '../../actionCreators/cart-actions';
import { Card } from '@uifabric/react-cards';

const totalAmountTextStyles = {
  root: {
    lineHeight: 32,
    fontWeight: FontWeights.bold,
  },
};

const addSomeProductsFromSiteStyles = {
  root: {
    lineHeight: 32,
    fontWeight: FontWeights.semibold,
  },
};

const noProductAddedStackStyles = {
  root: {
    marginTop: 50,
  },
};

const titleTextStyles = {
  root: {
    fontWeight: FontWeights.semibold,
  },
};

const productImageStyle = { root: { padding: 10 } };

const cardTokens = { childrenMargin: 12 };

const cartHolderContainerTokens = { margin: 8 };

const quantitlyTextStyles = {
  root: {
    lineHeight: 32,
    padding: '0, 8px',
  },
};
export const ProductSummaryInCart = ({
  category,
  id,
  image,
  price,
  title,
  quantity,
  addProductIntoCart,
  removeProductFromCart,
}) => {
  const addIntoCart = () =>
    addProductIntoCart({
      id,
      category,
      image,
      price,
      title,
    });
  const removeFromCart = () =>
    removeProductFromCart({
      id,
      category,
      image,
      price,
      title,
    });

  return (
    <Card
      aria-label="Clickable horizontal card "
      horizontal
      tokens={cardTokens}
    >
      <Card.Item fill styles={productImageStyle}>
        <Image
          src={image}
          alt={title}
          imageFit={ImageFit.contain}
          height="64px"
          width="64px"
        />
      </Card.Item>
      <Card.Section grow={1}>
        <Text variant="small" styles={titleTextStyles}>
          {title}
        </Text>
        <Stack horizontal>
          {quantity > 0 && (
            <>
              <RemoveFromCart onClick={removeFromCart} />
              <Text styles={quantitlyTextStyles}>{quantity}</Text>
            </>
          )}
          <AddToCart onClick={addIntoCart} />
        </Stack>
        <Stack horizontal>
          <Stack.Item>
            <Text variant="small" styles={titleTextStyles}>
              Price: ${price}
            </Text>
          </Stack.Item>
          <Stack.Item grow={1}>
            <span />
          </Stack.Item>
          <Stack.Item>
            <Text variant="small" styles={titleTextStyles}>
              Total: ${quantity * price}
            </Text>
          </Stack.Item>
        </Stack>
      </Card.Section>
    </Card>
  );
};

export const CartSummaryFooter = ({ total, onCheckout, quantity }) => {
  const isCheckoutDisabled = quantity === 0;
  return (
    <Stack horizontal>
      <Stack.Item disableShrink>
        <Text styles={totalAmountTextStyles}>Total Amount: ${total}</Text>
      </Stack.Item>
      <Stack.Item grow>
        <span />
      </Stack.Item>
      <Stack.Item disableShrink>
        <PrimaryButton
          text="Checkout"
          onClick={onCheckout}
          disabled={isCheckoutDisabled}
        />
      </Stack.Item>
    </Stack>
  );
};

export const CartSummary = ({
  isOpen,
  totalQuantity,
  totalAmount,
  onDismiss,
  products,
  addProductIntoCart,
  onCheckout,
  removeProductFromCart,
}) => {
  return (
    <div>
      <Panel
        isOpen={isOpen}
        onDismiss={onDismiss}
        headerText={`Cart Summary: ${totalQuantity} Item(s)`}
        closeButtonAriaLabel="Close"
        onRenderFooterContent={() => (
          <CartSummaryFooter
            total={totalAmount}
            quantity={totalQuantity}
            onCheckout={onCheckout}
          />
        )}
        isFooterAtBottom={true}
      >
        {totalQuantity === 0 && (
          <Stack verticalFill styles={noProductAddedStackStyles}>
            <Text styles={addSomeProductsFromSiteStyles}>
              Add some products from catalogue
            </Text>
          </Stack>
        )}
        {totalQuantity !== 0 && (
          <Stack tokens={cartHolderContainerTokens}>
            {products.allId.map((id) => (
              <ProductSummaryInCart
                {...products.byId[id]}
                addProductIntoCart={addProductIntoCart}
                removeProductFromCart={removeProductFromCart}
              />
            ))}
          </Stack>
        )}
      </Panel>
    </div>
  );
};

const calculateTotalAmount = ({ products }) => {
  const totalAmount = products.allId
    .map((id) => {
      const _product = products.byId[id];
      return _product.quantity * _product.price;
    })
    .reduce((acc, price) => acc + price, 0);
  return totalAmount.toFixed(2);
};

const mapStateToProps = ({ cart }) => ({
  totalAmount: calculateTotalAmount(cart),
  totalQuantity: cart.total,
  isOpen: cart.display,
  products: cart.products,
});

const mapDispatchToProps = {
  onCheckout: showCheckoutModal,
  onDismiss: hideCartPanel,
  addProductIntoCart,
  removeProductFromCart,
};

export const CartSummaryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartSummary);
