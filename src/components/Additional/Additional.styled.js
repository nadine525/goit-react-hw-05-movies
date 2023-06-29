import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Division = styled.div`
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #212121;
`;

export const AddInfoTitle = styled.h4`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #212121;
`;

export const List = styled.ul`
  margin-left: 40px;
`;

export const StyledLink = styled(Link)`
  color: #212121;

  &:hover,
  &:focus {
    color: #c75124;
    text-decoration: underline;
  }
`;
