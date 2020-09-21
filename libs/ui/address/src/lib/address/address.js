import { Stack, TextField } from '@fluentui/react';
import React from 'react';

const columnProps = {
  tokens: { childrenGap: 10 },
  styles: { root: { width: 250 } },
};

export const Address = (props) => {
  return (
    <Stack {...columnProps}>
      <TextField label="Address Line 1" />
      <TextField label="Address Line 2" />
      <TextField label="City" />
      <TextField label="State" />
      <TextField label="Country" />
      <TextField label="PIN CODE" />
      <TextField label="Mobile" />
    </Stack>
  );
};
export default Address;
