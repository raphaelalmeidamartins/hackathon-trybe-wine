import styled from '@emotion/styled';
import { ToggleButtonGroup } from '@mui/material';

export default styled(ToggleButtonGroup)`
  display: flex;
  justify-content: center;

  button {
    border: 1px solid ${(props) => props.theme.colors.mainOrange};
    padding: 11px 24px;
    color: ${(props) => props.theme.colors.mainOrange};
    font-weight: 700;
  }
  button.Mui-selected {
    background-color: ${(props) => props.theme.colors.mainOrange};
    color: white;
  }
  button.Mui-selected:hover {
    background-color: ${(props) => props.theme.colors.mainOrange};
  }
`;
