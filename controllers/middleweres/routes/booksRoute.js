const {Router} =require("../books")
const {getBooks}=require("../controllers/booksControllers")

const route=Router()

Router.route("/books").grt(getBooks);




module.exports=router