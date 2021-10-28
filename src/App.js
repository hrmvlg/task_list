import React from "react";
import List from "./components/List/index";

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
            color: 'red' ,
            name: 'Пук',
            active: true,
          },
          {
            color: 'green' ,
            name: 'Среньк',
            active: true,
          },
          {
            color: 'blue' ,
            name: 'Как',
          },
        ]}
        isRemovable
        />
        <List
          items = {[
            {
              className: 'list__add-button',
              icon:<i className="fa fa-plus"></i>,
              name: 'Добавить список'
            }
        ]}
        />
      </div>
      <div className="todo__tasks"></div>
    </div>
  )
}

export default App;
