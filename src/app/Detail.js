import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import useFetch from '../hooks/useFetch';
import Loading from '../components/Loading';
import Error from '../components/Error';

const url = process.env.EXPO_PUBLIC_API_URL;
const Details = ({ route }) => {
  const { id } = route.params;
  const { data, loading, error } = useFetch(`${url}/${id}`);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: data.image }}
        style={styles.image}
        resizeMode='contain'
      />
      <View style={styles.body}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.price}>{data.price} TL</Text>
      </View>
    </View>
  );
};

export default Details;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    padding: 10,
    gap: 10,
  },
  image: {
    width: width,
    height: height / 3,
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  description: {
    fontStyle: 'italic',
    marginVertical: 5,
  },
  price: {
    fontWeight: '700',
    fontSize: 22,
    textAlign: 'right',
  },
});
