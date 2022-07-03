import {TextInput, View} from 'react-native';
import React from 'react';
import styles from './SearchBar.style';

const SearchBar = () => {
  return (
    <View>
      <TextInput style={styles.input} placeholder="Ara..."></TextInput>
    </View>
  );
};

export default SearchBar;
