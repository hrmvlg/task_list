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
        <List items={[
          {
            color: 'red',
            name: 'Покупки',
            active: true,
          },
          {
            color: 'green' ,
            name: 'Фильмы и сериалы',
          },
          {
            color: 'blue' ,
            name: 'Личное',
          },
        ]}
        isRemovable
        />
        <AddList colors={DB.colors}/>
      </div>
      <div className="todo__tasks"></div>
    </div>
  )
}

export default App;
