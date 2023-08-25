import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState( ['Super Heroes', 'Cars'] )

    const onAddCategory = ( newCategory ) => {
        //console.log(newCategory);
        setCategories(cat => [newCategory, ...cat])
        //setCategories([ newCategory, ...categories])
    }
  return (
    <>
    {/*Title*/}
    <h1>Gift Expert App</h1>

    {/*Input*/}
    <AddCategory
        //setCategories={ setCategories } 
        onNewCategory = { value => onAddCategory(value) }
    />
    
    {/*Gif List*/}
    <ol>
        {
            categories.map( category => {
                return <li key={category}> { category } </li>
            })
        }
    </ol>

    {/*Gif item*/}
    </>
  )
}
