import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
    <Auth0Provider
        domain="dev-bd39pa1e.us.auth0.com"
        clientId="m2evhdh1LE4uY4NQNsbDnrmr6ddSnSeP"
        redirectUri={window.location.origin}
    >
        <App />
    </Auth0Provider>,
    document.getElementById('root')
);