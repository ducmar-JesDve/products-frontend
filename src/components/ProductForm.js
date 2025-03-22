import React, { useState } from "react";

const ProductForm = ({ categories, onSubmit }) => {
  const [newProduct, setNewProduct] = useState({ name: '', category_id: '' });

  const handleSubmit = async(e) => {
    e.preventDefault();
    await onSubmit(newProduct);
    setNewProduct({ name: '', category_id: '' });
  };

  return (
    <div className="card md-4">
      <div className="card-body">
        <h2 className="card-title">Registrar Producto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              placeholder="Nombre del producto"
              required
            />
          </div>
          <div className='mb-3'>
            <select
              className="form-select"
              value={newProduct.category_id}
              onChange={(e) => setNewProduct({ ...newProduct, category_id: e.target.value })}
              required>
              <option value="">Seleccione una categoria</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;