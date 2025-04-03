import styled from 'styled-components';

export const FilterContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const Label = styled.label`
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: #4CAF50;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;
  background-color: white;

  &:focus {
    outline: none;
    border-color: #4CAF50;
  }
`;