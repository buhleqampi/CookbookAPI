const userSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    username: { type: String, required: true },
    emailAddres: { type: String, required: true },
    password: { type: String, required: true },
    contactDetails: { type: String, required: true },
    

})