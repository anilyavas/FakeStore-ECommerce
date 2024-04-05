import { View, StyleSheet, FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';
import useFetch from '../hooks/useFetch';
import Error from '../components/Error';
import Loading from '../components/Loading';

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const Products = ({ navigation }) => {
  const { data, loading, error } = useFetch(apiUrl);

  const handleProductSelect = (id) => {
    navigation.navigate('Details', { id });
  };

  const renderProduct = ({ item }) => {
    return (
      <ProductCard
        product={item}
        onSelect={() => handleProductSelect(item.id)}
      />
    );
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ gap: 10 }}
        data={data}
        renderItem={renderProduct}
      />
    </View>
  );
};

export default Products;
const styles = StyleSheet.create({
  container: {},
});
