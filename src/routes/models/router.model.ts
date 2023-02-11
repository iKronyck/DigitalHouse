import {TProduct} from '../../models/product.model';

export enum ERouterRoutes {
  //NAME-SCREEN_SCREEN
  HOME_SCREEN = 'HOME_SCREEN',
  MOTION_DETAIL_SCREEN = 'MOTION_DETAIL_SCREEN',
}

export type TRouterStack = {
  [ERouterRoutes.HOME_SCREEN]: undefined;
  [ERouterRoutes.MOTION_DETAIL_SCREEN]: {
    product: TProduct;
  };
};
