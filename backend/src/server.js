const createApp = require('./app.js');
const connectDb = require("./configs/db.js");
const app = createApp();
const PortNo = 5000;
app.listen(PortNo, () => {
     console.log('App listening on port 5000!');
});
connectDb();
