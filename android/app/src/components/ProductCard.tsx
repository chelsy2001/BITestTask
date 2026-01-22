import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Product } from '../type/product';
import { addToCart } from '../redux/cartSlice';

type Props = {
  product: Product;
  onAddToCart: () => void;
};

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
    onAddToCart(); // navigate to cart
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>₹ {product.price}</Text>

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 12,
    margin: 8,
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    height: 120,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  price: {
    marginVertical: 6,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 6,
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
