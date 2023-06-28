import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Division = styled.div`
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 3px 9px;
  background-color: #dddddd;
  font-size: 16px;
  color: #515151;
  border-radius: 3px;
  border: 1px solid #bbbbbb;

  &:hover,
  :focus {
    color: #dddddd;
    background-color: gray;
  }

  svg {
    display: block;
    margin-right: 10px;
  }
`;
