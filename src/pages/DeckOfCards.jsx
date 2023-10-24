import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import { Context } from '../context';
import { getCards } from '../utils/deck-of-cards';
import BackCard from '../assets/img/card-back.svg';

import CardButton from '../components/CardButton';
import CardsContent from '../components/CardsContent';
import ResetGame from '../components/ResetGame';

import { StyledDeckCtn } from '../styles/styled.deckOfCards';

const DeckOfCards = () => {
  const { generatedDeck, listOfCards, setListOfCards, suffleDeck } = useContext(Context);
  const navigate = useNavigate();

  const [selectCard, setSelectCard] = useState(BackCard);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (generatedDeck === null) navigate('/');
  }, [generatedDeck, navigate]);

  const searchQueens = listOfCards.filter(card => card.cards[0].value.includes("QUEEN"));

  const gameCards = () => (
    <>
      {CardButton(
        searchQueens,
        selectCard,
        isLoading,
        setIsLoading,
        getCards,
        generatedDeck,
        listOfCards,
        setSelectCard
      )}
      {CardsContent(
        searchQueens,
        listOfCards
      )}          
      {ResetGame(
        searchQueens,
        setListOfCards,
        suffleDeck,
      )}
    </>
  );

  return (
    <StyledDeckCtn 
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"  
      sx={{ minHeight: '100vh' }}
    >
      <Helmet>
        <title>Play Cards</title>
      </Helmet>
      {gameCards()}
    </StyledDeckCtn>
  );
};

export default DeckOfCards;
