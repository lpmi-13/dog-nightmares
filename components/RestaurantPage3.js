import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import PickerSelect from 'react-native-picker-select';

const RestaurantPage3 = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState("10");

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Estimate your maximum occupancy</Text>
            <PickerSelect
              style={
                Platform.OS === 'ios'
                  ? styles.inputIOS
                  : styles.inputAndroid
              }
              onValueChange={(value) => setSelectedValue(value)}
              items={[
                { label: '10', value: '10' },
                { label: '20', value: '20' },
                { label: '50', value: '50' },
                { label: '100', value: '100' },
              ]}
              value={selectedValue}
              />
              <Button
                style={styles.button}
                title="Let's see the advice!" 
                onPress={() => navigation.navigate('RestaurantPage4')}
              />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#021E4D',
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

export default RestaurantPage3;