import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    margin: 4,
    padding: 5,
  },
  innerContainer: {
    paddingBottom: 60,
  },
  image: {
    height: Dimensions.get('window').height / 3,
    margin: 5,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  inStock: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
});
