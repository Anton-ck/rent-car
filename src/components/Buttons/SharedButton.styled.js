import styled from '@emotion/styled';

export const SharedButtonStyled = styled.button`
  padding: 12px 50px;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  cursor: pointer;
  outline: none;
  margin-bottom: 0;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #0b44cd;
  }
`;
