import React from 'react';
import {TouchableOpacity} from 'react-native';
import {COLORS} from '../../assets/colors';
import {TButton} from './Button.types';
import styles from './Button.styles';

export const Button = ({
  onPress,
  children,
  color = COLORS.PRIMARY,
}: TButton) => (
  <TouchableOpacity
    style={[styles.button, {backgroundColor: color}]}
    onPress={onPress}
    activeOpacity={0.7}>
    {children}
  </TouchableOpacity>
);
