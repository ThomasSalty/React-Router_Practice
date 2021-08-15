import React, { useState, useEffect } from 'react';
import './App.css';

function Rocket({ match }) {
    useEffect(() => {
        fetchRocket();
        // console.log(match);
    }, []);

    const [rocket, setRocket] = useState({
        flickr_images: [],
    });

    const fetchRocket = async () => {
        const data = await fetch(
            `https://api.spacexdata.com/v4/rockets/${match.params.id}`
        );
        const rocket = await data.json();
        console.log(rocket);
        setRocket(rocket);
    };

    return (
        <div>
            <h1>{rocket.name}</h1>
            <h5>{rocket.description}</h5>
            <img src={rocket.flickr_images[0]} width='100%' alt='' />
        </div>
    );
}

export default Rocket;
