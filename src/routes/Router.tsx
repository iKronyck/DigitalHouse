import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ERouterRoutes, TRouterStack} from './models/router.model';
import {HomeScreen, ProductDetailScreen} from '../screens';

const AppStack = createNativeStackNavigator<TRouterStack>();

export const AppRouter = () => (
  <AppStack.Navigator initialRouteName={ERouterRoutes.HOME_SCREEN}>
    <AppStack.Screen
      name={ERouterRoutes.HOME_SCREEN}
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <AppStack.Screen
      name={ERouterRoutes.MOTION_DETAIL_SCREEN}
      component={ProductDetailScreen}
      options={{headerShown: false}}
    />
  </AppStack.Navigator>
);
