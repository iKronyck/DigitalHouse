export type TProducts = {
  createdAt: string;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
  id: string;
};

export type TProduct = Omit<TProducts, 'is_redemption' | 'id'>;
