import React from "react";
import './Task.css';

function Task({id, laneId, title, body, onDragStart, onDropOnTask}) {
    return (
        <div 
            className="Task-wrapper"
            draggable
            onDragStart={(e) => onDragStart(e, id)}
            onDrop={(e) => onDropOnTask(e, laneId, id)}
        >
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}

export default Task;
