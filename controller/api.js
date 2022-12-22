
const fileAnalyses = (req, res) => {
  const { originalname: name, mimetype: type, size } = req.file;
  res.json({name, type, size})
};

module.exports = fileAnalyses;