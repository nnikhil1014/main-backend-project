import 'dotenv/config'
import connectDB from "./db/index.js";



connectDB()


/*
import express from 'express'
const app = express()

( async () => {
    try {
        const db = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error', (error) => {
            console.log('ERROR: ', error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        });
    } catch (error) {
        console.error(error)
    }
})()
*/