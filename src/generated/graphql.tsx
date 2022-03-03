import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AuthToken = {
  __typename?: "AuthToken";
  token: Scalars["String"];
};

export type Event = {
  __typename?: "Event";
  category: Scalars["String"];
  description: Scalars["String"];
  endDate: Scalars["DateTime"];
  headerImage: Scalars["String"];
  id: Scalars["String"];
  isPublic: Scalars["Boolean"];
  name: Scalars["String"];
  organizedBy: Hub;
  profile: Profile;
  speaker: Scalars["String"];
  startDate: Scalars["DateTime"];
  status: Scalars["String"];
  time: Scalars["DateTime"];
  venue: Scalars["String"];
};

export type EventCreateInput = {
  category: Scalars["String"];
  description: Scalars["String"];
  endDate: Scalars["DateTime"];
  eventTime: Scalars["DateTime"];
  headerImage: Scalars["String"];
  isPublic: Scalars["Boolean"];
  name: Scalars["String"];
  speaker: Scalars["String"];
  startDate: Scalars["DateTime"];
  venue: Scalars["String"];
};

export type Hub = {
  __typename?: "Hub";
  description: Scalars["String"];
  name: Scalars["String"];
  users: Array<User>;
};

export type Mutation = {
  __typename?: "Mutation";
  Login: AuthToken;
  RegiserUser: Scalars["Boolean"];
  createEvent: Event;
};

export type MutationLoginArgs = {
  password: Scalars["String"];
  username: Scalars["String"];
};

export type MutationRegiserUserArgs = {
  data: RegisterInput;
};

export type MutationCreateEventArgs = {
  data: EventCreateInput;
};

export type Profile = {
  __typename?: "Profile";
  bio: Scalars["String"];
  email: Scalars["String"];
  hub: Hub;
  user: Array<User>;
};

export type Query = {
  __typename?: "Query";
  getPersonalEvents: Array<Event>;
  getPublicEvents: Array<Event>;
  hello: Scalars["String"];
  private: Scalars["String"];
};

export type RegisterInput = {
  bio?: InputMaybe<Scalars["String"]>;
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

export type User = {
  __typename?: "User";
  profile: Array<Profile>;
  role: Scalars["String"];
  username: Scalars["String"];
};

export type HelloQueryVariables = Exact<{ [key: string]: never }>;

export type HelloQuery = { __typename?: "Query"; hello: string };

export const HelloDocument = gql`
  query Hello {
    hello
  }
`;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(
  baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<HelloQuery, HelloQueryVariables>(
    HelloDocument,
    options
  );
}
export function useHelloLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(
    HelloDocument,
    options
  );
}
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<
  HelloQuery,
  HelloQueryVariables
>;
