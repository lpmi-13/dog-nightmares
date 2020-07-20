import React from 'react';
import { Button, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
      <>
      <Text>Do you have a dog or a restaurant?</Text>
      <Button
        title="BOOYAH!"
        onPress={() =>
          navigation.navigate('Profile')
        }
      />
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

export default HomeScreen;