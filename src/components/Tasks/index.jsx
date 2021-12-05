import React from 'react'
import './tasks.scss'


export default function Tasks() {
   return (
      <div>
         <div className="tasks">
            <h2 className="tasks__title">Фронтэнд
               <i className="tasks__icon fa fa-edit" />
            </h2>

            <div className="tasks__items">
               <div className="tasks__items-row">
                  <div className="checkbox">
                     <input id="check" type="checkbox" />
                     <label htmlFor="check">
                        <i class="fa fa-check"></i>
                     </label>
                  </div>

                  <input value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, maxime?"></input>
               </div>

            </div>
         </div>
      </div>
   )
}
