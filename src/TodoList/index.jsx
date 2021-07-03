import './style.css'

const TodoList = ({list, removeTask}) => {
    return (
        <ul className="ulList">
           {
            list.map(element =>
               <li className="taskList">
                    <div className="fillList">{element}</div>
                    <button className='remTodo' onClick={() => removeTask(element)}>Feito!</button>
                </li>
                )
           } 
        </ul>
    )
}

export default TodoList