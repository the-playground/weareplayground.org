import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { PrismicLink } from 'apollo-link-prismic'

import Head from 'next/head'
import { ApolloProvider } from '@apollo/react-hooks'
import fetch from 'isomorphic-unfetch'

export function withApollo (PageComponent){

	/**
	 *
	 * @param {object} apolloClient
	 * @param {object} apolloState
	 * @param {object} pageProps
	 */
	const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {

		const client = apolloClient || initApolloClient(apolloState);

		return (
			<ApolloProvider client={client}>
				<PageComponent {...pageProps}/>
			</ApolloProvider>
		)

	}

	/**
	 * Set up SSR for Apollo
	 *
	 * @param ctx
	 */
	WithApollo.getInitialProps = async (ctx) => {

		const { AppTree } = ctx;
		const apolloClient = ( ctx.apolloClient = initApolloClient() )

		let pageProps = {}

		if( PageComponent.getInitialProps ){
			pageProps = await PageComponent.getInitialProps(ctx)
		}

		// If on server
		if( typeof window === 'undefined' ){

			if( ctx.res && ctx.res.finished ){
				return pageProps
			}

			try {

				const { getDataFromTree } = await import('@apollo/react-ssr')

				await getDataFromTree(
					<AppTree
						pageProps={{
							...pageProps,
							apolloClient
						}}
					/>
				)

			} catch (error) {
				console.log(error)
			}

			Head.rewind();

		}

		const apolloState = apolloClient.cache.extract();

		return {
			...pageProps,
			apolloState
		}

	}

	return WithApollo

}

const initApolloClient = (initialState = {}) => {

	const ssrMode = typeof window === 'undefined';

	const cache = new InMemoryCache().restore(initialState);

	const apiKey = process.env.PRISMIC_API_KEY;

	const link = new PrismicLink({
		uri: process.env.PRISMIC_GRAPHQL_API_URL,
		accessToken: apiKey,
		fetch
	})

	const client = new ApolloClient({
		ssrMode,
		link,
		cache
	})

	return client;

}
