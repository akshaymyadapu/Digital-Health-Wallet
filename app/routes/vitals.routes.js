const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const controller = require("../controllers/vitals.controller");

router.post("/", auth, controller.addVitals);
router.get("/", auth, controller.getVitals);

module.exports = router;
