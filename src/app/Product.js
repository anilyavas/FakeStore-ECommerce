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
import useFetch from '../hooks/useFetch';

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const Products = () => {
  const { data, loading, error } = useFetch(apiUrl);

  const renderProduct = ({ item }) => {
    return <ProductCard product={item} />;
  };

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Failed to fetch data</Text>;
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
