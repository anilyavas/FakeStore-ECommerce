import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ActivityIndicator,
} from 'react-native';

const Products = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .then((res) => console.log(res));
    setLoading(false);
    setProduct(response);
  };
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={product}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      )}

      <Button title='fetch' onPress={fetchProduct} />
    </View>
  );
};

export default Products;
const styles = StyleSheet.create({
  container: {},
});
