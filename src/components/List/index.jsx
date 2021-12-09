import React from "react";
import classNames from 'classnames';
import axios from 'axios'

import './List.scss';

import Budge from '../Budge'

const List = ({ items, isRemovable, onClick, onRemove, onClickItem, activeItem }) => {
   const remvoeList = (item) => {
      if (window.confirm('Вы действительно хотите удалить список?')) {
         axios.delete('http://localhost:3001/lists/' + item.id).then(() => {
            onRemove(item.id)
         })
      }
   }
   return (
      <ul onClick={onClick} className="list">
         {items.map((item, index) => (
            <li
               key={index}
               className={classNames(item.className, {
                  active: activeItem && activeItem.id === item.id
               })}
               onClick={onClickItem ? () => onClickItem(item) : null}
            >
               <i>
                  {item.icon ? (
                     item.icon
                  ) : (
                     <Budge color={item.color.name} />
                  )}
               </i>
               <span>
                  {item.name}
                  {item.tasks && ` (${item.tasks.length})`}
               </span>
               {isRemovable && <i class="list__remove-icon fa fa-times"
                  onClick={() => remvoeList(item)} />}
            </li>
         ))}
      </ul>
   )
}
export default List;