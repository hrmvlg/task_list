import React, { useState } from 'react'
import axios from 'axios'

const AddTaskForm = ({ list, onAddTask }) => {
   const [visibleForm, setvisibleForm] = useState(false)
   const [inputValue, setinputValue] = useState('')
   const [isLoading, setisLoading] = useState('')

   const addTask = () => {
      const obj = {
         "listId": list.id,
         "text": inputValue,
         "completed": false
      }
      setisLoading(true)
      axios.post('http://localhost:3001/tasks/', obj).then(({ data }) => {
         onAddTask(list.id, obj)
         toggleFromVisible()
      })
         .catch(() => {
            alert("Ошибка при добавлении задачи!")
         })
         .finally(() => {
            setisLoading(false)
         })
   }

   const toggleFromVisible = () => {
      setvisibleForm(!visibleForm)
      setinputValue('')
   }

   return (
      <div className="tasks__form">
         {!visibleForm ?
            (<div onClick={toggleFromVisible} className="tasks__form-new">
               <i className="fa fa-plus" />
               <span>Новая задача</span>
            </div>
            ) : (
               <div className="tasks__form-block">
                  <input
                     className="field"
                     type="text"
                     placeholder="Текст задачи"

                     value={inputValue}
                     onChange={e => setinputValue(e.target.value)}
                  />
                  <button disabled={isLoading} onClick={addTask} className="button">
                     {isLoading ? "Добавление" : "Добавить задачу"}
                  </button>
                  <button onClick={toggleFromVisible}
                     className="button button--gray">
                     Отмена
                  </button>
               </div>
            )}
      </div>
   )
}
export default AddTaskForm;