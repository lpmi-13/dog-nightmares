import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

const data = [
  { key: `Walk your dog!`},
  { key: `Don't treat your dog like a person!`},
  { key: `Your dog's not afraid/worried/upset, you are!`},
]

const DogsPage5 = ({ navigation }) => {

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
    backgroundColor: '#C28021',
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

export default DogsPage5;