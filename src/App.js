import React from 'react';
import Defaultpage  from './components/defaultpage';
import BmiCalculator from './components/bmi';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Defaultpage />
    </ChakraProvider>
  );
}

export default App;
