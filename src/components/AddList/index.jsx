import React, { useState, useEffect } from "react";
import axios from 'axios'
import List from "../List";
import Badge from "../Budge";
import "./AddList.scss";

const AddList = ({ colors, onAdd }) => {

   const [visiblePopup, showPopup] = useState(false)
   const [selectedColor, selectColor] = useState(3)
   const [isLoading, setisLoading] = useState(false)
   const [inputValue, setinputValue] = useState('')

   useEffect(() => {
      if (Array.isArray(colors)) {
         selectColor(colors[0].id)
      }
      // eslint-disable-next-line
   }, [colors])


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

      setisLoading(true)
      axios.post('http://localhost:3001/lists', {
         name: inputValue,
         colorId: selectedColor
      }).then(({ data }) => {
         const color = colors.filter(c => c.id === selectedColor)[0].name
         const listObj = { ...data, color: { name: color } }
         onAdd(listObj)
         onClose()
      }).finally(() => {
         setisLoading(false)
      })
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
            visiblePopup && (
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
                  <button onClick={addList} className="button">
                     {isLoading ? 'Добавление...' : 'Добавить'}
                  </button>
               </div>
            )}
      </div>
   );
};

export default AddList;