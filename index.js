import express from "express";
import router from "./routes/index.js";
import mongoose from "mongoose";
const app = express()
const port = 3030
mongoose.connect("mongodb://localhost:27017/diksa_api", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log("Database Connected"));
app.use(express.json());
app.use('/', router);
app.listen(port, () => {
    console.log('Example app listening at http://localhost:' + port)
})