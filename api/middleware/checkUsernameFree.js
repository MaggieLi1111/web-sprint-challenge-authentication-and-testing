const User = require("../users/users-model")

module.exports = async function checkUsernameFree (req, res, next) {
    try {
        const users = await User.findBy({username: req.body.username})
        if( !users.length ) {
            return next()
        } else {
            next({status:422, message:"username taken"})
        }
    } catch (err) {
        next(err)
    }
}