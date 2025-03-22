import React, { useState, useEffect } from 'react';
import { getCategories, createCategory } from './services/categoryService';
import { getProducts, createProducts } from './services/productService';
import CategoryForm from './components/CategoryForm';
import CategoryList from './components/CategoryList';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  // Obtener categorías
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      }
      catch (error) {
        console.log('Error fetching categories',error);
      }
      
    };
    fetchCategories();
  }, []);

  // Obtener productos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      }
      catch (error) {
        console.log('Error fetching products',error);
      }
      
    };
    fetchProducts();
  }, []);

  // Registrar una categoría
  const handleCategorySubmit = async (name) => {
    try {
      await createCategory(name);
      const updatedCategories = await getCategories();
      setCategories(updatedCategories);
    }catch (error) {
      console.log('Error creating category',error);
    }
    
  };

  // Registrar un producto
  const handleProductSubmit = async (product) => {
    try{
      await createProducts(product);
      const updatedProducts = await getProducts();
      setProducts(updatedProducts);
    } catch (error) {
      console.log('Error creating product',error
      );
    }
    

  };

  return (
    <div className='container mt-5'>
      <h1 className='text-center mb-4'>CATEGORIAS Y PRODUCTOS</h1>
      <CategoryForm onSubmit={handleCategorySubmit} />
      <CategoryList categories={categories} />
      <ProductForm categories={categories} onSubmit={handleProductSubmit} />
      <ProductList products={products} categories={categories} />
    </div>
  );
}

export default App;