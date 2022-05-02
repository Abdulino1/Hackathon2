//

const mongoose = require("../mongoose");
const Schema = mongoose.Schema;

// pizza schema
const pizzaSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  toppings: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// create model from schema
const Pizza = mongoose.model("Pizza", pizzaSchema);
const findPizzas = async (pizza) => {
  const findPizza = await pizza.find();
  return findPizza; 
}
// export model

module.exports = {findPizzas, Pizza};
