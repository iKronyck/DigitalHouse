import {ReactElement, ReactNode} from 'react';

export type TErrorFallback = {
  error: unknown;
  resetErrorBoundary: () => void;
  children: ReactElement;
};
