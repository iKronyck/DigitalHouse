import {renderHook, act} from '@testing-library/react-hooks';
import {waitFor} from '@testing-library/react-native';
import {TProducts} from '../../../models/product.model';
import {getPointsNumber, getRedemptionPoints, getWinPoints} from '../adapters';
import {useProducts} from './useProducts';

const products: TProducts[] = [
  {
    createdAt: '2022-12-09T06:34:25.607Z',
    product: 'Handmade Metal Shoes',
    points: 3,
    image: 'https://loremflickr.com/640/480/transport',
    is_redemption: false,
    id: '1',
  },
  {
    createdAt: '2022-12-09T06:34:25.607Z',
    product: 'Handmade Metal Shoes',
    points: 2,
    image: 'https://loremflickr.com/640/480/transport',
    is_redemption: false,
    id: '2',
  },
  {
    createdAt: '2022-12-09T06:34:25.607Z',
    product: 'Handmade Metal Shoes',
    points: 5,
    image: 'https://loremflickr.com/640/480/transport',
    is_redemption: true,
    id: '3',
  },
];

jest.mock('../../../services', () => ({
  getProducts: jest.fn().mockResolvedValue({
    data: products,
  }),
  getProductsWithAPIError: jest.fn().mockResolvedValue(undefined),
}));

describe('useProducts hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const onlyWinProducts = getWinPoints(products);
  const totalPoints = getPointsNumber(onlyWinProducts);

  it('Should get an initial values', async () => {
    const {result} = renderHook(() => useProducts());
    await waitFor(() => {
      expect(result.current.loading).toBe(true);
      expect(result.current.products).toEqual([]);
      expect(result.current.totalPoints).toEqual('0');
      expect(result.current.showAll).toBe(false);
    });
  });

  it('Should get the products after the API call', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useProducts());
    await waitForNextUpdate();
    act(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.showAll).toBe(false);
      expect(result.current.products).toEqual(onlyWinProducts);
      expect(result.current.totalPoints).toEqual(totalPoints);
    });
  });

  it('Should return only redemption products', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useProducts());
    await waitForNextUpdate();

    act(() => {
      result.current.showRedemptionProducts();
    });

    const onlyRedemptionProducts = getRedemptionPoints(products);

    expect(result.current.loading).toBe(false);
    expect(result.current.showAll).toBe(false);
    expect(result.current.products).toEqual(onlyRedemptionProducts);
    expect(result.current.totalPoints).toEqual(
      getPointsNumber(onlyWinProducts),
    );
  });

  it('Should return only win products', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useProducts());
    await waitForNextUpdate();

    act(() => {
      result.current.showWinProducts();
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.showAll).toBe(false);
    expect(result.current.products).toEqual(onlyWinProducts);
    expect(result.current.totalPoints).toEqual(
      getPointsNumber(onlyWinProducts),
    );
  });

  it('Should return all products', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useProducts());
    await waitForNextUpdate();

    act(() => {
      result.current.showAllProducts();
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.showAll).toBe(true);
    expect(result.current.products).toEqual(products);
    expect(result.current.totalPoints).toEqual(
      getPointsNumber(onlyWinProducts),
    );
  });

  it('Should return an error when is fail the API call', async () => {
    const {result, waitForNextUpdate} = renderHook(() =>
      useProducts(),
    );

    act(() => {
      result.current.getAllProductWithError();
    });

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.showAll).toBe(false);
    expect(result.current.products).toEqual([]);
    expect(result.current.totalPoints).toEqual('0');
    expect(result.current.error).not.toBeUndefined();
  });
});
