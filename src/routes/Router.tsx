import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ERouterRoutes, TRouterStack} from './models/router.model';
import {HomeScreen, MotionDetailScreen} from '../screens';
import {HeaderHome, HeaderProductDetail} from './components';

const AppStack = createNativeStackNavigator<TRouterStack>();

export const AppRouter = () => (
  <AppStack.Navigator initialRouteName={ERouterRoutes.HOME_SCREEN}>
    <AppStack.Screen
      name={ERouterRoutes.HOME_SCREEN}
      component={HomeScreen}
      options={{header: HeaderHome}}
    />
    <AppStack.Screen
      name={ERouterRoutes.MOTION_DETAIL_SCREEN}
      component={MotionDetailScreen}
      options={{header: () => <HeaderProductDetail />}}
    />
  </AppStack.Navigator>
);
