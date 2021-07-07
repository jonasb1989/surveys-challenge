import React, { FC } from 'react';

import Layout from 'components/Layout';

import { PresentationMessage } from './styles';

const { Wrapper } = Layout;

type PresentationProps = {
  isSubimt?: boolean;
};

const Presentation: FC<PresentationProps> = ({
  isSubimt,
}: PresentationProps) => {
  const message = isSubimt
    ? 'Tanks for your time!'
    : 'Hi, dou you have time to answer a few questions?';
  return (
    <Wrapper>
      <PresentationMessage>
        <span>{message}</span>
      </PresentationMessage>
    </Wrapper>
  );
};

Presentation.defaultProps = {
  isSubimt: false,
};

export default Presentation;
