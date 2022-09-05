function logger(req, res, next){
    console.log(`${req.method} ${req.originalur1} ${req.statusCode}`);

    next();
}
module.exports=logger