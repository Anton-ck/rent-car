import styled from '@emotion/styled';
import { Field, Form, ErrorMessage } from 'formik';

export const FormContact = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 0 auto;
  align-items: center;
  gap: 10px;
  width: 300px;
  border: 1px solid black;
  border-radius: 15px;
`;

export const FormInput = styled(Field)`
  padding: 0;
  margin: 0;
  width: 250px;
  font-size: 24px;
`;

export const FormInputLabel = styled.label`
  padding: 0;
  margin: 0;
  width: 250px;
  font-size: 16px;
  
`;

export const ErrMessage = styled(ErrorMessage)`
  max-width: 250px;
  color: red;
`;

export const SubmitButton = styled.button`
  background-color: transparent;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid green;
  cursor: pointer;
  transition: background-color 300ms linear;

  &:hover,
  &:focus {
    background-color: lightgreen;
    color: #000;
    font-weight: 600;
  }
`;
