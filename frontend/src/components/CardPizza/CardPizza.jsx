import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../../context/CartContext";


const CardPizza = ({desc = null, name, price, ingredients = [], img, isHome, id, }) => {
  const { addToCart } = useContext(CartContext);
  const createCart = (pizzaId, pizzaName, pizzaImg, pizzaPrice) => {
    const newElementCart = {pizzaId, pizzaName, pizzaImg, pizzaPrice, quantity: 1, };
    addToCart(newElementCart);
  };

  return (
    <div className="card m-3" style={{width:"18rem"}}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{desc}</p>
      <ul className="list-group list-group-flush">
      🍕Ingredientes: {ingredients.map((ingredient, index) => (
          <li key={index} className="list-group-item">{ingredient}</li>
        ))}
      </ul>
      <p className="mt-1 fw-bold">Precio: ${price}</p>
      <a href="#" className="btn btn-light">Ver más 👀</a>
      <Button  variant="dark" onClick={() => createCart(id, name, img, price)}>Añadir 🛒</Button> 
      </div>
    </div>
  );
};

// Validaciones de PropTypes
CardPizza.propTypes = {
  name: PropTypes.string.isRequired, 
  desc: PropTypes.string.isRequired, 
  img: PropTypes.string.isRequired, 
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired, 
  price: PropTypes.number.isRequired, 
};

export default CardPizza;


