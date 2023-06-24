import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const Container = styled.div`
  display: flex;
  align-self: center;
`;

export const TextWelcome = styled.p`
  font-family: 'SF Pro Display';
  font-size: 24px;
  letter-spacing: 0.08em;
  margin-right: 12px;
`;

export const TextNickName = styled.span`
  font-family: 'SF Pro Display';
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #ff4500;
`;

export const ExitButton = styled(Button)`
  font-family: 'SF Pro Display';
  transition: padding 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  align-self: center;
  background-color: #ff4500;
  padding: 8px 22px;
  height: 40px;
  &:hover {
    background-color: #ff4545;
    padding: 8px 44px;
  }
`;
