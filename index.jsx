// index.jsx
import React from 'react';
import { StytchB2BProvider } from '@stytch/react/b2b';
import { StytchB2BUIClient } from '@stytch/vanilla-js/b2b';

const stytch = new StytchB2BUIClient("YOUR-PUBLIC-TOKEN");


// Wrap your App in the StytchProvider
ReactDOM.render(
  <StytchB2BProvider stytch={stytch}>
    <App />
  </StytchB2BProvider>,
  document.getElementById('root'),
);