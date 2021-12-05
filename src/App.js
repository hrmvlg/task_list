import React, {useState} from "react";
import AddList from "./components/AddList";
import List from "./components/List/index";
import Tasks from './components/Tasks'

import DB from './asserts/db.json'

function App(){    
  const [list, setLists] = useState(
    DB.lists.map(item => {
    item.color = DB.colors.filter(color => color.id === item.colorId)[0].name 
    return item
  }))

  const onAddList = (obj) => {
   const newList = [
     ...list,
     obj
   ]
   setLists(newList)
 }

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
        <List items={list}
        isRemovable
        onRemove = {(item)=>{console.log(item)}}
        />
        <AddList onAdd={onAddList} colors={DB.colors}/>
      </div>
      <div className="todo__tasks">
        <Tasks/>
      </div>
    </div>
  )  
}

export default App;
