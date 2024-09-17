'use client'

import { client } from "@/graphql/apolloClient"
import { ApolloProvider } from "@apollo/client"

export function ApolloProviderWrapper({children} : {children: React.ReactNode}){
  return(
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}