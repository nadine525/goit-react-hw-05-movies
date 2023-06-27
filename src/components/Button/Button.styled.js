import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Division = styled.div`
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
  background-color: #dddddd;
  font-size: 18px;
  color: #515151;
  border-radius: 5px;
  border: 1px solid #bbbbbb;

  &:hover,
  :focus {
    color: #dddddd;
    background-color: #212121;
  }
`;
