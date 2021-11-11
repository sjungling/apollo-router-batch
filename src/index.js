import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloProvider,
  InMemoryCache,
  ApolloClient,
  HttpLink,
} from "@apollo/client";

import { BatchHttpLink } from "@apollo/client/link/batch-http";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});
const batchHttpLink = new BatchHttpLink({
  uri: "http://localhost:4000/graphql",
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
