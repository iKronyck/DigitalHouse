/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render, RenderResult} from '@testing-library/react-native';
import {HomeScreen} from './HomeScreen';
import {useProducts} from './hooks';
import {TProducts} from '../../models/product.model';
import {getPointsNumber} from './adapters';
import {formatQuantityWithDecimals} from '../../adapters';
import {THomeScreen} from './HomeScreen.types';

let component: RenderResult;
const navigation: unknown = {
  goBack: jest.fn(),
};

const route: unknown = {
  params: {},
};

jest.mock('./hooks/useProducts');
jest.mock('@react-navigation/native');

const useProductsMock = useProducts as jest.Mock;
const props = {navigation, route} as THomeScreen;

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

describe('Home screen', () => {
  beforeEach(() => {
    const data = {
      loading: true,
      showAll: false,
      products: [],
      totalPoints: '0',
      showAllProducts: jest.fn(),
      showWinProducts: jest.fn(),
      showRedemptionProducts: jest.fn(),
    };
    useProductsMock.mockImplementation(() => data);
    component = render(<HomeScreen {...props} />);
  });

  it('Renders correctly', () => {
    expect(component).toBeDefined();
  });

  describe('When products are loading', () => {
    beforeEach(() => {
      const data = {
        loading: true,
        showAll: false,
        products: [],
        totalPoints: '0',
        showAllProducts: jest.fn(),
        showWinProducts: jest.fn(),
        showRedemptionProducts: jest.fn(),
      };
      useProductsMock.mockImplementation(() => data);
      component = render(<HomeScreen {...props} />);
    });

    it('Should display loading component when is loading products', () => {
      const loader = component.getByTestId('home-screen-loading');
      expect(loader).toBeDefined();
    });
  });

  describe('When the products were loaded', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      const data = {
        loading: false,
        showAll: false,
        products,
        totalPoints: getPointsNumber(products),
        showAllProducts: jest.fn(),
        showWinProducts: jest.fn(),
        showRedemptionProducts: jest.fn(),
      };
      useProductsMock.mockImplementation(() => data);
      component = render(<HomeScreen {...props} />);
    });

    it('Should display the number of points that are redemption', () => {
      const points = `${getPointsNumber(products)} pts`;
      expect(points).toEqual(`${formatQuantityWithDecimals(5)} pts`);
    });

    it('Should display the list of products', () => {
      const productList = component.getByTestId('products-container');
      expect(productList).toBeDefined();
    });
  });
});
