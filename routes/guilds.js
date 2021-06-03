import data from '../config/connectToDataBase.js';

async function getItem(item) {
    const serverData = await (await data.serverData.doc(item).get(item)).data()[
        'item'
    ];

    return await serverData;
}

function setItem(item, value) {
    data.serverData.doc(item).set({
        item: value,
    });
}

function createServer(guildName, guildID, defaultPrefix) {
    data.guildData.doc(guildName).set({});
}

export { getItem, setItem };
