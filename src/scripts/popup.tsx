import React from 'react';
import { createRoot } from 'react-dom/client';
import { DownloadList } from 'arianne-downloader-react-components';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

if (typeof global.browser === 'undefined' && process.env.VENDOR === 'chrome') {
  global.browser = chrome as any;
}

const domContainer = document.querySelector('#root')!;

const root = createRoot(domContainer);
const client = new ApolloClient({
  uri: 'http://127.0.0.1:4000/',
  cache: new InMemoryCache(),
});

root.render(
  <ApolloProvider client={client}>
    <div style={{ width: '400px', margin: '16px' }}>
      <DownloadList />
    </div>
  </ApolloProvider>
);
