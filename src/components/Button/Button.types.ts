import {ReactNode} from 'react';

export type TButton = {
  children: ReactNode;
  onPress: () => void;
  color?: string;
};
