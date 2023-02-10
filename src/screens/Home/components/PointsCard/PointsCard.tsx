import React from 'react';
import {View} from 'react-native';
import {Typography} from '../../../../components';
import {TPointsCard} from './PointsCard.types';
import {COLORS} from '../../../../assets/colors';
import styles from './PointsCard.styles';

export const PointsCard = ({month, points}: TPointsCard) => (
  <View>
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
    <View style={styles.shadow} />
  </View>
);
