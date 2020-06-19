const fs = require('fs');


module.exports = function (fullPath){
    fs.readFile(fullPath, (err, data) => {
       if (err) throw err;
       process.stdout.write(data)
       process.stdout.write ('\nprompt > ')
 })
}
