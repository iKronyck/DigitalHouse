import React from 'react';
import {View} from 'react-native';
import {Typography} from '../../../../components';
import {AllButton} from '../AllButton';
import {TErrorBoundary} from './ErrorBoundary.types';
import styles from './ErrorBoundary.styles';

export const ErrorBoundary = ({
  error,
  resetErrorBoundary,
  children,
}: TErrorBoundary) => {
  if (error !== undefined) {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Typography fontSize={20} lineHeight={20} fontWeight="800">
            Something went wrong:
          </Typography>
          <Typography fontSize={20} lineHeight={20} fontWeight="400">
            {'Error calling API'}
          </Typography>
        </View>
        <View style={styles.buttonContent}>
          <AllButton onPress={resetErrorBoundary} text="Try again" />
        </View>
      </View>
    );
  }
  return children;
};
