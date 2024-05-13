import mongoose from "mongoose";
import { config } from "dotenv";
config();

export async function connectToDb(){
    await mongoose.connect(process.env.MONGODB_URL)
    .catch((err) => {
        console.log(err);
        throw new Error("Can't connect to Database")
    });
}

export async function disconnectFromDb(){
    await mongoose.disconnect()
    .catch((err)=> {
        console.log(err);
        throw new Error("Can't disconnect from Database")
    });
}
export const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
};

