const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const http = require('axios');

const app = next({ dev });
const handle = app.getRequestHandler();
const fs = require('fs');

app.prepare().then(() => {
    const server = express();

    server.get('/profile/:slug', (req, res) => {

        fs.readFile('storage/template/default.html', 'utf8', function (err, data) {
            http.get('http://localhost:1337/temps/slug/' + req.params.slug).then(result => result.data).then(result => {
                // res.writeHead(200, {'Content-Type': 'text/html'});
                let parser = {
                    cover: result.cover.url,
                    profile: result.profile.url,
                    fullname: [result.firstName,result.middleName,result.lastName].join(' '),
                    phone: result.phone,
                    email: result.email
                }
                data = data.replace(/{{\w+}}/g,(val) => {
                    return parser[val.replace('{{','').replace('}}','')] || '';
                })
                res.send(data)
            }).catch(err => {
                res.send(err)
            })
        })
    })

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('Server ready on http://localhost:3000');
    });
});