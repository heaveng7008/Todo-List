import React from 'react'
import { Todos } from "./Todos";
import { AddTodo } from './AddTodo';

export const Todo = (props) => {
    return (
        <div>
            <AddTodo onadd={props.onadd} />
            <Todos todos={props.todos} onDelete={props.onDelete} />
        </div>
    )
}
