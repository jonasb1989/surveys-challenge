import React, { FC } from 'react';

import { useFormContext } from 'react-hook-form';

import FormInput from 'components/FormInput';
import Layout from 'components/Layout';

const { Wrapper, Header, Body } = Layout;

const Identity: FC = () => {
  const { register } = useFormContext();

  return (
    <Wrapper>
      <Header>
        <h3>Identity</h3>
      </Header>
      <Body>
        <FormInput type="text" id="name" label="name" register={register} />
        <FormInput type="email" id="email" label="email" register={register} />
      </Body>
    </Wrapper>
  );
};

export default Identity;
