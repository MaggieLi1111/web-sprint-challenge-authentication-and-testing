const { findBy } = require("../users/users-model")

module.exports = async (req, res, next) => {
    try {
        const users = await findBy({username: req.body.username})
        if(users.length) {
            req.user = users[0]
            next()
        } else {
            next({status:401, message:"Invalid Credentials"})
        }
        
    } catch(err){
        next(err)
    }
}