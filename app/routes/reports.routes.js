const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const upload = require("../middlewares/upload.middleware");
const controller = require("../controllers/reports.controller");

router.post(
    "/upload",
    auth,
    upload.single("file"),
    controller.uploadReport
);

router.get("/", auth, controller.getReports);
router.post("/share", auth, controller.shareReport);

module.exports = router;
