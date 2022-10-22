const path = require('path');

exports.root = (req, res) => {
  res.status(200).sendFile(path.join(__dirname + "/mainFunc/root.html"));
};

exports.search = (req, res) => {
  console.log(req.body.search); // 검색할 내용
};