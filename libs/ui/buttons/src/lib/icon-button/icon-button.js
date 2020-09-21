import React from 'react';
import { FontWeights, IconButton, TooltipHost } from '@fluentui/react';

const calloutProps = { gapSpace: 0 };
const hostStyles = { root: { display: 'inline-block' } };

const iconStyles = {
  root: {
    color: '#0078D4',
    fontSize: 16,
    fontWeight: FontWeights.regular,
  },
};

const AddToCartIconProps = { iconName: 'Add' };

export const AddToCart = (props) => {
  const tooltipId = `add-to-cart-icon-${props.id}`;
  return (
    <TooltipHost
      content="Add this product into cart"
      id={tooltipId}
      calloutProps={calloutProps}
      styles={hostStyles}
    >
      <IconButton iconProps={AddToCartIconProps} styles={iconStyles} onClick={props.onClick}/>
    </TooltipHost>
  );
};


const addToWatchListIconProps = { iconName: 'RedEye' };

export const AddToWatchlist = (props) => {
  const tooltipId = `watch-icon-${props.id}`;

  return (
    <TooltipHost
      content="Add this product into watchlist"
      id={tooltipId}
      calloutProps={calloutProps}
      styles={hostStyles}
    >
      <IconButton iconProps={addToWatchListIconProps} styles={iconStyles} onClick={props.onClick}/>
    </TooltipHost>
  );
};

const BookmarkIconProps = { iconName: 'SingleBookmark' };

export const Bookmark = (props) => {
  const tooltipId = `bookmark-icon-${props.id}`;
  return (
    <TooltipHost
      content="Bookmark this product"
      id={tooltipId}
      calloutProps={calloutProps}
      styles={hostStyles}
    >
      <IconButton iconProps={BookmarkIconProps} styles={iconStyles} onClick={props.onClick}/>
    </TooltipHost>
  );
};

const removeFromCartIconProps = { iconName: 'Remove' };

export const RemoveFromCart = (props) => {
  const tooltipId = `remove-from-cart-${props.id}`;

  return (
    <TooltipHost
      content="Reduce quantity of this product from cart"
      id={tooltipId}
      calloutProps={calloutProps}
      styles={hostStyles}
    >
      <IconButton iconProps={removeFromCartIconProps} styles={iconStyles} onClick={props.onClick}/>
    </TooltipHost>
  );
};
