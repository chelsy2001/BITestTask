
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Cart Screen</Text> 
    </View> 
  );
}
export default CartScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});