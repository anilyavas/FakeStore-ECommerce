import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const ProductCard = ({ product, onSelect }) => {
  return (
    <Pressable onPress={onSelect}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: product.image }}
          resizeMode='contain'
        />
        <View style={styles.body}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price} TL</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    borderColor: '#bdbdbd',
    borderWidth: 1,
    backgroundColor: '#e0e0e0',
  },
  body: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'right',
  },
});
