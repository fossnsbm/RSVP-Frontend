import ReactDOM from "react-dom";
import App from "./App";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import Login from "./components/login/login";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

// https://stackoverflow.com/questions/63005568/property-setlink-is-missing-in-type-apolloclientnormalizedcacheobject-but

ReactDOM.render(
  <ApolloProvider client={client}>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
