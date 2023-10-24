import { Stack, Button } from '@mui/material';
import { 
  StyledSuffle,
} from '../styles/styled.deckOfCards';

const handleFinish = (
  setListOfCards,
  suffleDeck,
) => {
  setListOfCards([]);
  suffleDeck(null);
};

const ResetGame = (
  searchQueens,
  setListOfCards,
  suffleDeck,
) => (
  searchQueens?.length >= 4 &&
  <StyledSuffle item xs={12}>
    <Stack direction="row" useFlexGap flexWrap="wrap">
      <Button onClick={() => handleFinish(
        setListOfCards,
        suffleDeck,
      )} variant="contained">Finish</Button>
    </Stack>
  </StyledSuffle>
);

export default ResetGame;
