const PizzaController = require("../controllers/pizzaController");

module.exports = (app) => {
    app.get("/api/pizza", PizzaController.findallPizzas);
    app.get("/api/pizza/:id", PizzaController.findOnePizza);
    app.post("/api/pizza", PizzaController.createPizza);
    app.patch("/api/pizza/:id", PizzaController.updatePizza);
    app.delete("/api/pizza/:id", PizzaController.deletePizza);
};
