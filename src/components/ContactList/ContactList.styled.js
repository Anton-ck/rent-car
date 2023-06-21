import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 25px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ConctactListItem = styled.li`
  display: flex;
  gap: 10px;
  justify-content: right;

  font-size: 20px;
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 15px;
  border: none;
  background-color: lightgreen;
  transition: background-color 250ms linear;
  &:hover,
  &:focus {
    color: #000;
    background-color: red;
    font-weight: 600;
  }
`;
