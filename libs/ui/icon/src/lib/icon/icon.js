import React from 'react';
import { Icon, TooltipHost } from '@fluentui/react';

const calloutProps = { gapSpace: 0 };
const hostStyles = { root: { display: 'inline-block' } };

const iconStyles = {
  root: {
    color: '#0078D4',
    fontSize: 16,
    fontWeight: FontWeights.regular,
  },
};

export const KeepEyeOnItIcon = (props) => {
  const tooltipId = `watch-icon-${props.id}`;
  return (
    <TooltipHost
      content="Add this product into watchlist"
      id={tooltipId}
      calloutProps={calloutProps}
      styles={hostStyles}
    >
      <Icon iconName="RedEye" styles={iconStyles} />
    </TooltipHost>
  );
};

export const BookmarkIcon = (props) => {
  const tooltipId = `watch-icon-${props.id}`;
  return (
    <TooltipHost
      content="Bookmark this product"
      id={tooltipId}
      calloutProps={calloutProps}
      styles={hostStyles}
    >
      <Icon iconName="SingleBookmark" styles={iconStyles} />
    </TooltipHost>
  );
};

export const AddToCart = (props) => {
  const tooltipId = `watch-icon-${props.id}`;
  return (
    <TooltipHost
      content="Add this product into cart"
      id={tooltipId}
      calloutProps={calloutProps}
      styles={hostStyles}
    >
      <Icon iconName="Add" styles={iconStyles} />
    </TooltipHost>
  );
};
