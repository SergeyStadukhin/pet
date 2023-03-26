import React from 'react'
import modules from './Styles/style.module.scss'

const MainPanel = ({listTasks, changeCategory, addTask}) => {
    const [textTask, setTextTask] = React.useState()

    const addNewTask = (text, id) => {
        if (textTask !== '') {
            setTextTask('')
            addTask(text, id)
        } else {
            alert('Невозможно добавить пустую задачу')
        }
    }
    return (
        <div className={modules.mainPanel}>
            <h2>Список дел</h2>
            <ul>
                {listTasks.filter((item)=>item.idCategory===changeCategory).map((task) => (
                    <li className={
                        `${task.isDone && modules.taskDone}
                         ${task.isImportant && modules.taskImportant}`
                        }>{task.value}</li>   
                ))} 
            </ul>
            <input placeholder='Добавить задачу'
            onChange={(event)=>setTextTask(event.target.value)}
            value={textTask} />
            <button onClick={()=>addNewTask(textTask, changeCategory)}>Добавить</button>
        </div>
    )
}

export default MainPanel