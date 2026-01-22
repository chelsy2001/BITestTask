import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';

export default function CheckoutScreen({ navigation }: any) {
  const dispatch = useDispatch();
  const animationRef = useRef<LottieView>(null);

  const confirmOrder = () => {
    animationRef.current?.play();
    dispatch(clearCart());

    setTimeout(() => {
      navigation.replace('Products');
    }, 2500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Checkout</Text>

      {/* COD Card */}
      <View style={styles.card}>
        <Text style={styles.methodTitle}>Payment Method</Text>
        <Text style={styles.method}>Cash on Delivery</Text>
        <Text style={styles.subText}>
          Pay with cash when your order arrives at your doorstep.
        </Text>
      </View>

      {/* Success Animation */}
      <LottieView
        ref={animationRef}
        source={require('../assets/success.json')}
        loop={false}
        style={styles.animation}
      />

      {/* Confirm Button */}
      <TouchableOpacity style={styles.button} onPress={confirmOrder}>
        <Text style={styles.buttonText}>Confirm Order</Text>
      </TouchableOpacity>

      <Text style={styles.note}>
        Your order will be placed successfully 
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 14,
    elevation: 4,
    marginBottom: 20,
  },
  methodTitle: {
    fontSize: 14,
    color: '#777',
  },
  method: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 4,
  },
  subText: {
    fontSize: 13,
    color: '#666',
    marginTop: 6,
  },
  animation: {
    width: 220,
    height: 220,
    marginVertical: 16,
  },
  button: {
    width: '100%',
    backgroundColor: '#ff6f00',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  note: {
    fontSize: 13,
    color: '#555',
    marginTop: 12,
  },
});
