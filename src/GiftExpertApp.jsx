import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['Cars'])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        setCategories(cat => [newCategory, ...cat])
    }
    return (
        <>

            <h1>Gift Expert App</h1>

            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />

            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }

        </>
    )
}
