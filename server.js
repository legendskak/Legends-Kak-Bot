import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import fetch from 'node-fetch';

//files

const port = process.env.PORT;
express()
    .get('/', (req, res) => {
        res.sendStatus(200);
    })

    .listen(port, () => console.log(`Server started on port: ${port}`));
import './bot.js';

if (process.env.ISDEV === 'false') {
    let i = 0;
    setInterval(async () => {
        await fetch('https://legends-kak-bot.herokuapp.com/');
        console.log(`PING! (${i})`);
        i++;
    }, 1740000);
}
