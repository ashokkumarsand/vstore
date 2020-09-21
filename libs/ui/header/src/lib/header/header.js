import React from 'react';
import { connect } from 'react-redux';
import {
  DefaultPalette,
  FontSizes,
  FontWeights,
  Stack,
  Icon,
} from '@fluentui/react';

import { Link } from 'react-router-dom';

import { CartIcon } from '@vstore/ui/shopping-cart';
import { showCartPanel } from '@vstore/ui/shopping-cart';

const logoItemStyles = {
  root: {
    display: 'flex',
    overflow: 'hidden',
    width: 100,
    padding: '16px',
    fontSize: FontSizes.size24,
    fontWeight: FontWeights.semibold,
    letterSpacing: '0.1em',
  },
};

const cartItemStyles = {
  root: {
    display: 'flex',
    overflow: 'hidden',
    margin: '0 8px',
    fontSize: FontSizes.size24,
    fontWeight: FontWeights.semibold,
    alignItems: 'center',
  },
};
const centerItemStyle = {
  root: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
  },
};

const userItemStyle = {
  root: {
    display: 'flex',
    overflow: 'hidden',
    padding: '16px 8px',
    margin: '0 8px',
    fontSize: FontSizes.size24,
    fontWeight: FontWeights.semibold,
  },
};

// Tokens definition
const headerStackTokens = {
  childrenGap: 0,
  padding: 0,
  height: '50px',
};

export const Header = ({ itemsInCart, showCartPanel }) => {
  // Mutating styles definition
  const stackStyles = {
    root: {
      background: DefaultPalette.themePrimary,
      color: DefaultPalette.white,
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: '1000',
    },
  };

  return (
    <Stack horizontal styles={stackStyles} tokens={headerStackTokens}>
      <Stack.Item disableShrink styles={logoItemStyles}>
        <Link to="/">VStore</Link>
      </Stack.Item>
      <Stack.Item grow styles={centerItemStyle}>
        &nbsp;
      </Stack.Item>
      <Stack.Item disableShrink styles={cartItemStyles}>
        <Link to="/history">Order History</Link>
      </Stack.Item>
      <Stack.Item disableShrink styles={cartItemStyles}>
        <CartIcon onClick={showCartPanel} itemsInCart={itemsInCart} />
      </Stack.Item>
      <Stack.Item disableShrink styles={userItemStyle}>
        <Icon iconName="Contact" onClick={() => alert('sdf')} />
      </Stack.Item>
    </Stack>
  );
};

const mapStateToProps = ({ cart }) => ({
  itemsInCart: cart.total,
});

const mapDispatchToProps = { showCartPanel };

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
