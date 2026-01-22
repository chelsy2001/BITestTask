import products from '../data/products.json';
import { FlatList, Button } from 'react-native';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';


export default function ProductListScreen() {
const [page, setPage] = useState(1);
const data = products.products.slice(0, page * 10);


return (
<FlatList
data={data}
keyExtractor={i => i.id.toString()}
renderItem={({ item }) => <ProductCard product={item} />}
onEndReached={() => setPage(p => p + 1)}
/>
);
}