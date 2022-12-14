const Express = require("express");
const app = Express();
const { db } = require("./util/admin");
app.get("/", fetchData);
function getD(req, res){
    const users = db.collection("users");
    try {
        users.get().then((user)=>{
            const data = user.docs.forEach((us)=> us.id === "second");
            return res.send(data);
        })
    } catch (error) {
        console.log(error);
        return res.send({"error": true})
    }
    
}
// fetch data from firebase
function fetchData(req, res){
    const users = db.collection("users");
    try {
        users.get().then(snapshot=> {
            const data = snapshot.docs.map(doc=> ({
                id: doc.id,
                first_name: doc.get('name'), 
                last_name: doc.get('lastname')
            }));
            console.log(data.length);
            return res.send(data);
        });
    } catch (error) {
        return res.status(500).send({general: "there are error, try again."});
    }
}
async function addToDatabase(){
    const data = {
        name: "yeslem", 
        lastname: "ahmed"
    }
    const usersCollection = await db.collection("users").doc(randomId(5)).create(data);
}
// for (let index = 0; index < 15000; index++) {
//     addToDatabase()
// }
// to get random strings
function randomId(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log("we are running in port "+ PORT));