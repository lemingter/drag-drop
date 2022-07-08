import React, { useEffect, useState } from 'react';
import Lane from '../../Components/Lane/Lane';
import './Board.css';

const lanes = [
    {id: 1, title: "To Do"},
    {id: 2, title: "In Progress"},
    {id: 3, title: "Review"},
    {id: 4, title: "Done"},
]

function Board(props) {
    const [loading, setLoading] = useState(false);
    const [tasks, setTask] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const task = await fetch('https://my-json-server.typicode.com/lemingter/myAPI/tasks');
                const result = await task.json();

                if(result) {
                    setTask(result);
                    setLoading(false);
                }
            } catch (e) {
                setLoading(false);
                setError(e.error);
            }
        };

        fetchData();
    }, []);

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