import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const MainDetailsSection = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 30px;
`;

export const PosterImg = styled.img`
  width: 300px;
  /* height: 300px; */
`;

export const MovieTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
`;

export const OverviewContainer = styled.div`
  margin-top: 20px;
`;

export const OverviewTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const GenresContainer = styled.div`
  margin-top: 20px;
`;

export const GenresTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const AdditionalInfoContainer = styled.div`
  padding: 0 20px;
  margin-bottom: 40px;
`;

export const InfoTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #000;
  margin-right: 20px;
  text-decoration: none;

  &.active {
    font-weight: bold;
  }
`;

export const StyledLink = styled(Link)`
  color: #000;
  margin-right: 20px;
  margin-left: 20px;
  text-decoration: none;

  :hover {
    font-weight: 700;
  }
`;
