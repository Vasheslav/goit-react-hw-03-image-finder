import { Buttons } from './Button.styled';

export const Button = ({ onCklick }) => {
  return (
    <Buttons type="button" onClick={() => onCklick()}>
      Load more
    </Buttons>
  );
};
