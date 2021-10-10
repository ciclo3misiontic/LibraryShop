const mongoose = require ("mongoose");


const profilesSchema = mongoose.Schema ({
    name: String,
    lastname: String,
    id: Number,
    phone: Number,
    email: String,
    username: String,
    password: String
})

module.exports = mongoose.model("Profiles", profilesSchema);