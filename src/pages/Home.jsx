import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import { Context } from '../context';
import { Grid, Stack, Button } from '@mui/material';
import { getDeck } from '../utils/deck-of-cards';

const Home = () => {
  const { generatedDeck, suffleDeck } = useContext(Context);
  const navigate = useNavigate();

  const [deckData, setDeckData] = useState(null);

  const handelGenerateDeck = async() => {
    try {
      const res = await getDeck();
      suffleDeck(res);
    } catch(err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setDeckData(generatedDeck);
  }, [generatedDeck]);

  useEffect(() => {
    if (deckData) {
      navigate('/deck-of-cards');
    };
  }, [deckData, navigate]);

  return (
    <Grid 
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"  
      sx={{ minHeight: '100vh' }}
    >
      <Helmet>
        <title>Card Game</title>
      </Helmet>
      <Grid item xs={12}>
        <Stack direction="row" useFlexGap flexWrap="wrap">
          <Button onClick={handelGenerateDeck} variant="outlined">Start Game</Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Home;
