import { sendEmail } from '../__utils__/_email';

/**
 * Orchestrate ticket purchase actions
 *
 * -- send transactional email
 * -- register with Mailchimp or something similar
 * -- set up timed email deliver for day before performance
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
