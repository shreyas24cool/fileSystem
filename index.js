import app from "./app.js";
import { connectToDb } from "./utils/dbconnect.js";


const port = 3000

connectToDb()
.then(()=>{
    app.listen(port, ()=>{
        console.log("Connected to Database and Server is Running");
    })
})