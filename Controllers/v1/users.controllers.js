const fs = require('fs');
let userArr = JSON.parse(fs.readFileSync('data.JSON', 'utf8'));
const path = require('path')



// Random Users
module.exports.getRandomUsers = (req, res) => {
    const randomUser = Math.floor(Math.random() * userArr.length);
    res.send(userArr[randomUser]);
    res.end();
}



// All Users
module.exports.getAllUsers = (req, res) => {
    const size = req.query.size;
    if(size){
        if(size > userArr.length){
            res.send({error: `Limit is crossed!, Your limit should be less than ${userArr.length}`})
        }else{
            res.send(userArr.slice(0, size))
            res.end()
        }  
    }else{
        res.send(userArr)
        res.end()
    }
}



// Save User
module.exports.saveUsers = (req, res) => {
    const newUser = req.body;
    newUser.id = userArr.length+1;
    userArr.push(newUser);
    fs.writeFile('data.JSON', JSON.stringify(userArr), (err)=> { // to send dynamic data you must stringify it.
        if(err){
            res.send("error")
        }else{
            res.send("added")
        }
    });
}


