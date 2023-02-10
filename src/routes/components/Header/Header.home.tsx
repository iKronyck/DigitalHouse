import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {COLORS} from '../../../assets/colors';
import {Typography} from '../../../components';
import styles from './Header.home.styles';

export const HeaderHome = () => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" backgroundColor={COLORS.BACKGROUND} />
    <SafeAreaView />
    <Typography fontSize={20} lineHeight={27} fontWeight="800">
      Bienvenido de vuelta!
    </Typography>
    <Typography fontSize={14} lineHeight={19}>
      Israel Alfaro
    </Typography>
  </View>
);
