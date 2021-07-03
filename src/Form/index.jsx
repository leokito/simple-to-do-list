import { useState } from 'react'
import './style.css'

const Form = ({addNewInput}) => {
    
    const [userInput, setUserInput] = useState('')

    return (
    <div className="taskForm">
        <input 
        className="taskInput" 
        type="text" 
        placeholder="Digite a tarefa" 
        required = {true}
        value={userInput} 
        onChange={event => setUserInput(event.target.value)}
        />
        
        <button className="btnAddTodo" onClick={() => addNewInput(userInput)}>Adicionar</button>
    </div>
    )
}

export default Form