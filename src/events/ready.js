const client = require(`../../index`)

client.on("ready", async () => {
    console.info(`[SYSTEM] ${client.user.username} ONLINE`);
    client.user.setActivity({
      name: `SAI ON TOP BABY..!!`,
      type: "LISTENING",
    });

  });