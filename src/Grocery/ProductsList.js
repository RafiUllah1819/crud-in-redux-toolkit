// ProductList.js

import React ,{useState} from 'react';
import {categories} from '../Grocery/categories.js';

export const ProductList = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories);
    // console.log(categories)

    const selectCategory = (category) =>{
        const filterItems = categories.filter(item=> item.category === category.category)
        setSelectedCategory(filterItems)
    }
  // Render the component
  console.log("selectedCategory" ,selectedCategory);
  return (
    <div>
      <h1>Products List</h1>
      <button onClick={()=> setSelectedCategory(categories)}>All</button>
    {
        categories.map((category, i) =>{
            return<>
            
            <button onClick={() => selectCategory(category)} key={i}>{category.category}</button>
            </>
        })
    }
    <div className='cards-wrapper'>
      {
        selectedCategory.map(({products, index}) =>{
          return(
            <div className='all-cards' key={index}>
              {
                products.map((product,i)=>{
                  return <div className='card' key={i}>
                    <h3>{product.name}</h3>
                    <h4> Price:{product.price}</h4>
                  </div>
                })
              }
            
            </div>
          )
        })
      }
    </div>
    </div>
  );
};
