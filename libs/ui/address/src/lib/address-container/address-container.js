import { connect } from 'react-redux';
import { AddressModal } from '../address-modal/address-modal';
import { hideCheckoutModal } from '@vstore/ui/shopping-cart';

const mapStateToProps = ({ cart }) => ({
  isOpen: cart.checkout,
});

const mapDispatchToProps = {
  onDismiss: hideCheckoutModal,
};
export const AddressContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressModal);
