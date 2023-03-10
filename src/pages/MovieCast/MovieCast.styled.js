import styled from 'styled-components';

export const CastContainer = styled.div`
  padding: 0 30px;
`;
export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CastImage = styled.img`
  border-radius: 50%;
`;
