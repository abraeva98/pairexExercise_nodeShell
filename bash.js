process.stdout.write('prompt > ')
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim()
   // process.stdout.write(cmd)
    if (cmd === 'pwd') {
        const pwd = require('./pwd');
        pwd();
    } else if (cmd === 'ls') {
        const ls = require('./ls');
        ls();
    } else if (cmd.slice(0, 3) === 'cat') {
        const cat = require('./cat')
        cat(cmd.slice(4))
    }
});


// const pwd = require('./pwd');
// pwd();

// const ls = require('./ls');
// ls();


// const cat = require('./cat')
// cat()