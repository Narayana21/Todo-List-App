import React,{useState} from 'react'
import TodoList from './TodoList';

const App = () => {
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);

  const changeHandler = e =>{
    setTask(e.target.value)
  }
  const submitHandler = e =>{
    e.preventDefault();
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
  }
  const deleteHandler = (indexValue) =>{
    const newTodos = todos.filter((todo,index) => index !== indexValue);
    setTodos(newTodos);
  }
  return (
    
    <div className='maindiv'>
      <center>
        <div className="card cd">
          <div className="card-body">
            <h2 className="card-title">Todo List</h2>
            <br/>
            <form onSubmit={submitHandler}>
              <input size="30" type="text" name="task" value={task} onChange={changeHandler} className="ipfield"/> &nbsp;&nbsp;
              <input type="submit" value="Add" name="Add"/>
            </form>
            <br/>
            <TodoList todolist={todos} deleteHandler={deleteHandler}/>
          </div>
        </div>
      </center>
    </div>
           
  

















  )
}

export default App