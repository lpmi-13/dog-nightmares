import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Do you have a dog or a restaurant?</Text>
      <View style={styles.buttonWrapper}>
        <Button
          style={styles.button}
          title="I have a dog"
          onPress={() =>
            navigation.navigate('Dogs')
          }
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          style={styles.button}
          title="I have a restaurant"
          onPress={() => 
            navigation.navigate('RestaurantPage1')
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    height: 100, 
  },
  buttonWrapper: {
    width: '75%',
    height: 100,
  },
  text: {
    fontFamily: 'georgia',
    fontSize: 20,
  },
});

export default HomeScreen;