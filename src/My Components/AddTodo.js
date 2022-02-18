import React from 'react'
import { useState } from 'react/cjs/react.development'

export const AddTodo = (props) => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc)
        {
            alert("Title or Desciption can't be blank")
        }
        else{
            props.onadd(title,desc);
        setTitle("");
        setDesc("");
        }
        
    }
    return (
        <div className='container my-3'>
            <h3>Add a todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" value = {title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control mb-3 my-1" id="title" aria-describedby="emailHelp" placeholder="Enter a Todo Title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" value ={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control mb-3 my-1" id="desc" placeholder="Add a Description" />
                </div>
                <button type="submit" className="btn btn-sm btn-success" >Add Todo</button>
            </form>
        </div>
    )
}
