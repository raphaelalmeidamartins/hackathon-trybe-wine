import styled from '@emotion/styled';
import { Box } from '@mui/material';

export default styled(Box)`
  background: linear-gradient(0deg, rgba(253,232,217,1) 0%, rgba(255,255,255,1) 100%);
  padding-bottom: 32px;

  span.winebox-title {
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.mainOrange};
  }

  h1 {
    color: ${(props) => props.theme.colors.mainOrange};
    font-size: 2.2rem;
    margin: 0;
    text-transform: uppercase;
  }

  @media only screen and (min-width: 900px) {
    box-shadow: inset 0 -156px 0 0 white;
  }
`;
