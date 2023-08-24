import { useState } from "react"

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Gif')

    const onInputChange = ({ target }) => {
        //console.log(target);
        setInputValue(target.value)
        console.log(target.value)
    }

    const onSubmit = ( event ) => {
        event.prevenDefault();
    }

    return (
        <form action="" onSubmit={ (event) => onSubmit (event)}>
            <input type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}
