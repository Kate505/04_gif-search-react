import { useState } from "react"

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('Gif')

    const onInputChange = ({ target }) => {
        //console.log(target.value);
        setInputValue(target.value)        
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        //console.log(inputValue);
        if ( inputValue.trim().length <= 1) return;

        setCategories( categories => [inputValue, ...categories]);
        setInputValue('');
    }

    return (
        <form onSubmit={ (event) => onSubmit (event)}>
            <input type="text"
                placeholder="Buscar Gif"
                value = { inputValue }
                onChange = { (event) => onInputChange(event) }
            />
        </form>
    )
}
