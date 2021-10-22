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
            active: true,
          },
        ]}
        />
        <List items={[
          {
            color: 'red' ,
            name: 'Пук',
          },
          {
            color: 'green' ,
            name: 'Среньк',
          },
          {
            color: 'blue' ,
            name: 'Как',
          },
        ]}
        />
      </div>
      <div className="todo__tasks"></div>
    </div>
  )
}

export default App;
