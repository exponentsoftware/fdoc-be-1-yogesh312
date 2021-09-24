const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const listController = require("../controllers/listController");




router.get("/",  catchErrors(listController.getAllList));
router.post("/",  catchErrors(listController.createList));
router.get("/:id",  catchErrors(listController.getList));
router.put("/:id", catchErrors(listController.updateList));
router.delete("/:id", catchErrors(listController.deleteList))

module.exports = router;
