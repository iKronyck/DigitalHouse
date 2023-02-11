import React from 'react';
import {View, Image} from 'react-native';
import {Typography} from '../../../../components';
import {formatDate} from '../../../../utilities';
import ArrowIcon from '../../../../assets/icons/arrow.png';
import {COLORS} from '../../../../assets/colors';
import {TProductItem} from './ProductItem.types';
import {formatQuantityWithoutDecimals} from '../../../../adapters';
import styles from './ProductItem.styles';

export const ProductItem = ({
  name,
  image,
  date,
  points,
  isRedemption,
}: TProductItem) => (
  <View style={styles.container}>
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
  </View>
);
