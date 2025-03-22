import React, { useState } from "react";

const CategoryForm = ({ onSubmit }) => {
  const [newCategory, setNewCategory] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    await onSubmit(newCategory);
    setNewCategory('');
  };

  return (
    <div className="card md-4">
      <div className="card-body">
        <h2 className="card-title">Registrar Categorias</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input 
              type="text"
              className="form-control"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Nombre de la categoria"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default CategoryForm;