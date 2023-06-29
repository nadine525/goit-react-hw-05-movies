import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 40px;
  box-shadow: 0px 4px 36px -21px rgba(0, 0, 0, 0.75);
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
  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: #c75124;
  }
`;
