/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import 'react-native';
import React from 'react';
import {
  fireEvent,
  render,
  RenderResult,
  screen,
} from '@testing-library/react-native';
import {ProductDetailScreen} from './ProductDetailScreen';
import {TProductDetailScreen} from './ProductDetailScreen.types';
import {formatDate} from '../../utilities';
import {formatQuantityWithoutDecimals} from '../../adapters';

let component: RenderResult;

const product = {
  createdAt: '2022-12-09T06:34:25.607Z',
  product: 'Handmade Metal Shoes',
  points: 3,
  image: 'https://loremflickr.com/640/480/transport',
  is_redemption: false,
  id: '1',
};
const navigation: unknown = {
  goBack: jest.fn(),
};

const route: unknown = {
  params: {
    product: product,
  },
};

jest.mock('@react-navigation/native');

const props = {navigation, route} as TProductDetailScreen;

describe('Product detail screen', () => {
  beforeEach(() => {
    component = render(<ProductDetailScreen {...props} />);
  });
  it('Renders correctly', () => {
    expect(component).toBeDefined();
  });

  it('Should display product name in the Header', () => {
    const header = screen.getByText(product.product);
    expect(header).toBeDefined();
  });

  it('Should display the product image', () => {
    const productImage = component.getByTestId('product-image');
    expect(productImage.props.source.uri).toEqual(product.image);
  });

  it('Should display the product detail', () => {
    const formateDate = `Comprado el ${formatDate(product.createdAt)}`;
    const productDetail = component.getByText(formateDate);
    expect(productDetail).toBeTruthy();
  });

  it('Should display the quantity of user points', () => {
    const point = product.points === 1 ? 'punto' : 'puntos';
    const points = `${formatQuantityWithoutDecimals(product.points)} ${point}`;
    const pointsText = component.getByText(points);
    expect(pointsText).toBeTruthy();
  });

  it('Should navigate to previous screen', () => {
    const acceptButton = component.getByText('Aceptar');
    fireEvent.press(acceptButton);
    expect(props.navigation.goBack).toHaveBeenCalled();
  });
});
