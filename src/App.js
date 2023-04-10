import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import ToDo from './components/ToDo';

function App() {
  const [thing, setThing] = useState({text:"", completed: false});
  const [list, setList] = useState(()=>{
    const storedList = localStorage.getItem("list");
    return storedList ? JSON.parse(storedList):[];
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const AddToDo = (e)=>{
    e.preventDefault();
    if(thing.text)
      setList([...list, thing]);
    setThing({ text: "", completed: false });
    console.log(list);
  }

  const onDelete = (idx)=>{
    setList(list.filter((thing,i)=>{return i!==idx}));
  }

  const onCompleted = (idx) =>{
    setList(list.map((todo, i) => { 
      if (i === idx){
        const updated = {...todo, completed:!todo.completed} 
        return updated;
      }
      return todo;
    }))
    console.log(list);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={AddToDo}>
          <input type='text' onChange={(e)=>setThing({text:e.target.value, completed: false})} value={thing.text}/>
          <button type='submit'>Add</button>
        </form>
        {
          list.map((thing,idx)=>
            <ToDo 
              key={idx}
              index={idx}
              thing={thing}
              onDelete={onDelete}
              onCompleted={onCompleted}
            />
          )
        }
      </header>
    </div>
  );
}

export default App;
