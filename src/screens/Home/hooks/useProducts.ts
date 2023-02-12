import {useEffect, useState} from 'react';
import {getProducts, getProductsWithAPIError} from '../../../services';
import {getPointsNumber, getRedemptionPoints, getWinPoints} from '../adapters';
import {TProducts} from '../../../models/product.model';

export const useProducts = () => {
  const [localProducts, setLocalProducts] = useState<TProducts[]>([]);
  const [products, setProducts] = useState<TProducts[]>([]);
  const [totalPoints, setTotalPoints] = useState('0');
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [error, setError] = useState<unknown>();

  const getAllProductWithError = () => {
    setLoading(true);
    getProductsWithAPIError<TProducts[]>()
      .then(() => {
        setError('Error');
        setLoading(false);
        setShowAll(false);
        setProducts([]);
        setTotalPoints('0')
      })
      .catch(() => null);
  };

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const response = await getProducts<TProducts[]>();
      if (response) {
        setLocalProducts(response.data);
        setProducts(getWinPoints(response.data));
        const points = getPointsNumber(response.data);
        setTotalPoints(points);
        setError(undefined);
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
  };

  const showWinProducts = () => {
    setProducts(getWinPoints(localProducts));
    setShowAll(false);
  };

  const showRedemptionProducts = () => {
    setProducts(getRedemptionPoints(localProducts));
    setShowAll(false);
  };

  const tryToGetData = () => {
    void getAllProducts();
  };

  useEffect(() => {
    void getAllProducts();
  }, []);

  return {
    error,
    loading,
    showAll,
    products,
    totalPoints,
    showAllProducts,
    showWinProducts,
    showRedemptionProducts,
    getAllProductWithError,
    resetError: tryToGetData,
  };
};
