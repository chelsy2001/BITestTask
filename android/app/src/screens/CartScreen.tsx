import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from '../redux/cartSlice';
import { RootState } from '../app/store';

export default function CartScreen({ navigation }: any) {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <View style={styles.container}>
      {cart.map(item => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>₹ {item.price}</Text>

          <View style={styles.qtyRow}>
            <TouchableOpacity onPress={() => dispatch(decreaseQty(item.id))}>
              <Text style={styles.qtyBtn}>-</Text>
            </TouchableOpacity>

            <Text>{item.qty}</Text>

            <TouchableOpacity onPress={() => dispatch(increaseQty(item.id))}>
              <Text style={styles.qtyBtn}>+</Text>
            </TouchableOpacity>
          </View>

          <Button
            title="Remove"
            onPress={() => dispatch(removeFromCart(item.id))}
          />
        </View>
      ))}

      <Text style={styles.total}>Total: ₹ {total}</Text>

      <Button
        title="Proceed to Checkout (COD)"
        onPress={() => navigation.navigate('Checkout')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  item: {
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  title: { fontWeight: 'bold' },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginVertical: 8,
  },
  qtyBtn: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
  },
});
