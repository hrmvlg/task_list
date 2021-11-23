import React from "react";
import AddList from "./components/AddList";
import List from "./components/List/index";

import DB from './asserts/db.json'

function App(){
  
  return(
    <div className="todo">
      <div className="todo__sidebar">
        <List items={[
          {
            icon: <i className="fa fa-list-ul" />,
            name: 'Все задачи',
          },
        ]}
        />
        <List items={DB.lists.map(item => {
          item.color = DB.colors.filter(color => color.id === item.colorId)[0].name 
          return item
        })}
        isRemovable
        />
        <AddList colors={DB.colors}/>
      </div>
      <div className="todo__tasks"></div>
    </div>
  )
}

export default App;
