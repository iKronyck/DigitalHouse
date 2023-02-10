import {formatQuantityWithDecimals} from '../../../adapters';
import {TProducts} from '../../../models/product.model';

export const getPointsNumber = (products: TProducts[]) => {
  if (products && products.length > 0) {
    const points = products
      .filter(({is_redemption}) => !is_redemption)
      .reduce((prevValue, currentValue) => prevValue + currentValue.points, 0);
    return formatQuantityWithDecimals(points);
  }
  return '0';
};
