import React, {useState, useEffect} from 'react'
import './App.css';
import Item from './components/item';

export default function App() {

  const [itens, setItens] = useState([])

  function getData(){
    fetch('http://localhost:3000/todo/list', {method:"GET"})
    .then(response => response.json())
    .then(data => setItens(data))
  }

  useEffect(()=>{
    getData();
  }, []);

  function insertDocument(){
    fetch('http://localhost:3000/todo/add', 
    {
      method:"POST", 
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({text:'', active:true}) 
    })
      .then(response => response.json())
      .then(() => getData())
  }

  function updateDocument(item){
    fetch('http://localhost:3000/todo/update', 
    {
      method:"PATCH", 
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(item) 
    })
      .then(response => response.json())
      .then(() => getData())
  }

  function deleteDocument(item){
    fetch('http://localhost:3000/todo/delete', 
    {
      method:"DELETE", 
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(item) 
    })
      .then(response => response.json())
      .then(() => getData())
  }

  return (
    <div className="wrapper">
      <h1>To Do App</h1>

      { itens.map(item=>{
        return(<Item item={item} updateDocument={updateDocument} deleteDocument={deleteDocument} />)
      }) 
      }
      

      <button>Todos</button>
      <button>Pendentes</button>
      <button>Concluídos</button>

      <button onClick={insertDocument}>Inserir novo To-Do</button>

    </div>
  );
}

