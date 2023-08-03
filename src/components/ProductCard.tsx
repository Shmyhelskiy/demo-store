import { FC } from "react";
import { useCartStore } from "../store";

type ProductCardProps = {
    product: Product;
};

const ProductCard:FC<ProductCardProps> = ({product}) => {
    const { addToBasket, basket, deleteFromBasket } = useCartStore();
    const existenceCheck = (product: Product) => {
        const isProductInBasket = basket.find(item => item.id === product.id); 
        if ( isProductInBasket) {
            deleteFromBasket(product)
        } else {
            addToBasket(product)
        }
    }
    return (
        <div className="border p-4 shadow-md">
            <img src={process.env.PUBLIC_URL + `/images/${product.image}`} alt={product.name} className="mb-2 w-64 h-52" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">Price: {product.price} $</p>
            {
                product.inBasket ? 
                <button className="flex mt-2 gap-2 bg-orange-500/70 p-2 rounded-xl active:bg-orange-300" onClick={() => existenceCheck(product)}>
                <img src={`/images/basket.svg`} alt="basket" className="w-6 h-6"/>
                    <span>Delete from Basket</span>
                </button>
                : 
                <button className="flex mt-2 gap-2 bg-orange-500 p-2 rounded-xl active:bg-orange-300" onClick={() => existenceCheck(product)}>
                <img src={`/images/basket.svg`} alt="basket" className="w-6 h-6"/>
                    <span>Add to Basket</span>
                </button>
                
            }
        </div>
    );
};

export default ProductCard;
