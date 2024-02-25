# Getting Started with React - GrapQL with Apollo Client
First let's start installing apollo client and graphQL
```bash
    npm install @apollo/client graphql
```

## Init `ApolloClient`
Let's go to main.tsx and create a new apolloClient to consume graphqled data
and use an in memory cache. To use GraphQL we need to wrap our App in an ApolloProvider and define a client.

```typescript
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
```
## URQL 
To define graphql queries


## Mutations
Mutations is for changing our data


## Adding testing with JEST
Since we created this project using `create-react-app` and shipts with Jest, this is the only command we need for running our tests
```bash
npm install --save-dev react-test-renderer

```