import React from 'react'

import {Layout} from '../lib/components/Layout'
import {SEOPageMeta} from '../lib/components/SEO'
import {withApollo} from '../lib/components/Apollo'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const HELLO_QUERY = gql`
	query HelloQuery {
		home_page(lang:"en-us", uid:"home"){
			body{
      			__typename
    		}
		}
	}
`

const HomePage = () => {

	const { data, loading, error } = useQuery( HELLO_QUERY );

	if (loading) return <div />

	console.log(data)

	return (

		<Layout>
			<h1></h1>
			<div hidden id="snipcart" data-api-key={process.env.GATSBY_SNIPCART_API_KEY}></div>

		</Layout>

	)

}

export default withApollo( HomePage );
