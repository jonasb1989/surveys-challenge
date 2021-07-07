/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import Select from 'react-select';

import { useFormContext, Controller } from 'react-hook-form';

import Layout from 'components/Layout';
import RequiredMessage from 'components/RequiredMessage';

import RadioButton from 'components/RadioButton';

const ages = Array.from(Array(100).keys()).map(age => ({
  label: age,
  value: age,
}));

const { Wrapper, Header, Body, ColumnWrapper } = Layout;

const Details: FC = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();
  const { gender: genderError, age: ageError } = errors;

  return (
    <Wrapper>
      <Header>
        <h3>Details</h3>
      </Header>
      <Body>
        <ColumnWrapper>
          <h4>Gender*</h4>
          <RadioButton
            id="gender"
            label="male"
            radioValue="male"
            register={register}
            required
          />
          <RadioButton
            id="gender"
            label="female"
            radioValue="female"
            register={register}
            required
          />
          <RequiredMessage showMessage={genderError} />
        </ColumnWrapper>

        <ColumnWrapper>
          <h4>Age*</h4>

          <div style={{ position: 'relative' }}>
            <Controller
              name="age"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Select {...field} options={ages} />}
            />
            <RequiredMessage showMessage={ageError} />
          </div>
        </ColumnWrapper>
      </Body>
    </Wrapper>
  );
};

export default Details;
