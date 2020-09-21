import { Spinner, SpinnerSize, Stack } from '@fluentui/react';
import React from 'react';
import './loader.css';
const loaderSpinnerStyles = {
  root: { flex: '1' },
};
export const Loader = (props) => {
  return (
    <Stack verticalFill grow>
      <Spinner size={SpinnerSize.large} styles={loaderSpinnerStyles} />
    </Stack>
  );
};
