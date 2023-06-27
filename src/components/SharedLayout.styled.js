import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 30px;
  box-shadow: 0px 4px 26px -10px rgba(0, 0, 0, 0.8);
`;

export const StyledLink = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  cursor: pointer;
  text-decoration: none;
  color: #212121;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &.active {
    color: #c75124;
  }
`;
