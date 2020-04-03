// const os = require('os');
// const a = require('func.js');
// const b = require('./func/');
const fs = require('fs');
const http = require('http');
const moment = require('moment');

console.log(moment());

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World!');
        res.end();
    }
    if (req.url === '/api/users') {
        fs.readFile('db.json', 'utf-8', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.write(data);
                res.end();
            }
        });
    }
});

server.listen(3000);
server.on('connection', (socket) => {
    console.log('New connection!');
});
// const users = [{name: 'Ann', age: 20}];
//
// fs.writeFile('db.json', JSON.stringify(users), (err) => {
//     if (err) {
//         console.log(err);
//     }
// });
//
// fs.readFile('db.json', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         const list = JSON.parse(data);
//         list.push({name: 'Vasya', age: 25});
//
//         fs.writeFile('db.json', JSON.stringify(list), (err) => {
//             if (err) {
//                 console.log(err);
//             }
//         });
//     }
// });

// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.type());
// console.log(a(10));
// console.log(b(10));
