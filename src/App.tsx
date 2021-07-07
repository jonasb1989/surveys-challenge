import React, { FC, useState } from 'react';

import Popup from 'reactjs-popup';

import Survey from './components/Survey';

import { GlobalStyle } from './App.styles';

const App: FC = () => {
  const [open, setOpen] = useState(true);
  const closeModal = () => setOpen(false);

  return (
    <div>
      <GlobalStyle />

      <Popup open={open} closeOnDocumentClick={false}>
        <Survey onCloseModal={closeModal} />
      </Popup>
    </div>
  );
};

export default App;
