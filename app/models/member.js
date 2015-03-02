/**
 * Created by trevor on 3/1/15.
 */
// app/models/member.js
// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema({
    firstName       :String,
    middleInitial   : String,
    lastName        : String,
    address         : String,
    address2        : String,
    state           : String,
    zip             : Number,
    homePhone       : Number,
    cellPhone       : Number,
    createdDate     : Date,
    modifiedDate    : { type: Date, default: Date.now },
    modifiedBy      : String
});

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Member', memberSchema);