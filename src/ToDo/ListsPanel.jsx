import React from 'react'
import modules from './Styles/style.module.scss'

const ListsPanel = ({listCategories, addCategory}) => {
    const [textNewCategory, setTextNewCategory] = React.useState()

    const addNewCategory = (text) => {
        addCategory(text)
        setTextNewCategory('')
    }
    console.log('categories')
    console.log(listCategories)
    return (
        <div className={modules.ListsPanelRoot}>
            <h2>Категории</h2>
            {listCategories.map((category) => (
                <div className={modules.category}>{category.value}</div>
            ))}
            <input placeholder='Добавить категорию'
            onChange={(event) => setTextNewCategory(event.target.value)} 
            value={textNewCategory} />
            <button onClick={()=>addNewCategory(textNewCategory)}>Добавить</button>
        </div>
    )
}

export default ListsPanel;