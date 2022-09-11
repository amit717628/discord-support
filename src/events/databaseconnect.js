const client = require(`../../index`)

client.on("ready", async () => {
    client.db.on("ready", async ()=>{
        return console.log("[DATABASE] connected")
        })
        //
       
           
})