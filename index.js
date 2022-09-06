const express=require("express")
const dotenv=require("dotenv");
const router = require("./routes/booksRoute");
const logger =require("./middleweres/books.logge")
const books = require("./books")




const app=express();

dotenv.config();
//middleware
app.use(express.json())
app.use(logger)

// route
app.get("/", (req, res)=> {
    res.send("<h1>Welcome to our b shorp<h1>")
})

// get all results
app.get("/books", (req, res)=>{
    res.json(books)
})

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
console.log(`server is running on ${PORT}`)
})



