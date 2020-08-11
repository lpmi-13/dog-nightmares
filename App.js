import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  HomeScreen,
  DogsPage1,
  DogsPage2,
  DogsPage3,
  DogsPage4,
  DogsPage5,
  RestaurantPage1,
  RestaurantPage2,
  RestaurantPage3,
  RestaurantPage4,
} from './components';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="DogsPage1" component={DogsPage1} />
        <Stack.Screen name="DogsPage2" component={DogsPage2} />
        <Stack.Screen name="DogsPage3" component={DogsPage3} />
        <Stack.Screen name="DogsPage4" component={DogsPage4} />
        <Stack.Screen name="DogsPage5" component={DogsPage5} />
        <Stack.Screen name="RestaurantPage1" component={RestaurantPage1} />
        <Stack.Screen name="RestaurantPage2" component={RestaurantPage2} />
        <Stack.Screen name="RestaurantPage3" component={RestaurantPage3} />
        <Stack.Screen name="RestaurantPage4" component={RestaurantPage4} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
};



export default App;