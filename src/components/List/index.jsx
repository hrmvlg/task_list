import React from "react";
import classNames from 'classnames';
import './List.scss';

import Budge from '../../Budge'

const List = ({ items, isRemovable, onClick, onRemove }) => {
   const remvoeList = (item) => {
      if (window.confirm('Вы действительно хотите удалить список?')) {
         onRemove(item)
      }
   }
   return (
      <ul onClick={onClick} className="list">
         {items.map((item, index) => (
            <li key={index} className={classNames(item.className, { 'active': item.active })}>
               <i>
                  {item.icon ? (
                     item.icon
                  ) : (
                     <Budge color={item.color} />
                  )}
               </i>
               <span>{item.name}</span>
               {isRemovable && <i class="list__remove-icon fa fa-times"
                  onClick={() => remvoeList(item)} />}
            </li>
         ))}
      </ul>
   )
}

export default List;