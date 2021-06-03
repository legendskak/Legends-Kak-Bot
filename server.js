import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import fetch from 'node-fetch';

//files
// import connectToDatabase from './config/connectToDataBase.js';

const port = process.env.PORT;
express()
    .get('/', (req, res) => {
        res.sendStatus(200);
    })

    .listen(port, () => console.log(`Server started on port: ${port}`));
// connectToDatabase();
import './bot.js';

if (!process.env.ISDEV) {
    let i = 0;
    setInterval(async () => {
        await fetch('https://legends-kak-bot.herokuapp.com/');
        console.log(`PING! (${i})`);
        i++;
    }, 1740000);
}
