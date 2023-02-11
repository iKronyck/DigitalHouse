import {NavigationProp, RouteProp} from '@react-navigation/native';
import {ERouterRoutes, TRouterStack} from '../../routes/models/router.model';
import {TProduct} from '../../models/product.model';

export type RouteNavigation = RouteProp<
  {params: {product: TProduct}},
  'params'
>;

export type StackNavigation = NavigationProp<
  TRouterStack,
  ERouterRoutes.MOTION_DETAIL_SCREEN
>;
