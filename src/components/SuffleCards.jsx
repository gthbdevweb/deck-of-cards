import BackCard from '../assets/img/card-back.svg';
import { 
  StyledCardsBackOne,
  StyledCardsBackTwo,
  StyledImgCardBack,
  StyledCardsBackThree
} from '../styles/styled.deckOfCards';

const SuffleCards = () => (
  <>
    <StyledCardsBackOne>
      <StyledImgCardBack src={BackCard} alt="back-card-one" />
    </StyledCardsBackOne>
    <StyledCardsBackTwo>
      <StyledImgCardBack src={BackCard} alt="back-card-two" />
    </StyledCardsBackTwo>
    <StyledCardsBackThree>
      <StyledImgCardBack src={BackCard} alt="back-card-three" />
    </StyledCardsBackThree>
  </>
);

export default SuffleCards;
