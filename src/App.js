import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import SearchBar from './components/SearchBar';
import store_data from './store_data.json';
import StoreCard from './components/StoreCard';

export default function App() {
  const renderStore = ({item}) => <StoreCard store={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PATIKASTORE</Text>
      <SearchBar />
      <View>
        <FlatList data={store_data} renderItem={renderStore} numColumns={2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  text: {
    margin: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#800080',
  },
});
