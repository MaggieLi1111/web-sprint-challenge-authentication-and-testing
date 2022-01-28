
module.exports = (req, res, next) =>  {
    if( !req.body.username || !req.body.password ) {
        res.status(422).json({message:"username and password required"})
    } else {
        next()
    }
}