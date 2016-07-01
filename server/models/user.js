var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// module.exports = mongoose.model('User', {
//   fname: String,
//   lname: String,
//   uname: String,
//   password: String
// });

// ==================================================================

// Create User Schema
var UserSchema = mongoose.Schema({
	fname: {
        type: String,
        index: true
    },
    lname: {
        type: String,
        index: true
    },
    uname: {
		type: String,
		index:true
	},
	password: {
		type: String
	}
});



// Export the model schema
var User = module.exports = mongoose.model('User', UserSchema);

// =======================================================================

// // Export the model schema
// var User = module.exports = mongoose.model('User', UserSchema);

// module.exports.createUser = function(newUser, callback){
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash(newUser.password, salt, function(err, hash) {
//             newUser.password = hash;
//             newUser.save(callback);
//         });
//     });
// }

// module.exports.getUserByUname = function(uname, callback){
//     var query = {uname: uname};
//     User.findOne(query, callback);
// }

// module.exports.getUserById = function(id, callback){
//     User.findById(id, callback);
// }

// =======================================================================