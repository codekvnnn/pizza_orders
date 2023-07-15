import React, { useState } from 'react';
import axios from 'axios';

const NewPizza = () => {
    const [pizza, setPizza] = useState('');
    const [size, setSize] = useState('');
    const [delivered, setDelivered] = useState(false);
    const [note, setNote] = useState('');
    const [error, setError] = useState(null);

    const pizzaTypes = ['Pepperoni', 'Cheese', 'Combination','Philly Cheese Steak','Hawaiian','Veggie'];
    const pizzaSizes = ['Single','Small', 'Medium', 'Large'];

    const handleCreatePizza = (e) => {
        e.preventDefault(); // Prevent default 

        // Validation
        if (!pizza || !size) {
            setError('Pizza type and size are required!');
            return;
        }


        if (note && note.length > 25) {
            setError('Note must be no larger than 25 characters.');
            return;
        }

        const newPizza = {
            pizza,
            size,
            delivered,
            note,
        };

        axios
            .post('http://localhost:8000/api/pizza', newPizza)
            .then((res) => {
                console.log('New pizza created:', res.data);
                setError(null);

                window.location.href = '/';
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h1>{pizza ? `${pizza} ${size}` : `New Pizza`}</h1>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <form>
                <div>
                    <label>Pizzas:</label>
                    <select value={pizza} onChange={(e) => setPizza(e.target.value)}>
                        <option value="">Select a pizza type</option>
                        {pizzaTypes.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Size:</label>
                    <select value={size} onChange={(e) => setSize(e.target.value)}>
                        <option value="">Select a size</option>
                        {pizzaSizes.map((pizzaSize) => (
                            <option key={pizzaSize} value={pizzaSize}>
                                {pizzaSize}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Delivered:</label>
                    <input type="checkbox" checked={delivered} onChange={(e) => setDelivered(e.target.checked)} />
                </div>
                <div>
                    <label>Note (optional, max 25 characters):</label>
                    <input type="text" value={note} onChange={(e) => setNote(e.target.value)} maxLength={25} />
                </div>
                <button type="submit" onClick={handleCreatePizza}>
                    Order now!
                </button>
            </form>
            <a href="/">Back to Dashboard</a>
        </div>
    );
};

export default NewPizza;
