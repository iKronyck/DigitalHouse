import {TProduct} from '../../../../models/product.model';

export type TProductItem = {
  image: string;
  name: string;
  date: string;
  points: number;
  isRedemption: boolean;
  goToProductDetail: (product: TProduct) => void;
};
