import styled from 'styled-components';

export const StyledMoviesForm = styled.form`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

export const StyledMoviesInput = styled.input`
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const StyledMoviesButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }
`;
