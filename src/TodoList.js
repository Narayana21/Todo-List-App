import React from 'react'

const TodoList = ({todolist,deleteHandler}) => {
    return (
        <center>

        <div>
            {todolist.map((todo,index) =>
            <div key={index}>
                <h5>{todo} &nbsp; <button className="del" onClick={() => deleteHandler(index)}>Delete</button></h5>
            </div>)}
        </div>
                </center>
    )
}

export default TodoList