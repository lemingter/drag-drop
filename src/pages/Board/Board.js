import React from 'react';
import Lane from '../../Components/Lane/Lane';
import useDataFetching from '../../Hooks/useDataFetching';
import './Board.css';

const lanes = [
    {id: 1, title: "To Do"},
    {id: 2, title: "In Progress"},
    {id: 3, title: "Review"},
    {id: 4, title: "Done"},
]

function Board() {
    const [loading, error, tasks] = useDataFetching('https://my-json-server.typicode.com/lemingter/myAPI/tasks');

    return (
        <div className="Board-wrapper">
            {
                lanes.map((lane) => (
                    <Lane 
                        key={lane.id} 
                        title={lane.title}
                        loading = {loading}
                        error={error}
                        tasks={tasks.filter((task) => task.lane === lane.id)}
                    />
                ))
            }
        </div>
    );
}

export default Board;