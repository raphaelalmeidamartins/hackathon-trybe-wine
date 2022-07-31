import { Grid } from '@mui/material';
import styled from 'styled-components';

const HowItWorksCardGrid = styled(Grid)`
  height: 100%;
  justify-items: start;
`;

const HowItWorksCardImageContainer = styled(Grid)`
  align-items: center;
  display: flex;
  height: 83px;
  object-fit: contain;
  padding: 0;
  position: relative;
`;

const HowItWorksImage = styled.img`
  height: 100%;
  object-fit: contain;
  position: relative;
  width: 100%;
  z-index: 10;
`;

const HowItWorksLine = styled.div`
  border-width: 3px;
  border-color: #0eb843;
  border-style: solid none;
  bottom: 60%;
  left: ${({ left }) => (left ? '0' : undefined)};
  position: absolute;
  right: ${({ right }) => (right ? '0' : undefined)};
  width: ${({ half }) => (half ? '50%' : '100%')};
  z-index: 1;

  @media only screen and (min-width: 600px) {
    bottom: 60%;
    left: ${({ left }) => (left ? '0' : undefined)};
    position: absolute;
    right: ${({ right }) => (right ? '0' : undefined)};
    width: ${({ half }) => (half ? '50%' : '100%')};
    z-index: 1;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }

`;

const HowItWorksCardTextContainer = styled(Grid)`
  align-items: center;
  padding: 20px;
  min-height: 200px;
`;

export {
  HowItWorksCardImageContainer,
  HowItWorksCardGrid,
  HowItWorksImage,
  HowItWorksLine,
  HowItWorksCardTextContainer,
};
