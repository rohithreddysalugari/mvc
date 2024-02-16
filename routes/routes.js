

let registeruser=require("../components/component")


let router=express.Router()

router.get("/register",registeruser)

module.exports=router