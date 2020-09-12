exports.getAllBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Show all bootcamps' });
};
