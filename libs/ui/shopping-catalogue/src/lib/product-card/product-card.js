import * as React from 'react';
import { connect } from 'react-redux';
import { Card } from '@uifabric/react-cards';
import { FontWeights, Image, ImageFit, Stack, Text } from '@fluentui/react';

import {
  AddToCart,
  AddToWatchlist,
  Bookmark,
  RemoveFromCart,
} from '@vstore/ui/buttons';

import {
  addProductIntoCart,
  removeProductFromCart,
} from '@vstore/ui/shopping-cart';

export class ProductCard extends React.Component {
  addIntoCart = () => {
    const { category, id, image, price, title } = this.props;
    this.props.addProductIntoCart({
      id,
      category,
      image,
      price,
      title,
    });
  };

  removeFromCart = () => {
    const { category, id, image, price, title } = this.props;
    this.props.removeProductFromCart({
      id,
      category,
      image,
      price,
      title,
    });
  };

  render() {
    const { category, id, image, price, title, quantityInCart } = this.props;
    const descriptionTextStyles = {
      root: {
        color: '#333333',
        fontWeight: FontWeights.semibold,
      },
    };

    const footerCardSectionStyles = {
      root: {
        borderTop: '1px solid #F3F2F1',
      },
    };
    const backgroundImageCardSectionStyles = {
      root: {
        backgroundColor: '#ffffff',
        backgroundPosition: 'center center',
        height: 300,
      },
    };
    const subduedTextStyles = {
      root: {
        color: '#666666',
      },
    };

    const productCardItemTokens = { childrenGap: 30, margin: 20 };
    const cardTokens = {
      childrenMargin: 12,
      maxWidth: 300,
      minWidth: 300,
      width: 300,
      cursor: 'pointer',
      height: 500,
    };
    const footerCardSectionTokens = { padding: '12px 4px 0px' };

    const quantitlyTextStyles = {
      root: {
        lineHeight: 32,
      },
    };
    return (
      <Stack.Item disableShrink tokens={productCardItemTokens}>
        <Card aria-label={this.props.description} tokens={cardTokens}>
          <Card.Section
            fill
            verticalAlign="end"
            styles={backgroundImageCardSectionStyles}
          >
            <Image
              imageFit={ImageFit.contain}
              src={image}
              height="300px"
              width="300px"
            />
          </Card.Section>
          <Card.Section>
            <Text styles={descriptionTextStyles}>{title}</Text>
            <Text variant="small" styles={subduedTextStyles}>
              Category : {category}
            </Text>
          </Card.Section>
          <Card.Item grow={1}>
            <span />
          </Card.Item>
          <Card.Section>
            <Text styles={descriptionTextStyles}>${price}</Text>
          </Card.Section>
          <Card.Section
            horizontal
            styles={footerCardSectionStyles}
            tokens={footerCardSectionTokens}
          >
            <AddToWatchlist id={id} />
            <Bookmark id={id} />
            <Stack.Item grow={1}>
              <span />
            </Stack.Item>
            {quantityInCart > 0 && (
              <>
                <RemoveFromCart onClick={this.removeFromCart} />
                <Text styles={quantitlyTextStyles}>{quantityInCart}</Text>
              </>
            )}
            <AddToCart onClick={this.addIntoCart} />
          </Card.Section>
        </Card>
      </Stack.Item>
    );
  }
}

const getQuantityInCart = (cart, id) => {
  if (cart.products.allId.includes(id)) {
    return cart.products.byId[id].quantity;
  } else return 0;
};

const mapStateToProps = ({ cart }, ownProps) => {
  return {
    productsInCart: cart.products,
    quantityInCart: getQuantityInCart(cart, ownProps.id),
  };
};
const mapDispatchToProps = {
  addProductIntoCart,
  removeProductFromCart,
};
export const ProductCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCard);
