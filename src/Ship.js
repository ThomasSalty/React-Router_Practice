import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Ship() {
    useEffect(() => {
        fetchRockets();
    }, []);

    const [rockets, setRockets] = useState([]);

    const fetchRockets = async () => {
        /* const data = await fetch('https://api.spacexdata.com/v4/rockets');
        const rockets = await data.json(); */
        const rockets = await (
            await fetch('https://api.spacexdata.com/v4/rockets')
        ).json();
        // console.log(rockets);
        setRockets(rockets);
    };

    return (
        <div>
            {rockets.map(rocket => (
                <h1 key={rocket.id}>
                    <Link to={`/ships/${rocket.id}`}>{rocket.name}</Link>
                </h1>
            ))}
        </div>
    );
}

export default Ship;
