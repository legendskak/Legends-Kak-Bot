import data from '../config/connectToDataBase.js';

async function getsetItem(setItem) {
    const serverData = await (await data.serverData.doc(setItem).get(setItem)).data()[
        'item'
    ];
    return await serverData;
}

function setsetItem(setItem, value) {
    data.serverData.doc(setItem).set({
        item: value,
    });
}

function createServer(guildName, guildID, defaultPrefix) {
    data.guildData.doc(guildName).set({});
}

export { getsetItem, setsetItem };
