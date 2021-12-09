import React from 'react'
import './tasks.scss'


const Tasks = ({ list }) => {
   return (
      <div className="tasks">
         <h2 className="tasks__title">
            {list.name}
            <i className="tasks__icon fa fa-edit" />
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