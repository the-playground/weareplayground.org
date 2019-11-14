export default async (req, res) => {
	res.status(200).json({
		status: 'audition-requested',
	});
};
