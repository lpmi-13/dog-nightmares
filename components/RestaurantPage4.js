import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

const data = [
  { key: `Don't freeze your food!`},
  { key: `Reduce the size of your menu!`},
  { key: `Clean your kitchen!`},
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
                style={styles.button}
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
    justifyContent: 'space-around',
  },
  item: {
    fontSize: 45,
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    color: '#000',
    fontSize: 20,
  },
});

export default RestaurantPage4;