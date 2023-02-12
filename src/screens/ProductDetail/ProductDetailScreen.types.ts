import {ERouterRoutes, TRouterStack} from '../../routes/models/router.model';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type TProductDetailScreen = NativeStackScreenProps<
  TRouterStack,
  ERouterRoutes.MOTION_DETAIL_SCREEN
>;
