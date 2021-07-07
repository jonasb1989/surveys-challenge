import { createGlobalStyle } from 'styled-components';

import './index.css';

export const GlobalStyle = createGlobalStyle`
.popup-overlay {
  position: relative !important;
}

.popup-content {
  width: 600px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-left: 35px !important;
  font-family: 'Roboto', sans-serif;
}
`;
