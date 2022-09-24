const Express = require("express");
const app = Express();
app.get("/", async (req, res)=>{
    res.send("Hello sheikh El-Moctar");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log("we are running in port "+ PORT));