import React from 'react';
import Task from '../Task/Task';
import "./Lane.css"

function Lane({laneId, title, loading, error, tasks, onDragStart, onDragOver, onDrop, onDropOnTask}) {
    return (
        <div 
            className="Lane-wrapper" 
            onDragOver={onDragOver} 
            onDrop={(e) => onDrop(e, laneId)}
        >
            <h2>{title}</h2>
            {loading || error ? (
                <span>{error || 'Loading...'}</span>
            )
            :
            (
                tasks.map((task) => (
                    <Task 
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        body={task.body}
                        onDragStart={onDragStart}
                        onDropOnTask={onDropOnTask}
                        laneId={laneId}
                    />
                ))
            )
            }
        </div>
    );
}

export default Lane;