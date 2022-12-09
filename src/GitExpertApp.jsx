import { useState } from "react";
import PropTypes from 'prop-types';
import { AddCategory, GitGrid } from "./componets";

const GipExpertApp =  () => {
    
    const [categories, setCategories] = useState(['Futbol']);
    
    const onAddCategory = (newCategory) => {
        // list.push('Three'); // No usar nunca

        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        // console.log(categories);
    };
    
    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            
            <AddCategory 
                // setCategories = {setCategories}
                onNewCategories = {onAddCategory}
            />

            { /* <button onClick={onAddCategory}> Add Category</button> 
            Listado de Git 
            <ol> */}

            {
                categories.map( (category) => (
                    // return <li key={category}>{category}</li>
                    <GitGrid key={category} category={category} />
                ))
            }
            
            {/* </ol> */}

        </>
    )
}
/*
GipExpertApp.propTypes = {
    list : PropTypes.array
}


GipExpertApp.defaultProps = {
    list: ['Futbol','Basquetbol','Nadar']
}
*/

export default GipExpertApp;