import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { client } from './apollo';
import './index.css';
import App from './App';


const WrappedApp = (
    <ApolloProvider client={client} >
      <App />
    </ApolloProvider>
  );
  
  ReactDOM.render(WrappedApp, document.getElementById('root'));