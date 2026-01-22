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
    onAddToCart();
  };

  return (
    <View style={styles.card}>
      {/* IMAGE */}
      <Image
        source={{ uri: product.thumbnail }}
        style={styles.image}
        resizeMode="contain"
      />

      {/* DETAILS */}
      <Text numberOfLines={1} style={styles.title}>
        {product.title}
      </Text>

      <Text style={styles.price}>₹ {product.price}</Text>

      {/* BUTTON */}
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4, // Android shadow
  },
  imageWrapper: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    alignItems: 'center',
  },
  image: {
    height: 140,
    width: '100%',
    marginBottom: 10,
  },
  details: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ff6f00',
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});
