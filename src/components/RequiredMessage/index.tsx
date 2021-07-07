import React, { FC } from 'react';

import { ErrorMessage } from './styles';

type RequiredMessageProps = {
  showMessage: boolean;
};

const RequiredMessage: FC<RequiredMessageProps> = ({
  showMessage,
}: RequiredMessageProps) => {
  return <>{showMessage && <ErrorMessage>Field Required</ErrorMessage>}</>;
};

export default RequiredMessage;
