const { JWT_SECRET } = require("../secrets/index")
const jwt = require("jsonwebtoken")

module.exports = function tokenBuilder (user) {
    const payload = {
        subject:user.id,
        username:user.username,
    };
    const options = {
        expiresIn:"1d",
    };
    return jwt.sign(payload, JWT_SECRET, options)
}
