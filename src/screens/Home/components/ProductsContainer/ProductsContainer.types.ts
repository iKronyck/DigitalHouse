import {TProduct, TProducts} from '../../../../models/product.model';

export type TProductsContainer = {
  goToProductDetail: (product: TProduct) => void;
  products: TProducts[];
  testID: string;
};
