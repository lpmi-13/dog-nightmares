import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DogsPage1 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the dogs page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C28021',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  }
});

export default DogsPage1;