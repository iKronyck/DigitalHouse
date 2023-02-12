import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useProducts} from './hooks';
import {Typography} from '../../components';
import {COLORS} from '../../assets/colors';
import {getCurrentMonth} from '../../utilities';
import {AllButton, PointsCard, ProductsContainer, Header} from './components';
import styles from './HomeScreen.styles';

export const HomeScreen = () => {
  const {
    products,
    totalPoints,
    showAll,
    loading,
    showAllProducts,
    showWinProducts,
    showRedemptionProducts,
  } = useProducts();
  const currentMonth = getCurrentMonth();
  return (
    <>
      <Header />
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator
            testID="home-screen-loading"
            size="large"
            color={COLORS.PRIMARY}
          />
        ) : (
          <>
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
            <ProductsContainer
              testID="products-container"
              products={products}
            />
            <View style={styles.buttonsContainer}>
              {showAll ? (
                <>
                  <AllButton onPress={showWinProducts} text="Ganados" />
                  <View style={styles.divider} />
                  <AllButton
                    onPress={showRedemptionProducts}
                    text="Canjeados"
                  />
                </>
              ) : (
                <AllButton onPress={showAllProducts} text="Todos" />
              )}
            </View>
          </>
        )}
      </View>
    </>
  );
};
