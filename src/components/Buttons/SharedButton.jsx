import { SharedButtonStyled } from './SharedButton.styled';

export const SharedButton = ({ textButton, onClick, widthButton }) => {
  return (
    <SharedButtonStyled onClick={onClick} style={{ width: widthButton }}>
      {textButton}
    </SharedButtonStyled>
  );
};
