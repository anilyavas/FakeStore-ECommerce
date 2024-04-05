import { View, Text, StyleSheet } from 'react-native';

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const Products = () => {
  return (
    <View>
      <Text>Hello {apiUrl}</Text>
    </View>
  );
};

export default Products;
const styles = StyleSheet.create({});
