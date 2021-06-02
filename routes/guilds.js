const items = {
  guildID: 'guildID',
  guildName: 'Server Name',
  prefix: '!',
};

//!ELAD
function getItem(item) {
  return items[item];
}

function setItem(item, newValue) {
  items[item] = newValue;
}

export { getItem, setItem };
