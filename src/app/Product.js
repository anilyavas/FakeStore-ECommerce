import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import { useState, useEffect } from 'react';

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const { data: productData } = await axios.get(apiUrl);
    setLoading(false);
    setData(productData);
  };

  const renderProduct = ({ item }) => {
    return <ProductCard product={item} />;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList data={data} renderItem={renderProduct} />
      )}
    </View>
  );
};

export default Products;
const styles = StyleSheet.create({});
