import { View, Text, StyleSheet, Image } from 'react-native';

const ProductCard = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <View style={styles.body}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price} TL</Text>
      </View>
    </View>
  );
};

export default ProductCard;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    margin: 10,
  },
  image: {
    width: 60,
    aspectRatio: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'dimgrey',
  },
});
