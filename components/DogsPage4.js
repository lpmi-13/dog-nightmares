import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const DogsPage4 = ({ navigation }) => {
  const [value, onChangeText] = useState('');
    return (
        <View style={styles.container}>
        <Text style={styles.text}>What is your dog's weight in sandwiches?</Text>
            <TextInput style={styles.input} onChangeText={text => onChangeText(text)} value={value} />
            <View>
              <Button
                title="See the advice" 
                onPress={() => navigation.navigate('DogsPage5')}
              />
            </View>
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
  }
});

export default DogsPage4;