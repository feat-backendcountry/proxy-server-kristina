const router = require('express').Router();


router.route('/search')
  .all((req, res) => {
    res.redirect("http://localhost:4001/api" + req.url);
  });

router.route('/reviews')
  .all((req, res) => {
    console.log(req.url);
    res.redirect("http://localhost:4002/api" + req.url);
  });

router.route('/reviews/:id')
.all((req, res) => {
    res.redirect("http://localhost:4003/api" + req.url)
  });

module.exports = router;