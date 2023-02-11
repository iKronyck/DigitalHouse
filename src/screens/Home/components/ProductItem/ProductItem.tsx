import React from 'react';
import {View, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Typography} from '../../../../components';
import {formatDate} from '../../../../utilities';
import {COLORS} from '../../../../assets/colors';
import {TProductItem, StackNavigation} from './ProductItem.types';
import {formatQuantityWithoutDecimals} from '../../../../adapters';
import {ERouterRoutes} from '../../../../routes/models/router.model';
import styles from './ProductItem.styles';

import ArrowIcon from '../../../../assets/icons/arrow.png';

export const ProductItem = ({
  name,
  image,
  date,
  points,
  isRedemption,
}: TProductItem) => {
  const navigation = useNavigation<StackNavigation>();
  const product = {
    product: name,
    createdAt: date,
    image,
    points,
    isRedemption,
  };
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate(ERouterRoutes.MOTION_DETAIL_SCREEN, {product})
      }>
      <View>
        <Image style={styles.productImage} source={{uri: image}} />
      </View>
      <View style={styles.productInformation}>
        <Typography fontSize={14} lineHeight={19} fontWeight="800">
          {name}
        </Typography>
        <Typography fontSize={12} lineHeight={16} fontWeight="400">
          {formatDate(date)}
        </Typography>
      </View>
      <View style={styles.productQuantityContent}>
        <Typography
          color={isRedemption ? COLORS.RED : COLORS.GREEN}
          fontSize={14}
          lineHeight={19}
          fontWeight="800">
          {isRedemption ? '-' : '+'}
        </Typography>
        <Typography fontSize={14} lineHeight={19} fontWeight="800">
          {formatQuantityWithoutDecimals(points)}
        </Typography>
        <Image style={styles.arrowIcon} source={ArrowIcon} />
      </View>
    </Pressable>
  );
};
