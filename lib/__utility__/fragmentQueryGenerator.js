// https://medium.com/commutatus/whats-going-on-with-the-heuristic-fragment-matcher-in-graphql-apollo-client-e721075e92be
// https://www.apollographql.com/docs/react/data/fragments/

const fetch = require('node-fetch');
const fs = require('fs');

const url = process.env.PRISMIC_GRAPHQL_API_URL;
const key = process.env.PRISMIC_API_KEY;

fetch( `${url}?access_token=${key}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    variables: {},
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
  }),
})
  .then(result => result.json())
  .then(result => {
    // here we're filtering out any type information unrelated to unions or interfaces
    const filteredData = result.data.__schema.types.filter(
      type => type.possibleTypes !== null,
    );
    result.data.__schema.types = filteredData;
    fs.writeFileSync('./fragmentTypes.json', JSON.stringify(result.data), err => {
      if (err) {
        console.error('Error writing fragmentTypes file', err);
      } else {
        console.log('Fragment types successfully extracted!');
      }
    });
  });
