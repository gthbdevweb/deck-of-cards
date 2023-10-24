import { Grid } from '@mui/material';
import SuffleCards from './SuffleCards';
import LoadingCard from './LoadingCards';
import BackCard from '../assets/img/card-back.svg';
import { 
  StyledButton,
  StyledImgCardBack
} from '../styles/styled.deckOfCards';

const handleSelectCard = async (
  setIsLoading,
  getCards,
  generatedDeck,
  listOfCards,
  setSelectCard
) => {
  setIsLoading(true);
  try {
    const deckInfo = await getCards(generatedDeck.deck_id);
    listOfCards.push(deckInfo);
    if (deckInfo?.cards[0]?.value === "QUEEN") {
      setSelectCard(BackCard);
    } else {
      setSelectCard(deckInfo?.cards[0]?.images?.png || BackCard);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  } catch(err) {
    console.error(err);
  }
};

const CardButton = (
  searchQueens,
  selectCard,
  isLoading,
  setIsLoading,
  getCards,
  generatedDeck,
  listOfCards,
  setSelectCard
  ) => (
  searchQueens?.length < 4 &&
  <Grid item xs={12} boxSizing={"border-box"}>
    <StyledButton 
      onClick={() => handleSelectCard(
        setIsLoading,
        getCards,
        generatedDeck,
        listOfCards,
        setSelectCard
      )}
      disabled={isLoading}
    >
      <StyledImgCardBack src={selectCard} alt="back-card" />
      {LoadingCard(isLoading)}
      <SuffleCards />
    </StyledButton>
  </Grid>
);

export default CardButton;
