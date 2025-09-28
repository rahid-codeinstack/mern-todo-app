const createApp =require("./App.js");
const dotenv = require("dotenv");
const connectDb = require("./src/config/db.js");
dotenv.config();
const app = createApp();
const portno = process.env.PORTNO || 5000;
app.listen(portno,()=>{
     console.log('server running on port no ' + portno || 5000)
})
connectDb();
