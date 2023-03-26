import React from 'react'
import Header from './Header';
import ListsPanel from './ListsPanel';
import MainPanel from './MainPanel';
import modules from './Styles/style.module.scss'

const ToDoRoot = () => {
    const categories = [{id: 1, value: '1'}, {id:2, value: '2'}]
    const [listCategories, setListCategories] = React.useState(categories)
    console.log(listCategories)
    const addCategory = (text) => {
        console.log(text)
        const newId = listCategories.at(-1).id+1
        setListCategories([...listCategories, {id: newId, value: text}])
    }
    return(
        <div className="ToDoRoot">
            <Header />
            <div className={modules.Body}>
                <ListsPanel listCategories={listCategories}
                addCategory={(item)=>addCategory(item)} />
                <MainPanel />
            </div>
        </div>
    )
}

export default ToDoRoot;