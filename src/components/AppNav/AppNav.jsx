import { StyledNavLink } from "pages/MovieDetails/MovieDetails.styled"
import { StyledNav } from "./AppNav.styled"


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



