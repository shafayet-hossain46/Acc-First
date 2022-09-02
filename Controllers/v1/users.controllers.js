const fs = require('fs');
module.exports.getAllUsers = (req, res) => {
    const size = req.query.size;
    let arr = JSON.parse(fs.readFileSync('data.JSON', 'utf8'));
    if(size){
        if(size > arr.length){
            res.send({error: `Limit is crossed!, Your limit should be less than ${arr.length}`})
        }else{
            res.send(arr.slice(0, size))
            res.end()
        }  
    }else{
        res.send(arr)
        res.end()
    }
}
