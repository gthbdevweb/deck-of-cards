import { Grid } from '@mui/material';
import { 
  StyledImgCardQueen,
  StyledImgCard,
} from '../styles/styled.deckOfCards';

const searchCardsByQueen = (suit, listOfCards) => {
  const listCardsForQueen = listOfCards.filter(card => card.cards[0].suit.includes(suit));

  const transforToInteger = (value) => {
    switch(value) {
      case "ACE":
        return 11;
      case "JACK":
        return 12
      case "QUEEN":
        return 13
      default:
        return parseInt(value);
    }
  };

  const sortListCards = listCardsForQueen.sort((a, b) => transforToInteger(a.cards[0].value) - transforToInteger(b.cards[0].value));
  
  return(
    sortListCards?.map((card) => (
      !card.cards[0].value.includes("KING") &&
      <>
        <StyledImgCard src={card.cards[0].images.png} alt="view-card" />
      </>
    ))
  );
};

const CardsContent = (
  searchQueens,
  listOfCards
) => (
  <Grid 
    container
    spacing={2}
    padding={2}
    direction="row"
    alignItems="center"
    justifyContent="center"
    marginTop={5}
  >
    {searchQueens?.map((queen) => (
      <Grid item xs={3} key={queen.cards[0].code} paddingTop={"170px"}>
        {searchQueens?.length < 4 &&
          <StyledImgCardQueen src={queen.cards[0].images.png} alt="front-card" />
        }
        {searchQueens?.length >= 4 && searchCardsByQueen(queen.cards[0].suit, listOfCards)}
      </Grid>
    ))}
  </Grid>  
);

export default CardsContent;
