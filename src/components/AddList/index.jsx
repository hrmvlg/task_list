import React, { useState } from "react";
import List from "../List";
import "./AddListButton.scss"

const AddListButton = () => {

   const [visiblePopup, showPopup] = useState(false)
   return (
      <div className="add-list">
         <List
            onClick={() => alert(1)}
            items={[
               {
                  className: 'list__add-button',
                  icon: <i className="fa fa-plus"></i>,
                  name: 'Добавить список'
               }
            ]} />

         {visiblePopup && <div className="add-list__popup">
            <h1>dfdfgd</h1>
         </div>}
      </div>
   )
}

export default AddListButton;