import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Sign from './SignatureScreen';

const RestaurantPage2 = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Please sign your restaurant logo</Text>
            <Sign text={'sign here'} onConfirm={() => navigation.navigate('RestaurantPage3')} />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021E4D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: '#fff',
    height: 40,
    margin: 50,
    borderColor: 'gray',
    borderWidth: 3,
    width: "80%",
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default RestaurantPage2;