import React from 'react'

const TodoItem = props => {
    const {
        index,
        value,
        deleteTodo,
        handleOnClickEdit
    } = props


    return (
        <div className="row-wrapper">
        <span class="badge badge-secondary">{value}</span>
        <button type="button" class="btn btn-success"onClick={() => handleOnClickEdit(index, value)}>Edit</button>
        <button type="button" class="btn btn-danger"onClick={() => deleteTodo(index)}>Delete</button>
    </div>
    )
}

export default TodoItem
