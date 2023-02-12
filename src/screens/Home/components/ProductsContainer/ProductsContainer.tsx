import React from 'react';
import {FlatList, View} from 'react-native';
import {ProductItem} from '../ProductItem';
import {TProductsContainer} from './ProductsContainer.types';
import styles from './ProductsContainer.styles';

export const ProductsContainer = ({goToProductDetail, products, testID}: TProductsContainer) => {
  return (
    <View testID={testID} style={styles.content}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        data={products}
        renderItem={({item}) => (
          <ProductItem
            name={item.product}
            image={item.image}
            date={item.createdAt}
            isRedemption={item.is_redemption}
            points={item.points}
            goToProductDetail={goToProductDetail}
          />
        )}
      />
    </View>
  );
};
