import React from 'react';
import { StyleSheet, Text, View, useColorScheme, Picker } from 'react-native';
import 'react-native-gesture-handler';
import  {  NavigationContainer  }  from  '@react-navigation/native';
import Final from './src/pages/Final'
import Home from './src/pages/Home'
import { createStackNavigator } from '@react-navigation/stack'
import { CardStyleInterpolators } from '@react-navigation/stack'

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Final" >
        <Stack.Screen
          name="Final"
          component={Final}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerStyle: {
              backgroundColor: '#0c0e0b',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: true,
            title: "BEM VINDO",
            headerTitleAlign: "center",
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}

        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}