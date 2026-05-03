import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://aniketkolhal28_db_user:751785@cluster0.1utczf0.mongodb.net/Food_Delivery_Web_App_MERN').then(()=>console.log(`DB Connected`));
}