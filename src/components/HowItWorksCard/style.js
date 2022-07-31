import styled from 'styled-components';

const HowItWorksImage = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;

const HowItWorksLine = styled.div`
  border: 5px solid gray;
  width: ${({ half }) => (half ? '50%' : '100%')};

  &:not(:last-child) {
    ${({ left }) => (left ? 'left: 0' : 'right: 0')};
  }
  position: absolute;
  bottom: 50%;
`;

export { HowItWorksImage, HowItWorksLine };
