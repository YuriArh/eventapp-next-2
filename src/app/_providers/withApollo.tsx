import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { authLib } from "~/entities/session";
import { API_URL } from "~/shared/config/apiConfig";

const httpLink = createHttpLink({
  uri: API_URL,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = authLib.getToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

/**
 * Инициализация инстанса клиента
 * @see https://www.apollographql.com/docs/react/networking/authentication/
 */
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  // connectToDevTools: true,
});

/**
 * @hoc Инициализация подключения apollo для работы с API
 */
export function withApollo({ children }: { children: JSX.Element }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
