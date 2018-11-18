const express = require('express');
const router = express.Router();
const Regamount =  require("../migrations/RegAmountTargetingFilter");

/* GET home page. */
router.get('/', () => {
  return new Regamount()._apply();
});

module.exports = router;
