import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const RestaurantPage1 = ({ navigation }) => {
   const [value, onChangeText] = useState(''); 

    return (
        <View style={styles.container}>
            <Text style={styles.text}>How many people can sit in your restaurant?</Text>
            <TextInput style={styles.input} onChangeText={text => onChangeText(text)} value={value} />
            <View>
              <Button
                title="go to the next question" 
                onPress={() => navigation.navigate('RestaurantPage2')}
              />
            </View>
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

export default RestaurantPage1;