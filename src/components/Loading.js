import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useRef } from 'react';
const Loading = () => {
  const animation = useRef(null);
  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'transparent',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../../assets/loading.json')}
      />
    </View>
  );
};

export default Loading;
const styles = StyleSheet.create({
  animationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
