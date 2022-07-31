import { Paper } from '@mui/material';
import styled from 'styled-components';

export default styled(Paper)`
  padding: 16px;
  border-radius: 8px;

  p, h2 {
    text-align: center;
  }

  h2 {
    margin-top: 0;
  }

  h3 {
    margin: 0 0 8px
  }

  .price {
    font-style: italic;
    margin-bottom: 0;
  }

  .price-with-discount {
    margin-top: 0;
  }

  .price-with-discount--bold {
    font-weight: 700;
    font-size: 2rem;
  }

  button {
    display: block;
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    text-transform: none;
    font-weight: 500;
    margin: 24px auto 0;
  }
`;
