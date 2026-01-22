import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { removeFromCart } from '../redux/cartSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'Cart'>;

export default function CartScreen({ navigation }: Props) {
  const cart = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <View>
      {cart.map((item: any) => (
        <Text key={item.id}>
          {item.title} x {item.qty}
        </Text>
      ))}

      <Button
        title="Checkout"
        onPress={() => navigation.navigate('Checkout')}
      />
    </View>
  );
}
