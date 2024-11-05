import express from 'express';
import http from 'http';
import { Server } from 'socket.io'; // Importação correta do socket.io

const app = express();
const server = http.createServer(app); // Usando createServer diretamente

// Inicializa o socket.io passando o servidor HTTP
const io = new Server(server);

app.get('/', (request, response) => {
    response.send('Hello World');
});

app.get('/json', (request, response) => {
    response.json({ 'message' : 'Hello World' });
});

// Configuração de eventos para o socket.io (opcional)
io.on('connect', (socket) => {
    console.log('Um novo usuário se conectou');

    socket.on('test', (response) => {
        console.log(response);
    });
    
    socket.on('disconnect', () => {
        console.log('Usuário desconectado');
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000'); 
});
