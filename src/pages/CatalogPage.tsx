import { FC } from 'react';
import { useCartStore } from '../store';
import ProductCard from '../components/ProductCard';

const CatalogPage:FC = () => {
    const {products} = useCartStore(); 
    return (
        <main className="container mx-auto mt-4 grid gap-4 grid-cols-2">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </main>
    );
};

export default CatalogPage;