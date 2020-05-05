module.exports = (req, res) => {
  res.json({
    url: req.url,
    query: req.query,
  })
}
