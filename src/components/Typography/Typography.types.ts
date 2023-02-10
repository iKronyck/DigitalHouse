import {ReactNode} from 'react';

type TFontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export type TTypography = {
  children: ReactNode;
  color?: string;
  fontWeight?: TFontWeight;
  fontSize?: number;
  lineHeight?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
};
