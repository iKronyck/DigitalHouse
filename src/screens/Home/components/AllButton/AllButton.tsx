import React from 'react';
import {COLORS} from '../../../../assets/colors';
import {Button, Typography} from '../../../../components';
import {TAllButton} from './AllButton.types';

export const AllButton = ({text, onPress}: TAllButton) => (
  <Button onPress={onPress}>
    <Typography
      color={COLORS.WHITE}
      fontSize={16}
      fontWeight="800"
      lineHeight={22}>
      {text}
    </Typography>
  </Button>
);
