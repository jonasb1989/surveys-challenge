import styled from 'styled-components';

export const GroupContainer = styled.div`
  position: relative;
  margin: 30px 0;
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: #fff;
  color: #000;
  font-size: 18px;
  padding: 4px;
  display: block;
  border: none;
  border-radius: 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 25px 0;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`;

export const FormInputLabel = styled.label`
  top: -16px;
  color: #000;
  font-size: 13px;
  font-weight: bold;
  position: absolute;
  pointer-events: none;
  left: 4px;
  padding: 2px 5px;
  display: block;
  background-color: #fff;
  text-transform: capitalize;
  border-radius: 4px;
`;
