

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://vakarXmusic:<db_password>@cluster0.mjyuv1j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/FnVdS5bJWD",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "vakar",
      password: "vakar2000",
      host: "5.39.63.207",
      port:  8262,
      secure: false
    }
  ]
}
