const express=require("express")
const dotenv=require("dotenv");
const router = require("./routes/booksRoute");

const route = Router


const app=express();

dotenv.config();
//middleware
app.use(express.json())


// route
app.get("/", (req, res)=> {
    res.send("<h1>Welcome to our b shorp<h1>")
})

// get all results
app.get("/books", (req, res)=>{
    res.json(books)
})

const PORT = process.env.PORT ||5000

app.listen(PORT, () => 
console.log(`server is running on ${PORT}`)
)



