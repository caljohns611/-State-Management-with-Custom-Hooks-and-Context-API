import React, { useState } from 'react';
import useInventory from '../hooks/useInventory';

function NewProductFrom() {
    const { addProduct } = useInventory();
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!productName || !productPrice) {
            alert('Fill in both fields.');
            return;
        }

        const newProduct = {
            id: Date.now(),
            name: productName,
            price: parseFloat(productPrice),
        };

        addProduct(newProduct);
        setProductName('');
        setProductPrice('');
    };

    return (
        <div>
            <h2>Add a new product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Product Name:
                        <input type='text' value={productName} onChange={(e) => setProductName(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Product Price:
                        <input type='number' value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                    </label>
                </div>
                <button type='submit'>Add Product</button>
            </form>
        </div>
    );
};

export default NewProductFrom;