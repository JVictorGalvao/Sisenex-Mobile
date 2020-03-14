import React from 'react';
import { View } from 'react-native';
import Routes from './src/routes'
import{NavigationContainer} from '@react-navigation/native'

// import { Container } from './styles';

export default function Sisenex_Mobile() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
