import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  border: 3px solid #f2f2f2;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px auto 20px;
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  //   background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  //   background-size: 40%;
  //   background-repeat: no-repeat;
  //   background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  padding: 4px auto;

  &:hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Label = styled.span`
  font-size: 10px;
  //   display: flex;
  //   align-items: center;
  //   position: absolute;
  //   width: 10px;
  //   height: 10px;
  //   padding: 5;
  //   overflow: hidden;
  //   clip: rect(0, 0, 0, 0);
  //   white-space: nowrap;
  //   clip-path: inset(50%);
  //   border: 0;
`;
