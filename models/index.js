const User = require('./User');
User.findAll({attributes:['username','email','password']})
module.exports = { User };
