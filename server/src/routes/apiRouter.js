const express = require('express');

const router = express.Router();

router.use(require("./decorRouter"));
router.use(require("./serviceRouter"));

module.exports = router;