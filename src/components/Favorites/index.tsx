/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';

import { useFormContext } from 'react-hook-form';

import Layout from 'components/Layout';
import RequiredMessage from 'components/RequiredMessage';
import FormInput from 'components/FormInput';

import { List, ListItem } from './styles';

import { colors } from './consts';

const { Wrapper, Header, Body, ColumnWrapper } = Layout;

const Favorites: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { favoriteBook: favoriteBookError, colors: colorsErrors } = errors;

  return (
    <Wrapper>
      <Header>
        <h3>Favorites</h3>
      </Header>
      <Body>
        <ColumnWrapper>
          <FormInput
            type="text"
            id="favoriteBook"
            label="favorite book*"
            register={register}
            required
            error={favoriteBookError}
          />
        </ColumnWrapper>

        <ColumnWrapper>
          <h4>Favorite Colors*</h4>
          <List>
            {colors.map(({ name, id }) => {
              return (
                <ListItem key={id}>
                  <input
                    type="checkbox"
                    id={id}
                    value={name}
                    {...register('colors', { required: true })}
                  />
                  <label htmlFor={name}>{name}</label>
                </ListItem>
              );
            })}
          </List>
          <RequiredMessage showMessage={colorsErrors} />
        </ColumnWrapper>
      </Body>
    </Wrapper>
  );
};

export default Favorites;
