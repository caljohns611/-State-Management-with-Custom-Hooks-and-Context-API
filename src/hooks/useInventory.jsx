import { useState, useEffect } from 'react';

const initialProducts = [
    { id: 1, name: 'Product 1', price: 49.99 },
    { id: 2, name: 'Product 2', price: 99.99},
    { id: 3, name: 'Product 3', price: 200.00},
];

function useInventory() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(initialProducts);
    }, []);

    const addProduct = (product) => {
        setProducts((prevProducts) => [...prevProducts, product]);
    };

    const removeProduct = (productId) => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
    };

    return {
        products,
        addProduct,
        removeProduct,
    };
}

export default useInventory;