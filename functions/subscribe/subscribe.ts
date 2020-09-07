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

    const formData = JSON.parse(event.body!);

    const result = await client
        .createUpdateSubscriber(formData)
        .then((response: any) => response.json())
        .catch((error: any) => console.log(error));

    callback(null, {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(result),
    });
};
