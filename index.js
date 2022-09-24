const Express = require("express");
const app = Express();
const { db } = require("./util/admin");
app.get("/", fetchData);
// fetch data from firebase
async function fetchData(req, res){
    const users = db.collection("users");
    try {
        users.get().then(snapshot=> {
            const data = snapshot.docs.map(doc=> ({
                id: doc.id,
                first_name: doc.get('name'), 
                last_name: doc.get('lastname')
            }));
            return res.status(201).send(data);
        });
    } catch (error) {
        return res.status(500).send({general: "there are error, try again."});
    }
}
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log("we are running in port "+ PORT));