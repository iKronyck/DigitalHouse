import React from 'react';
import {View, Pressable, Image} from 'react-native';
import {Typography} from '../../../../components';
import {formatDate} from '../../../../utilities';
import {COLORS} from '../../../../assets/colors';
import {TProductItem} from './ProductItem.types';
import {formatQuantityWithoutDecimals} from '../../../../adapters';
import styles from './ProductItem.styles';

import ArrowIcon from '../../../../assets/icons/arrow.png';

export const ProductItem = ({
  name,
  image,
  date,
  points,
  isRedemption,
  goToProductDetail,
}: TProductItem) => {
  const product = {
    product: name,
    createdAt: date,
    image,
    points,
    isRedemption,
  };
  return (
    <Pressable
      testID={'product-item'}
      style={styles.container}
      onPress={() => goToProductDetail(product)}>
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
