/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';

import { UseFormRegister } from 'react-hook-form';

import { RadioButtonWrapper } from './styles';

type RadioButtonProps = {
  id: string;
  label: string;
  radioValue: string;
  required?: boolean;
  register: UseFormRegister<any>;
};

const RadioButton: FC<RadioButtonProps> = ({
  id,
  label,
  radioValue,
  register,
  required,
}: RadioButtonProps) => {
  return (
    <RadioButtonWrapper>
      <label htmlFor={id}>
        <input
          id={id}
          type="radio"
          value={radioValue}
          {...register(id, { required })}
        />
        {label}
      </label>
    </RadioButtonWrapper>
  );
};

RadioButton.defaultProps = {
  required: false,
};

export default RadioButton;
