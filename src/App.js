import './App.css';
import {useState} from 'react'
import TodoList from './TodoList';
import Form from './Form';

function App() {

  const [list, setList] = useState([])

  const addTodo = (newTodo) => {
      if (newTodo !== '') {
        setList([newTodo, ...list])
      }
  }
  const handleTodo = (removeTodo) => {
     setList(list.filter(element => element !== removeTodo)) 
  }

  return (
    <div className="App">
      <div className="App-header">
        <div className="App-title"><h1>Lista de Tarefas</h1></div>
        <p>Insira as atividades que precisa realizar no campo abaixo, e clique em "Adicionar"</p>
        <Form addNewInput={addTodo}/>
        <div className="taskDiv">Tarefas:</div>
        <div className="listContainer">
        <TodoList list={list} removeTask={handleTodo}/>
        </div>
    </div>
    </div>
  );
}

export default App;
