const tmi = require ("tmi.js");

const client = new tmi.Client({
    channels: ['GamingGuruGhalileo']
});

client.connect();

client.on("Welcome to the ChizzAT",(GamingGuruGhalileo, Gamer, message, self)=>{
    console.log(`${tags['display-name']}: ${message}`)
})