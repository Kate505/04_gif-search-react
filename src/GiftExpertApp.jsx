import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState( ['Super Heroes', 'Cars'] )

    const onAddCategory = () => {
        //setCategories(cat => [...categories, 'Video Games'])
        setCategories(['Video Games', ...categories])
    }
  return (
    <>
    {/*Title*/}
    <h1>Gift Expert App</h1>

    {/*Input*/}
    <AddCategory setCategories={ setCategories } />
    
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
