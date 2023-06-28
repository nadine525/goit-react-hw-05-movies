import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  padding-left: 15px;
  padding-right: 15px;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const StyledLink = styled(Link)`
  color: #212121;
`;
