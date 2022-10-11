import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import DownloadsList from 'components/DownloadsList';

const App = (): JSX.Element => {
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:4000/',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div style={{ width: '400px' }}>
        <DownloadsList />
      </div>
    </ApolloProvider>
  );
};

export default App;
