import React from 'react';
import {View, Image, SafeAreaView, ScrollView} from 'react-native';
import {AllButton} from '../Home/components';
import {TProductDetailScreen} from './ProductDetailScreen.types';
import {Typography} from '../../components';
import {COLORS} from '../../assets/colors';
import {formatDate} from '../../utilities';
import {formatQuantityWithoutDecimals} from '../../adapters';
import {Header} from './components';
import styles from './ProductDetailScreen.styles';

export const ProductDetailScreen = ({
  navigation,
  route,
}: TProductDetailScreen) => {
  const {product} = route.params;
  const points = formatQuantityWithoutDecimals(product.points);
  return (
    <>
      <Header title={product.product} />
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <View style={styles.productImageContainer}>
            <Image style={styles.productImage} source={{uri: product.image}} />
          </View>
          <Typography
            fontSize={14}
            lineHeight={19}
            fontWeight="800"
            color={COLORS.GRAY}>
            Detalles del producto:
          </Typography>
          <View style={styles.textContainer}>
            <Typography
              fontSize={16}
              lineHeight={22}
              fontWeight="800"
              color={COLORS.BLACK}>
              {`Comprado el ${formatDate(product.createdAt)}`}
            </Typography>
          </View>
          <View style={styles.textContainer}>
            <Typography
              fontSize={14}
              lineHeight={19}
              fontWeight="800"
              color={COLORS.GRAY}>
              Con esta compra acumulaste:
            </Typography>
          </View>
          <View style={styles.pointText}>
            <Typography
              fontSize={16}
              lineHeight={22}
              fontWeight="800"
              color={COLORS.BLACK}>
              {points.concat(points === '1' ? ' punto' : ' puntos')}
            </Typography>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <AllButton onPress={() => navigation.goBack()} text="Aceptar" />
        </View>
        <SafeAreaView />
      </View>
    </>
  );
};
