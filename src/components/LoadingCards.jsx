import CircularProgress from '@mui/material/CircularProgress';
import { 
  StyledLoading,
} from '../styles/styled.deckOfCards';

const LoadingCard = (isLoading) => (
  isLoading && 
  <StyledLoading>
    <CircularProgress />
  </StyledLoading>
);

export default LoadingCard;
