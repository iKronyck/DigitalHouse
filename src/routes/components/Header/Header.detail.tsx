import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {COLORS} from '../../../assets/colors';
import {Typography} from '../../../components';
import {TProduct} from '../../../models/product.model';
import styles from './Header.detail.styles';

export const HeaderProductDetail = () => {
  const {
    params,
  } = useRoute<RouteProp<{params: {product: TProduct}}, 'params'>>();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.SECONDARY} />
      <SafeAreaView />
      <View style={styles.content}>
        <Typography fontSize={20} lineHeight={27} fontWeight="800">
          {params.product.product}
        </Typography>
      </View>
    </View>
  );
};
