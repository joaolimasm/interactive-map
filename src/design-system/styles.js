import styled from "styled-components";

export const Container = styled.div`
  .container {
    display: flex;
    justify-content: center;
  }
  .selected-itens {
    justify-content: center;
    margin-left: 5rem;
  }
  .itens {
    justify-content: center;
    margin-left: 5rem;
  }
`;
export const StyledSelect = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  &:hover {
    border-color: #555;
  }
`;
export const StyledOption = styled.option`
  border: 1px solid #ccc;
`;

export const StyledButton = styled.button`
  background-color: #0d1b2b;
  color: white;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  margin-left: 1rem;
  &:hover {
    background-color: #0d1b2b;
  }
`;
