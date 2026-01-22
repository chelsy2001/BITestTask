import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Product } from '../type/product';

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text>₹ {product.price}</Text>
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
});
