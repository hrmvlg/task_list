import React, { useState } from "react";
import List from "../List";
import Badge from "../../Budge";
import "./AddList.scss";


const AddList = ({ colors, onAdd }) => {

   const [visiblePopup, showPopup] = useState(false)
   const [selectedColor, selectColor] = useState(colors[0].id)
   const [inputValue, setinputValue] = useState('')

   const onClose = () => {
      showPopup(false)
      setinputValue('')
      selectColor(colors[0].id)
   }


   const addList = () => {
      if (!inputValue || inputValue === "") {
         alert("Введите название списка!")
         return
      }

      const color = colors.filter(c => c.id === selectedColor)[0].name
      onAdd({
         id: Math.random(),
         name: inputValue,
         color
      })
      onClose()
   }

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
               <i onClick={onClose} className=" fa fa-times-circle" />
               <input
                  className="field"
                  type="text"
                  placeholder="Название списка"

                  value={inputValue}
                  onChange={e => setinputValue(e.target.value)}
               />
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
               <button
                  onClick={addList}
                  className="button">Добавить</button>
            </div>
         }
      </div>
   )
}

export default AddList;