import {ERouterRoutes, TRouterStack} from '../../routes/models/router.model';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type THomeScreen = NativeStackScreenProps<
  TRouterStack,
  ERouterRoutes.HOME_SCREEN
>;
