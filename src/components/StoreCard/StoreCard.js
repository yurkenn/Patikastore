import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './StoreCard.style';
const StoreCard = ({store}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: store.imgURL}} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}> {store.title}</Text>
        <Text style={styles.price}>{store.price}</Text>
        <Text style={styles.inStock}>
          {store.inStock === true ? '' : 'STOKTA YOK'}
        </Text>
      </View>
    </View>
  );
};

export default StoreCard;
