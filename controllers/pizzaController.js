const Pizza = require("../models/Pizza.js"); 

//c
module.exports = {
    findallPizzas: (req, res) => {
        Pizza.find()
            .then((allPizzas) => res.json(allPizzas))
            .catch((err) => res.status(400).json(err));
    },


    findOnePizza: (req, res) => {
        Pizza.findById(req.params.id)
            .then((onePizza) => res.json(onePizza))
            .catch((err) => res.status(400).json(err));
    },

//r

    createPizza: (req, res) => {
        Pizza.create(req.body)
            .then((newPizza) => res.json(newPizza))
            .catch((err) => res.status(400).json(err));
    },


//u    

    updatePizza: (req, res) => {
        Pizza.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then((updatedPizza) => res.json(updatedPizza))
            .catch((err) => res.status(400).json(err));
    },

//d


    deletePizza: (req, res) => {
        Pizza.findByIdAndDelete(req.params.id)
            .then((deletedPizza) => res.json(deletedPizza))
            .catch((err) => res.status(400).json(err));
    },
};
