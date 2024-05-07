const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    emailAddres: { type: String, required: true },
    password: { type: String, required: true },
    contactDetails: { type: String, required: true },
    

})

//Rename the file to userModel