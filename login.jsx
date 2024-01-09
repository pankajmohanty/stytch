// login.jsx
import React from 'react';
import { StytchB2B } from '@stytch/react/b2b';
const Login = () => {
              
  const config = {
  "products": [
    "oauth",
    "emailMagicLinks",
    "passwords"
  ],
  "authFlowType": "Organization",
  "sessionOptions": {
    "sessionDurationMinutes": 60
  },
  "oauthOptions": {
    "providers": [
      "google",
      "microsoft"
    ],
    "loginRedirectURL": "https://www.authkit.dev",
    "signupRedirectURL": "https://www.authkit.dev"
  },
  "emailMagicLinksOptions": {
    "loginRedirectURL": "https://www.authkit.dev",
    "signupRedirectURL": "https://www.authkit.dev"
  },
  "passwordOptions": {
    "loginRedirectURL": "https://www.authkit.dev",
    "resetPasswordRedirectURL": "https://www.authkit.dev"
  }
};
  const styles = {
  "container": {
    "backgroundColor": "#FFFFFF",
    "borderColor": "#ADBCC5",
    "borderRadius": "8px",
    "width": "400px"
  },
  "colors": {
    "primary": "#19303D",
    "secondary": "#5C727D",
    "success": "#0C5A56",
    "error": "#8B1214"
  },
  "buttons": {
    "primary": {
      "backgroundColor": "#19303D",
      "textColor": "#FFFFFF",
      "borderColor": "#19303D",
      "borderRadius": "4px"
    },
    "secondary": {
      "backgroundColor": "#FFFFFF",
      "textColor": "#19303D",
      "borderColor": "#19303D",
      "borderRadius": "4px"
    }
  },
  "fontFamily": "Arial",
  "hideHeaderText": false,
  "logo": {
    "logoImageUrl": ""
  }
}
                            
  return <StytchB2B config={config} styles={styles} />;
}
              
export default Login;