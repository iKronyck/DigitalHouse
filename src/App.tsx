import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppRouter} from './routes';

const App = () => (
  <NavigationContainer>
    <AppRouter />
  </NavigationContainer>
);

export default App;
