import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategories}) => {

    const [inputValue, setInputValue] = useState('')
    // const [categories, setCategories] = useState(list)

    

    const onInputChange = ({target}) => {
        setInputValue(target.value);
        
        // const [categories] = setCategories;
        // console.log(categories);
        // setCategories([...categories, inputValue]);
        
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        // console.log(inputValue);

        if(inputValue.trim().length <= 1) return;
        
        // setCategories(categories => [inputValue, ...categories]);
        onNewCategories(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder="Add Git"
                value = {inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func
}

// export default AddCategory;