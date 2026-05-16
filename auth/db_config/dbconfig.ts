import mongoose from "mongoose"
export default async function connectToDB() {
    try{
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        connection.on("connected", () => {
            console.log("Connected to MongoDB successfully!")
        })
        connection.on("error", (err) => {
            console.log("Error connecting to MongoDB:", err)
        })
    }
    catch(err){
        console.error("Error connecting to MongoDB:", err)
    }
}