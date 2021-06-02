import config from 'config';

//!Elad
export default function () {
    //firebase stuff
    console.log('firebase stuff');

    //this is how u use config
    console.log(`config var: ${config.get('var')}`);

    //we need to store the prefix
}
