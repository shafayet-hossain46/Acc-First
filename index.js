const express = require('express');
const cors = require("cors");
const app = express();
const userRouter = require('./Routes/v1/users.routes.js');
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/v1/user/all", userRouter);


app.all('*', (req, res)=>{
    res.send("No route found")
})

app.listen(port, () => {
  console.log("Listening to port ", port);
}); 