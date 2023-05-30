const router = require('express').Router();
const { QuoteController } = require("../controllers")

router.get("/quote", QuoteController.get)
router.get("/quote/:id", QuoteController.getOne)
router.post("/quote", QuoteController.add)

module.exports = router;