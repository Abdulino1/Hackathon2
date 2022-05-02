import "./App.css";
import MenuOrder from "./components/MenuOrder";
import { useState, useEffect } from "react";
function App() {
  const [pizzaData, setPizzaData] = useState();
  const getPizza = async () => {
    try {
      const response = await fetch("/");
      const pizzas = await response.json();
      console.log(pizzas);
      return setPizzaData(pizzas);
    } catch (error) {}
  };
  useEffect(() => {
    getPizza();
  }, []);
  console.log(pizzaData);
  return <MenuOrder />;
}

export default App;
