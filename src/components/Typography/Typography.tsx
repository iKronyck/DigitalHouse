import React from 'react';
import {Text} from 'react-native';
import {COLORS} from '../../assets/colors';
import {TTypography} from './Typography.types';
import styles from './Typography.styles';

export const Typography = ({
  children,
  color = COLORS.BLACK,
  fontSize = 12,
  fontWeight = 'normal',
  lineHeight = 16,
  textAlign = 'left',
  textTransform = 'none',
}: TTypography) => (
  <Text
    style={[
      styles.text,
      {color, fontSize, fontWeight, lineHeight, textAlign, textTransform},
    ]}
    numberOfLines={1}>
    {children}
  </Text>
);
