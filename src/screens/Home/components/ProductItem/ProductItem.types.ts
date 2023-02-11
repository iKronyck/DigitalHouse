import {NavigationProp} from '@react-navigation/native';
import {
  ERouterRoutes,
  TRouterStack,
} from '../../../../routes/models/router.model';

export type StackNavigation = NavigationProp<
  TRouterStack,
  ERouterRoutes.MOTION_DETAIL_SCREEN
>;

export type TProductItem = {
  image: string;
  name: string;
  date: string;
  points: number;
  isRedemption: boolean;
};
