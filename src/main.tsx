import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider  } from "@apollo/client";

export const client = new ApolloClient({
  uri: `${import.meta.env.VITE_BASE_URL_GRAPHQL}`, // Replace with your GraphQL server endpoint
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}> 
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
);
