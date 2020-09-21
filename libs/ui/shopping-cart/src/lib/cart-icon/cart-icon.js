import React from 'react';
import PropTypes from 'prop-types';
import {
  ActionButton,
  DefaultPalette,
  FontWeights,
  Text,
} from '@fluentui/react';

const cartIconProps = { iconName: 'ShoppingCartSolid' };

const cartIconButtonStyles = {
  icon: {
    color: DefaultPalette.white,
  },
  iconHovered: {
    color: DefaultPalette.white,
  },
  rootHovered: {
    color: DefaultPalette.white,
  },
};

const iconTextStyle = {
  root: {
    fontWeight: FontWeights.bold,
    marginLeft: 5,
  },
};

export const CartIcon = ({ itemsInCart, onClick }) => {
  return (
    <ActionButton
      iconProps={cartIconProps}
      onClick={onClick}
      styles={cartIconButtonStyles}
    >
      {itemsInCart > 0 && (
        <Text variant="medium" styles={iconTextStyle}>
          {itemsInCart}
        </Text>
      )}
    </ActionButton>
  );
};

CartIcon.propTypes = {
  itemsInCart: PropTypes.number,
};

CartIcon.defaultProps = {
  itemsInCart: 0,
};
