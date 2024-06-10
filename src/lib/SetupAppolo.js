import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      alert(`GraphQL Error: ${message}`);
    });
  }

  if (networkError) {
    alert(`Network Error: ${networkError.message}`);
  }
});

const EndPoint = new HttpLink({ uri: "https://graphqlzero.almansi.me/api" });

const Client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, EndPoint]),
});

export default Client;
