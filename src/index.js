import express from 'express';
import http from 'http';

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/json', (req, res) => {
    res.json({ 'message' : 'Hello World' });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000'); 
});

