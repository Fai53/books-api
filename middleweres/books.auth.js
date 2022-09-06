function auth(req, res, next) {
    let isverified = true;
    if (isverified) {
        crossOriginIsolated.log("added successfully")

        next()
    } else {
        console.log("not authorised")
        throw error;
    }
}
module.exports=auth