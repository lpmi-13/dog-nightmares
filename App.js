import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text } from 'react-native';

//import HomeScreen from './components/HomeScreen';
//import Dogs from './components/Dogs';
//import Restaurant from './components/Restaurant';

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
        <Stack.Screen name="Dogs" component={Dogs} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <>
    <Text>Do you have a dog or a restaurant?</Text>
    <Button
      title="I have a dog"
      onPress={() =>
        navigation.navigate('Dogs')
      }
    />
    <Button
      title="I have a restaurant"
      onPress={() => 
        navigation.navigate('Restaurant')
      }
    />
    </>
  );
};

const Dogs = () => {
  return <Text>This is the Dogs page</Text>;
};

const Restaurant = () => {
  return <Text>This is the restaurant page</Text>
}

export default App;