import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native';

const DogsPage2 = ({ navigation }) => {
  const handleLongPress = () => {
    navigation.navigate('DogsPage3');
  }

  const handleLongPressStart = () => {
    console.log('press started');
  }

  const handleClick = () => {
    Alert.alert('press longer!');
  }

    return (
        <View style={styles.container}>
            <Text style={styles.instructionText}>Press your dog's paw or nose to the screen for 3 seconds</Text>
            <TouchableOpacity
              onLongPress={handleLongPressStart}
              onPressOut={handleLongPress}
              onPress={handleClick}
              activeOpacity={0.6}
              style={styles.button}>
              <Text style={styles.text}>press here!</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
    justifyContent: "space-around",
  },
  button: {
    width: '80%',
    height: 240,
    justifyContent: 'center',
    backgroundColor: '#EE5407',
  },
  instructionText: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 26,
  },
});

export default DogsPage2;