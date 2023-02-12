import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Typography} from '../../../../components';
import {THeader} from './Header.types';
import styles from './Header.styles';

export const Header = ({title}: THeader) => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" backgroundColor={styles.statusBar.color} />
    <SafeAreaView />
    <View style={styles.content}>
      <Typography fontSize={20} lineHeight={27} fontWeight="800">
        {title}
      </Typography>
    </View>
  </View>
);
