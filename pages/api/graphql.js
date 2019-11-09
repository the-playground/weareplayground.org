import { ApolloServer, gql } from 'apollo-server-micro'

export default (req, res) => {

	res.status(200).json({
		test: 'Hello Playground'
	})

}
