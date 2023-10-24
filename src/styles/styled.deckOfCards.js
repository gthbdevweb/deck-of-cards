import styled, { keyframes }  from 'styled-components';
import { Grid } from '@mui/material';

const suffle = keyframes`
  0% {
    transform: rotate(0) translateX(0) scale(1);
  }
  50% {
    transform: rotate(5deg) translateX(105%) scale(0.96);
  }
  100% {
    transform: rotate(0) translateX(0);
  }
`;

const StyledDeckCtn = styled(Grid) `
  @media (min-width: 768px) {
      padding: 0 30%;
    }
`

const StyledSuffle = styled(Grid)`
  position: absolute;
  background: rgba(0, 0, 0, .4);
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLoading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const StyledButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  width: 226px;
  height: 344px;
  position: relative;
`;

const StyledCardsBackOne = styled.button`
  border: none;
  background: transparent;
  width: 226px;
  height: 344px;
  position: absolute;
  left: 0;
  top: 0;
  padding: 5;
  z-index: -1;
  animation: ${suffle} .5s ease-in-out 0s 1 normal;
  transition: z-index 0s ease-in-out 0.5s;
`;

const StyledCardsBackTwo = styled.button`
  border: none;
  background: transparent;
  width: 226px;
  height: 344px;
  position: absolute;
  left: 0;
  top: 0;
  padding: 5;
  z-index: -2;
  animation: ${suffle} .5s ease-in-out .5s 1 normal; 
  transition: z-index 0s ease-in-out 1.5s;
`;

const StyledCardsBackThree = styled.button`
  border: none;
  background: transparent;
  width: 226px;
  height: 344px;
  position: absolute;
  left: 0;
  top: 0;
  padding: 5;
  z-index: -3;
  animation: ${suffle} .5s ease-in-out 1s 1 normal;
  transition: z-index 0s ease-in-out 2.5s;
`;

const StyledImgCardBack = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledImgCardQueen = styled.img`
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    width: 226px;
    height: 314px;
  }
`;

const StyledImgCard = styled.img`
  width: 100%;
  height: 100%;
  margin-top: -110%;

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    padding-top: -90%;
  }
`;

export {
  StyledDeckCtn,
  StyledSuffle,
  StyledLoading,
  StyledButton,
  StyledCardsBackOne,
  StyledCardsBackTwo,
  StyledCardsBackThree,
  StyledImgCardBack,
  StyledImgCardQueen,
  StyledImgCard,
};
