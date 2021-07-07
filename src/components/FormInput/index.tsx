/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { UseFormRegister, FieldErrors } from 'react-hook-form';

import RequiredMessage from 'components/RequiredMessage';

import { GroupContainer, FormInputContainer, FormInputLabel } from './styles';

type FormInputProps = {
  type: string;
  id: string;
  label: string;
  required?: boolean;
  error?: FieldErrors<any>;
  register: UseFormRegister<any>;
};

const FormInput: React.FC<FormInputProps> = ({
  type,
  id,
  label,
  register,
  required,
  error,
}: FormInputProps) => (
  <GroupContainer>
    <FormInputContainer type={type} id={id} {...register(id, { required })} />
    <FormInputLabel>{label}</FormInputLabel>
    <RequiredMessage showMessage={!!error} />
  </GroupContainer>
);

FormInput.defaultProps = {
  error: undefined,
  required: false,
};

export default FormInput;
