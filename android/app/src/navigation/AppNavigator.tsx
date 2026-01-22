import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/LoginScreen';
import Signup from '../screens/SignupScreen';
import Products from '../screens/ProductListScreen';
import Cart from '../screens/CartScreen';
import Checkout from '../screens/CheckoutScreen';


const Stack = createNativeStackNavigator();


export default function AppNavigator() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Login" component={Login} />
<Stack.Screen name="Signup" component={Signup} />
<Stack.Screen name="Products" component={Products} />
<Stack.Screen name="Cart" component={Cart} />
<Stack.Screen name="Checkout" component={Checkout} />
</Stack.Navigator>
</NavigationContainer>
);
}