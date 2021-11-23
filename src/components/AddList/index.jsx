import React, { useState } from "react";
import List from "../List";
import Badge from "../../Budge";
import "./AddList.scss";


const AddList = ({ colors }) => {

   const [visiblePopup, showPopup] = useState(false)
   const [selectedColor, selectColor] = useState(colors[0].id)

   console.log(selectedColor)

   return (
      < div className="add-list" >
         <List
            onClick={() => showPopup(true)}
            items={[
               {
                  className: 'list__add-button',
                  icon: <i className="fa fa-plus"></i>,
                  name: 'Добавить список'
               }
            ]} />
         {
            visiblePopup &&
            <div className="add-list__popup">
               <i className=" fa fa-times-circle" />
               <input className="field" type="text" placeholder="Название списка" />
               <div className="add-list__popup-colors">
                  {
                     colors.map(color => (
                        <Badge
                           onClick={() => selectColor(color.id)}
                           key={color.id}
                           color={color.name}
                           className={selectedColor === color.id && 'active'}
                        />
                     ))}
               </div>
               <button className="button">Добавить</button>
            </div>
         }
      </div>
   )
}

export default AddList;