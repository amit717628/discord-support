const { Client,Intents, Collection } = require("discord.js");

const client = new Client({
    intents: 3276799,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
const { Database } = require('quickmongo');
client.db = new Database(client.config.DB);
// Handler
require("./src/handler")(client);
  
client.login(client.config.token);