import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import PickerSelect from 'react-native-picker-select';

const DogsPage1 = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("yellow");

  return (
        <View style={styles.container}>
            <Text style={styles.text}>What color is your dog?</Text>
            <PickerSelect
              style={
                Platform.OS === 'ios'
                  ? styles.inputIOS
                  : styles.inputAndroid
              }
              onValueChange={(value) => setSelectedValue(value)}
              items={[
                { label: 'yellow', value: 'yellow' },
                { label: 'brown', value: 'brown' },
                { label: 'white', value: 'white' },
                { label: 'black', value: 'black' },
              ]}
              value={selectedValue}
              />
              <Button
                style={styles.button}
                title="Go to the next questions" 
                onPress={() => navigation.navigate('DogsPage2')}
              />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#C28021',
    alignItems: 'center',
    alignContent: 'space-around',
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default DogsPage1;