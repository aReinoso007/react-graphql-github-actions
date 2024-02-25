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



---

Objective:

- Configure tests and GitHub Action to run tests on code pushes to main branch

---

Instructions:

1. Utilize the GraphQL Rick and Morty Application covered in the GraphQL lesson 
2. Configure a new `simple workflow` action in the `Actions` tab of the GitHub Repository
3. Add the configurations for running the tests

Hints:

* Make sure to add the correct node version
* the scripts are the ones listed in the `pack-age.json`
* If you are having trouble understanding testing with Jest, here are the [docs](https://jestjs.io/docs/tutorial-react)
- All test files must have a `.test.jsx` extension

Solution:

Since this project was using using `create-react-app`  it already ships with Jest so we only need to add this library for test rendering:

```bash
npm install --save-dev react-test-renderer
```

Configurations required for running Jest with React

# CD deploy to Vercel
1. Create a new GitGub Actions
```yaml
name: Vercel Preview Deployment
env:
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
on:
  push:
    branches-ignore:
      - main
jobs:
  Deploy-Preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Vercel CLI
        run: npm install --global vercel@latest
      - name: Pull Vercel Environment Information
        run: vercel pull --yes --environment=preview --token=${{ secrets.VERCEL_TOKEN }}
      - name: Build Project Artifacts
        run: vercel build --token=${{ secrets.VERCEL_TOKEN }}
      - name: Deploy Project Artifacts to Vercel
        run: vercel deploy --prebuilt --token=${{ secrets.VERCEL_TOKEN }}
```
