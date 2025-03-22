import React  from "react";

const CategoryList =({categories})=>{
    //console.log('Categoria en CategoryList',categories);
    return(
        <div className="card">
            <div className="card-body">
                <h2>Categorias Registradas</h2>
                <ul className="list-group">
                    {categories.map((category)=>(
                        <li key={category.id}className='list-group-item'>{category.name}</li>
                    ))}

                </ul>
            </div>

        </div>
    );
};

export default CategoryList;