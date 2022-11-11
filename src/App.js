import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  // const itemName = cart.map((i) => i.name);
  const listItem = cart.map(item => 
    <li>{item.name}</li>
  );

  // const countPrice = card.map(item =>
  //   setPrice(price + item.price)  
  // );


  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        // <p>Bakery Item {index}</p > // replace with BakeryItem component
        <BakeryItem key={index} item={item} setCart={setCart}/>
      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <ul>{listItem}</ul>
      </div>
      {/* <h2>Total Price: {countPrice}</h2> */}
      <h3>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</h3>
    </div>
  );
}

export default App;