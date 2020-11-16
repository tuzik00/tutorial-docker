const express = require('express');
const next = require('next');


const app = next({dev: true});
const handle = app.getRequestHandler();

const port = 8000;

const routes = [
    {path: '/', page: '/'},
    {path: '/articles/:id', page: '/articles/item'},
    {path: '/articles', page: '/articles'},
];


app.prepare()
    .then(() => {
        const server = express();

        routes.forEach((item) => {
            server.get(item.path, async (req, res) => {
                await app.render(req, res, item.page, req.params);
            })
        });

        server.all('*', (req, res) => {
            handle(req, res);
        });

        server.listen(port, (err) => {
            if (err) {
                throw err
            }

            console.log(`> Ready on http://localhost:${port}`)
        });

        return server;
    });