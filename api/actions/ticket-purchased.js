import { sendEmail } from '../__utils__/_email';
// import email template required for this route here.
// We only want the one we want to be bundled with this serverless funtion
// Then pass the template into the "sendEmail" function;

/**
 * Orchestrate ticket purchase actions
 *
 * -- send transactional email (with template)
 * -- register user with Mailchimp or something similar
 * -- add user to spreadsheet??
 * -- set up timed email delivery for the day before performance?
 * -- submit eCommerce data to Google Analytics & Mailchimp
 */

export default async (req, res) => {
    try {
        await sendEmail();
        res.status(200).json({
            status: `success`,
        });
    } catch (error) {
        console.log(error);
    }
};
