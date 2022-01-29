const Professional = require('../models/professional');

const getProfessional = (req, res, next) => {
  const currentPage = 1;
  const perPage = 2;
  let totalItems;
  Professional.find()
    .countDocuments()
    .then(count => {
      totalItems = count;
      return Professional.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage);
    })
    .then(professionals => {
      const [professional] = professionals
      res.status(200).json(professional);
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

module.exports = { getProfessional };