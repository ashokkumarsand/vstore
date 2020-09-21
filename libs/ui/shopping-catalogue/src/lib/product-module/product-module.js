import React, { lazy } from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { getProductModule } from '../module';

const CatalogueContainer = lazy(() => import('../catalogue/catalogue'));

export const ProductModule = () => {
  return (
    <DynamicModuleLoader modules={[getProductModule()]}>
      <CatalogueContainer />
    </DynamicModuleLoader>
  );
};
