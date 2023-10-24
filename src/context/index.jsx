import React, { useState, createContext } from 'react';

const Context = createContext(null);

const Provider = (props) => {
  const [generatedDeck, setGeneratedDeck] = useState(null);
  const [listOfCards, setListOfCards] = useState([]);

  const suffleDeck = (cardsOfDeck) => {
    setGeneratedDeck(cardsOfDeck);
  };

  const value = {
    generatedDeck,
    suffleDeck,
    listOfCards,
    setListOfCards,
  };
  
  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  );
};

export {
  Provider,
  Context
};
