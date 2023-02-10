import React from 'react';
import {View} from 'react-native';
import {useProducts} from './hooks';
import {Typography} from '../../components';
import {COLORS} from '../../assets/colors';
import {getCurrentMonth} from '../../utilities';
import {AllButton, PointsCard, ProductsContainer} from './components';
import styles from './HomeScreen.styles';

export const HomeScreen = () => {
  const {
    products,
    totalPoints,
    showAll,
    showAllProducts,
    showWinProducts,
    showRedemptionProducts,
  } = useProducts();
  const currentMonth = getCurrentMonth();
  return (
    <View style={styles.container}>
      <Typography
        color={COLORS.GRAY}
        fontWeight="800"
        fontSize={14}
        lineHeight={19}
        textTransform="uppercase">
        Tus puntos
      </Typography>
      <PointsCard month={currentMonth} points={totalPoints} />
      <Typography
        color={COLORS.GRAY}
        fontWeight="800"
        fontSize={14}
        lineHeight={19}
        textTransform="uppercase">
        Tus movimientos
      </Typography>
      <ProductsContainer products={products} />
      <View style={styles.buttonsContainer}>
        {showAll ? (
          <>
            <AllButton onPress={showWinProducts} text="Ganados" />
            <View style={styles.divider} />
            <AllButton onPress={showRedemptionProducts} text="Canjeados" />
          </>
        ) : (
          <AllButton onPress={showAllProducts} text="Todos" />
        )}
      </View>
    </View>
  );
};
