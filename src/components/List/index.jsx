import React from "react";
import classNames from 'classnames';
import './List.scss';

import Budge from '../../Budge'

const List = ({ items, isRemovable, onClick }) => {
   console.log(items, isRemovable)
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
            </li>
         ))}
      </ul>
   )
}

export default List;