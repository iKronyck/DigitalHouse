import {useEffect, useState} from 'react';
import {getProducts} from '../../../services';
import {getPointsNumber} from '../adapters';
import {TProducts} from '../../../models/product.model';

export const useProducts = () => {
  const [products, setProducts] = useState<TProducts[]>([]);
  const [totalPoints, setTotalPoints] = useState('0');
  const [loading, setLoading] = useState(true);

  const getAllProducts = async () => {
    try {
      const response = await getProducts<TProducts[]>();
      if (response) {
        setProducts(response.data);
        const points = getPointsNumber(response.data);
        setTotalPoints(points);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(prev => !prev);
    }
  };

  useEffect(() => {
    void getAllProducts();
  }, []);

  return {
    loading,
    products,
    totalPoints,
  };
};
