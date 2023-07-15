import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllPizzas = () => {
    const [allPizzas, setAllPizzas] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/pizza')
            .then((response) => setAllPizzas(response.data))
            .catch((error) => setError(error));
    }, []);

    const deletePizza = (id) => {
        axios
            .delete(`http://localhost:8000/api/pizza/${id}`)
            .then((res) => {
                console.log(res.data);
                setAllPizzas(allPizzas.filter((pizza) => pizza._id !== id));
            })
            .catch((err) => console.log(err));
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Pizza Order</h1>
            <h5>Find stores in your area!</h5>
            <table>
                <thead>
                    <tr>
                        <th>Created At</th>
                        <th>Pizza</th>
                        <th>Size</th>
                        <th>Delivered</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allPizzas.map((pizza) => (
                        <tr key={pizza._id}>
                            <td>{new Date(pizza.createdAt).toLocaleString()}</td>
                            <td>{pizza.pizza}</td>
                            <td>{pizza.size}</td>
                            <td>{pizza.delivered ? 'Delivered' : 'Not Delivered'}</td>
                            <td>
                                <button onClick={() => deletePizza(pizza._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/new-pizza">Order A Pizza</Link>
        </div>
    );
};

export default AllPizzas;
