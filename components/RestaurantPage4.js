import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

const data = [
  { key: 'Reduce your menu!'},
  { key: 'Don\'t freeze your food!'},
  { key: 'Clean your kitchen!'},
]

const RestaurantPage4 = ({ navigation }) => {

    return (
        <View style={styles.container}>
          <Text style={styles.text}>Here are your personalized recommendations!</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
          />
          <Button
                title="Thanks, I'll go back home now" 
                onPress={() => navigation.navigate('Home')}
              />
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
  item: {
    fontSize: 45,
  },
  text: {
    color: '#000',
    fontSize: 20,
  },
});

export default RestaurantPage4;