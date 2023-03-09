import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const AppNav = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/" end>
        Home
      </StyledNavLink>
      <StyledNavLink to="/movies">
        Movies
      </StyledNavLink>
    </StyledNav>

  )
}



const StyledNav = styled.nav`
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-around;
  padding: 10px 20px;
  margin-bottom: 40px;
`;

const StyledNavLink = styled(NavLink)`
  color: #000;
  margin-right: 20px;
  text-decoration: none;

  &.active {
    font-weight: bold;
  }
`;