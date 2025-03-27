import { useState } from 'react';
import { nanoid } from 'nanoid';
import ListItem from './components/ListItem';


function App() {
  const [todoList, setTodoList] = useState([
    { id: nanoid(8), content: "item 1" },
    { id: nanoid(8), content: "item 2" },
    { id: nanoid(8), content: "item 3" },
  ]);

  function deleteTodo(id) {
    setTodoList(todoList.filter((item) => item.id !== id));
  }

  return (
    <div className="h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl txt-slate-100 mb-4">La To-do liste</h1>
        <form action="" className="mb-10">
          <label htmlFor="todo-item" className="text-slate-50">Ajouter une chose à faire</label>
          <input 
            type="text" 
            className="mt-1 block w-full rounded" 
            name="" 
            id="" 
            />
          <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">Ajouter</button>
        </form>
        <ul>
          {todoList.length === 0 && <li className='text-slate-50 text-md'>Pas d'items à afficher...</li>} 
          {todoList.map((item) => (
            <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo}/>
          ))}

        </ul>
      </div>
    </div>
  )
}

export default App
