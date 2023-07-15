// const express = require("express");
// const cors = require("cors");
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(
//     cors({
//         origin: "http://localhost:3000"
//     }),
// );

// require("./config/mongoose.config");

// require("./routes/pizzaRoutes")(app);

// app.listen(8000, () => {
//     console.log("Listening on Port 8000");
// });

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: 'http://localhost:3000',
    }),
);

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pizza-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

require('./routes/pizzaRoutes')(app);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});