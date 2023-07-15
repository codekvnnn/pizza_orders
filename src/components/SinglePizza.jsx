import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SinglePizza = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pizza/${id}`) 
            .then((response) => setPizza(response.data))
            .catch((error) => console.error(error));
    }, [id]);
    
    if (!pizza) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Single Pizza</h1>
            <p>Pizza: {pizza.pizza}</p>
            <p>Size: {pizza.size}</p>
            <p>Delivered: {pizza.delivered ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default SinglePizza;
