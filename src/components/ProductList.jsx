import React from 'react';
import useInventory from '../hooks/useInventory';

function ProductList() {
    const { products, removeProduct } = useInventory();

    return (
        <div>
            <h2>Product List</h2>
            {products.length === 0 ? (
                <p>No products on the list.</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            {product.name} - ${product.price}
                            <button onClick={() => removeProduct(product.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ProductList;