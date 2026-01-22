import { Provider } from 'react-redux';
import { store } from './android/app/src/app/store';
import AppNavigator from './android/app/src/navigation/AppNavigator';


export default function App() {
return (
<Provider store={store}>
<AppNavigator />
</Provider>
);
}