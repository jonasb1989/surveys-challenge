import React, { FC } from 'react';

import { useFormContext } from 'react-hook-form';

import Layout from 'components/Layout';

import { SummaryTable, TableHeader, TableData } from './styles';

const { Wrapper, Header, Body } = Layout;

const Summary: FC = () => {
  const { getValues } = useFormContext();
  const values = getValues();
  const { age, colors, email, favoriteBook, gender, name } = values;

  return (
    <Wrapper>
      <Header>
        <h4>Summary</h4>
      </Header>
      <Body>
        <SummaryTable>
          <thead>
            <tr>
              <TableHeader>Nome</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>Gender</TableHeader>
              <TableHeader>Age</TableHeader>
              <TableHeader>Favorite Book</TableHeader>
              <TableHeader>Favorite Colors</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableData>{name}</TableData>
              <TableData>{email}</TableData>
              <TableData>{gender}</TableData>
              <TableData>{age.value}</TableData>
              <TableData>{favoriteBook}</TableData>
              <TableData>{colors.join(', ')}</TableData>
            </tr>
          </tbody>
        </SummaryTable>
      </Body>
    </Wrapper>
  );
};

export default Summary;
