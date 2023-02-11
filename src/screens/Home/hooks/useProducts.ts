import {useEffect, useState} from 'react';
import {getProducts} from '../../../services';
import {getPointsNumber} from '../adapters';
import {TProducts} from '../../../models/product.model';

export const useProducts = () => {
  const [localProducts, setLocalProducts] = useState<TProducts[]>([]);
  const [products, setProducts] = useState<TProducts[]>([]);
  const [totalPoints, setTotalPoints] = useState('0');
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const getAllProducts = async () => {
    try {
      const response = await getProducts<TProducts[]>();
      if (response) {
        setLocalProducts(response.data);
        setProducts(response.data.filter(product => !product.is_redemption));
        const points = getPointsNumber(response.data);
        setTotalPoints(points);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(prev => !prev);
    }
  };

  const showAllProducts = () => {
    setProducts(localProducts);
    setShowAll(true);
  }

  const showWinProducts = () => {
    setProducts(localProducts.filter(product => !product.is_redemption));
    setShowAll(false);
  }

  const showRedemptionProducts = () => {
    setProducts(localProducts.filter(product => product.is_redemption));
    setShowAll(false);
  }

  useEffect(() => {
    void getAllProducts();
  }, []);

  return {
    loading,
    showAll,
    products,
    totalPoints,
    showAllProducts,
    showWinProducts,
    showRedemptionProducts
  };
};
