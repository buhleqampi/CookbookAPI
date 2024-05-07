const userSchema = new mongoose.Schema({
    userId: { type: String, required: true }, //Remove this id.
    username: { type: String, required: true },
    emailAddres: { type: String, required: true },
    password: { type: String, required: true },
    contactDetails: { type: String, required: true },
    

})

//Rename the file to userModel