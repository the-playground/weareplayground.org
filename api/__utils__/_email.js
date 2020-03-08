const nodemailer = require(`nodemailer`);
/**
 *
 */

/**
 *
 */
const getProductionEnvConfig = () => ({
    service: `Postmark`,
    auth: {
        user: process.env.POSTMARK_USER,
        pass: process.env.POSTMARK_PASS,
    },
});

/**
 *
 */
const getDevelopmentEnvConfig = () => ({
    host: `smtp.mailtrap.io`,
    port: 2525,
    auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
    },
});

/**
 *
 */
const transportConfig = process.env.NODE_ENV === `production` ? getProductionEnvConfig() : getDevelopmentEnvConfig();

/**
 *
 */
const transport = nodemailer.createTransport(transportConfig);

/**
 *
 * @param {*} param0
 */
const getHydratedPlainText = ({ templateName, data }) => {};

/**
 *
 * @param {*} templateName
 * @param {*} data
 */
const getHydratedEmailTemplate = ({ templateName, data }) => {};

/**
 *
 * @param {*} param0
 */
const composeEmail = () => ({
    from: `chris@theplaygroundtheatre.org`,
    to: `chahn1692@gmail.com`,
    subject: `This is a test`,
    text: `hello world`, // getHydratedPlainText( data ),
    html: `<h1>Hello world</h1>`, // getHydratedEmailTemplate( data )
});

/**
 *
 */
export const sendEmail = async () => {
    const email = composeEmail();

    console.log(transportConfig);

    try {
        const status = await transport.sendMail(email);

        console.log(status);
    } catch (error) {
        console.log(error);
    }
};
