import React from 'react'
import modules from './Styles/style.module.scss'

const ListsPanel = ({listCategories, addCategory, changeCategory, setChangeCategory}) => {
    const [textNewCategory, setTextNewCategory] = React.useState()

    const addNewCategory = (text) => {
        if (text !== '') {
            addCategory(text)
            setTextNewCategory('')
        } else {
            alert('Невозможно добавить пустую категорию')
        }
    }
    console.log('changeCategory')
    console.log(changeCategory)
    return (
        <div className={modules.ListsPanelRoot}>
            <h2>Категории</h2>
            {listCategories.map((category) => (
                <div className={`${modules.category}
                ${changeCategory === category.id && 
                    modules.changeCategory}`}
                    onClick={()=>setChangeCategory(category.id)}>{category.value}</div>
            ))}
            <input placeholder='Добавить категорию'
            onChange={(event) => setTextNewCategory(event.target.value)} 
            value={textNewCategory} />
            <button onClick={()=>addNewCategory(textNewCategory)}>Добавить</button>
        </div>
    )
}

export default ListsPanel;