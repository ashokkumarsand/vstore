import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { HeaderContainer } from '../header/header';
import { getShoppingCartModule } from '@vstore/ui/shopping-cart';
export const HeaderModule = () => {
  return (
    <DynamicModuleLoader modules={[getShoppingCartModule()]}>
      <HeaderContainer />
    </DynamicModuleLoader>
  );
};

export default HeaderModule;
