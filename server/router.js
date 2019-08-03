const router = require('express').Router();

router.route('/products/all')
  .all((req, res) => {
    res.redirect("http://localhost:4001" + req.url);
  });

router.route('/reviews/:id')
  .all((req, res) => {
    res.redirect("http://localhost:4002" + req.url);
  });

module.exports = router;