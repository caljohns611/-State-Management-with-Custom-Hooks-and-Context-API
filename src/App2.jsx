import React from 'react';
import ProductList from './components/productList';
import NewProductFrom from './components/NewProductForm';

function App() {
    return (
        <div>
            <h1>Inventory Management</h1>
            <NewProductFrom />
            <ProductList />
        </div>
    );
}

export default App;