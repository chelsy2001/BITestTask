import LottieView from 'lottie-react-native';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';


export default function CheckoutScreen() {
const dispatch = useDispatch();


return (
<View>
<Text>Cash on Delivery</Text>
<LottieView
source={require('../assets/success.json')}
autoPlay loop={false}
/>
<Button title="Confirm Order" onPress={() => dispatch(clearCart())} />
</View>
);
}