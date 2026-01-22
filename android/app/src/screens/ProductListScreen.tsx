import products from '../data/products.json';
import { FlatList } from 'react-native';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../type/product';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Products'>;

export default function ProductListScreen({ navigation }: Props) {
  const [page, setPage] = useState(1);

  const data: Product[] = products.products.slice(0, page * 10);

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <ProductCard
          product={item}
          onAddToCart={() => navigation.navigate('Cart')}
        />
      )}
      onEndReached={() => setPage(p => p + 1)}
      onEndReachedThreshold={0.5}
    />
  );
}
