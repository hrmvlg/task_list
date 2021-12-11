import axios from 'axios'
import React from 'react'
import './tasks.scss'


const Tasks = ({ list, onEditTitle }) => {
   const editTitle = () => {
      const newTitle = window.prompt('Название списка', list.name)
      if (newTitle) {
         onEditTitle(list.id, newTitle)
         axios.patch("http://localhost:3001/lists/" + list.id, {
            name: newTitle
         }).catch(() => {
            alert('Не удалось обновить название списка!')
         })
      }
   }

   return (
      <div className="tasks">
         <h2 className="tasks__title">
            {list.name}
            <i onClick={editTitle} className="tasks__icon fa fa-edit" />
         </h2>

         <div className="tasks__items">
            {!list.tasks.length && <h2>Задачи отсутствуют</h2>}
            {list.tasks.map(task => (
               <div key={task.id} className="tasks__items-row">
                  <div className="checkbox">
                     <input id={`task-${task.id}`} type="checkbox" />
                     <label htmlFor={`task-${task.id}`}>
                        <i class="fa fa-check"></i>
                     </label>
                  </div>
                  <input readOnly value={task.text} />
               </div>
            ))}
         </div>
      </div>
   )
}
export default Tasks;