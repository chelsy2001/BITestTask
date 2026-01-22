import { View, Text, Button, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';

export default function CheckoutScreen({ navigation }: any) {
  const dispatch = useDispatch();

  const confirmOrder = () => {
    dispatch(clearCart());
    setTimeout(() => {
      navigation.replace('Products');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cash on Delivery</Text>

      <LottieView
        source={require('../assets/success.json')}
        autoPlay
        loop={false}
        style={{ width: 200, height: 200 }}
      />

      <Button title="Confirm Order" onPress={confirmOrder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 16,
  },
});
