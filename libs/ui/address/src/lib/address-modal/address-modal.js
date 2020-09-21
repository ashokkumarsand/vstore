import { Dialog, DialogType, PrimaryButton, Stack } from '@fluentui/react';
import React from 'react';

import { Address } from '../address/address';

const modalPropsStyles = { main: { maxWidth: 750, minWidth: 500, width: 600 } };

const modalProps = () => ({
  isBlocking: true,
  styles: modalPropsStyles,
});

const dialogContentProps = {
  type: DialogType.normal,
  title: 'Choose delivery address ',
  subText: 'Delivery time may vary as per location',
};
const tokens = { childrenGap: 10 };

export const AddressModal = ({ isOpen, onDismiss }) => {
  return (
    <Dialog
      hidden={!isOpen}
      onDismiss={onDismiss}
      dialogContentProps={dialogContentProps}
      modalProps={modalProps}
      isBlocking
    >
      <Stack tokens={tokens}>
        <Address />
        <PrimaryButton text="Pay"></PrimaryButton>
      </Stack>
    </Dialog>
  );
};
