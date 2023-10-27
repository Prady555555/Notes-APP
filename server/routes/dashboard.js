const express = require("express");
const router = express.Router();
const dasboardController = require("../controllers/dashboardController");
const {isLoggedIn} = require("../middleware/checkAuth")

router.get("/dashboard",isLoggedIn,dasboardController.dashboard);
router.get("/dashboard/item/:id",isLoggedIn,dasboardController.dashboardViewNote);
router.put("/dashboard/item/:id",isLoggedIn,dasboardController.dashboardUpdateNote);
router.delete("/dashboard/item-delete/:id",isLoggedIn,dasboardController.dashboardDeleteNote);

router.get("/dashboard/add",isLoggedIn,dasboardController.dashboardAddNote);

router.post("/dashboard/add",isLoggedIn,dasboardController.dashboardAddNoteSubmit);





module.exports = router;