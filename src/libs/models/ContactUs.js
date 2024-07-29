import { Schema, model, models } from "mongoose";

const contactUsSchema = new Schema({
    name: String,
    email: String,
    service: String,
    message: String,
    attachment: String
})

export default models.ContactUs || model('ContactUs', contactUsSchema);