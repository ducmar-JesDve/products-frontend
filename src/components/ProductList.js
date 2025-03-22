import React  from "react";

const ProductList =({products,categories})=>{
    return(
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">  Productos Registrados</h2>
                <ul className="list-group">
                    {products.map((product)=>(
                        <li key={product.id} className='list-group-item'>
                            {product.name}(Categoria:{categories.find((cat)=>cat.id === product.category_id)?.name ||'Desconocida'})
                            </li>
                    ))}

                </ul>
            </div>

        </div>
    );
};

export default ProductList;