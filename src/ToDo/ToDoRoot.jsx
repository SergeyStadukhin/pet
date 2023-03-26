import React from 'react'
import Header from './Header';
import ListsPanel from './ListsPanel';
import MainPanel from './MainPanel';
import modules from './Styles/style.module.scss'

const ToDoRoot = () => {
    const categories = [{id: 1, value: '1'}, {id:2, value: '2'}]

    const tasks = [{id:1, idCategory: 1, value: '123', isDone: false, isImportant: false},
    {id:2, idCategory: 2, value: '456', isDone: true, isImportant: true},
    {id:3, idCategory: 1, value: '789', isDone: false, isImportant: true}]

    const [listCategories, setListCategories] = React.useState(categories)
    const [listTasks, setListTasks] = React.useState(tasks)
    const [changeCategory, setChangeCategory] = React.useState(2)

    console.log(listCategories)
    const addCategory = (text) => {
        console.log(text)
        const newId = listCategories.at(-1).id+1
        setListCategories([...listCategories, {id: newId, value: text}])
    }

    const addTask = (textTask, idCat) => {
        console.log('addTask')
        console.log(textTask)
        console.log(idCat)
        const newId = listTasks.at(-1).id+1
        setListTasks([...listTasks, {id: newId, idCategory: idCat, value: textTask, isDone: false, isImportant: false}])
    }

    return(
        <div className="ToDoRoot">
            <Header />
            <div className={modules.Body}>
                <ListsPanel listCategories={listCategories}
                addCategory={(item)=>addCategory(item)} 
                changeCategory={changeCategory} 
                setChangeCategory={(id)=>setChangeCategory(id)}/>
                <MainPanel 
                listTasks={listTasks} 
                changeCategory={changeCategory}
                addTask={(textTask, idCat)=>addTask(textTask, idCat)}/>
            </div>
        </div>
    )
}

export default ToDoRoot;