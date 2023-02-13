import {ReactElement} from 'react';

export type TErrorBoundary = {
  error: unknown;
  resetErrorBoundary: () => void;
  children: ReactElement;
};
