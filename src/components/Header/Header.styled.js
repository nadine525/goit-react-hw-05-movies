import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;

  width: 100%;
  height: 70px;
  padding: 0 40px;
  box-shadow: 0px 4px 36px -21px rgba(0, 0, 0, 0.75);
`;

export const StyledLink = styled(NavLink)`
  font-weight: 700;
  font-size: 24px;
  line-height: 20px;
  letter-spacing: 0.03em;
  cursor: pointer;
  text-decoration: none;
  color: #363434;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: #c75353;
  }
`;
