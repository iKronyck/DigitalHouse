import React from 'react';
import {View} from 'react-native';
import {Typography} from '../../../../components';
import {TPointsCard} from './PointsCard.types';
import styles from './PointsCard.styles';
import {COLORS} from '../../../../assets/colors';

export const PointsCard = ({month, points}: TPointsCard) => (
  <View style={styles.container}>
    <Typography
      color={COLORS.WHITE}
      fontWeight="800"
      fontSize={16}
      lineHeight={22}>
      {month}
    </Typography>
    <Typography
      color={COLORS.WHITE}
      textAlign="center"
      fontWeight="800"
      fontSize={32}
      lineHeight={44}>{`${points} pts`}</Typography>
  </View>
);
