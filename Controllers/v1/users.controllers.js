const fs = require('fs');
let userArr = JSON.parse(fs.readFileSync('data.JSON', 'utf8'));



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


