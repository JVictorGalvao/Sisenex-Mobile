import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import Profile from './pages/Profile'

const Stack = createStackNavigator();

export default function Routes() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: 'Página Inicial'}} />
        <Stack.Screen name="Profile" component={Profile} options={{title: 'Exemplo'}}/>
      </Stack.Navigator>
    );
  }