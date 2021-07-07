/* eslint-disable @typescript-eslint/no-empty-function */
import React, { MouseEvent, ReactNode } from 'react';

import { ButtonWrapper } from './styles';

type ButtonProps = {
  children: ReactNode;
  isDisabled?: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  isDisabled,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonWrapper disabled={isDisabled} onClick={onClick} type="button">
      {children}
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  isDisabled: false,
};

export default Button;
