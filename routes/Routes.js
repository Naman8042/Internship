const express = require("express")
const router = express.Router()


const{create,getAll,update,deleteAnimal} = require("../controllers/CRUD")

router.get("/getall",getAll)
router.post("/create",create)
router.patch("/update",update)
router.delete("/delete",deleteAnimal)

module.exports = router