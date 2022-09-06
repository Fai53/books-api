const {Router} =require("express")
const {getBooks, deleteBook }=require("../controllers/booksControllers")
const auth = require("../middleweres/books.auth")


const router=Router()

router.route("/books").get(auth, getBooks);





module.exports=router