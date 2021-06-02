import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

//files
import connectToDatabase from './config/connectToDataBase.js';

const port = process.env.PORT;
express()
    .get('/', (req, res) => {
        res.sendStatus(200);
    })

    .listen(port, () => console.log(`Server started on port: ${port}`));
connectToDatabase();
import './bot.js';

if (!process.env.ISDEV) {
    setInterval(async () => {
        await fetch('https://tatsy-bot.herokuapp.com/');
        console.log('PING!');
    }, 60000);
}
