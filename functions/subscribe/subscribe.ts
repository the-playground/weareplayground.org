import { APIGatewayProxyEvent, APIGatewayProxyCallback } from 'aws-lambda';

const client = require('drip-nodejs')({
    token: process.env.GATSBY_DRIP_API_KEY,
    accountId: process.env.GATSBY_DRIP_ACCOUNT_ID,
});

exports.handler = async (
    event: APIGatewayProxyEvent,
    context: any,
    callback: APIGatewayProxyCallback
) => {
    console.log(event);
    console.log(process.env.GATSBY_DRIP_API_KEY);

    const formData = JSON.parse(event.body!);

    await client
        .createUpdateSubscriber(formData)
        .then((response: any) => {
            callback(null, {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: response.json(),
            });
        })
        .catch((error: any) => {
            callback(null, {
                statusCode: error,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: '',
            });
            console.log(error);
        });
};
