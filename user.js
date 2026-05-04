const mongoose =require("mangoose");

const userSchema = new mangoose.Schema({
    name: String,
    email: String,
    passwordHash: String,
    role: String
});

module.exports=mangoose.model("user", userSchema);


