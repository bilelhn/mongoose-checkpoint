import express, { Router } from 'express'; //import express module
import  dotenv from 'dotenv'; //import dotenv
import mongoose from 'mongoose';  //import mongoose
import personRouter from './routers/personRouter.js';

const app = express(); // express function

dotenv.config();  // use dotenv

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((error) => {
        console.log('Failed to connect to the database:', error);
    });



app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/persons', personRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
