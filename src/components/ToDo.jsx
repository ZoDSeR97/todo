import React from 'react'


const ToDo = (props) =>{
    return(
        <div>
            <span style={{textDecoration: props.thing.completed?"line-through":""}}>{props.thing.text}</span>
            <input type="checkbox" checked={props.thing.completed} onChange={()=>props.onCompleted(props.index)} />
            <button type="submit" onClick={()=>props.onDelete(props.index)}>Delete</button>
        </div>
    );
}

export default ToDo;