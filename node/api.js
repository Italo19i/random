const http = require('http');
const url = require('url');
const querystring = require('querystring');
const crypto = require('crypto');

// Dados de usuário fictícios
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Função para criar o HMAC
function createHmac(data) {
    const hmac = crypto.createHmac('sha256', data);
    return hmac.digest('hex');
}

// Função para verificar se as credenciais estão corretas
function authenticate(username, password) {
    return users.find(user => user.username === username && user.password === password);
}

// Servidor HTTP
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const path = parsedUrl.pathname;

    if (path === '/login' && req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const { username, password } = querystring.parse(body);

            const user = authenticate(username, password);

            if (user) {
                const token = createHmac(username);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Login successful', token }));
            } else {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Invalid username or password' }));
            }
        });
    } else if (path === '/protected' && req.method === 'GET') {
        const token = req.headers.authorization;

        if (!token) {
            res.writeHead(401, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Unauthorized' }));
        } else {
            const username = token.split(' ')[1];
            const calculatedToken = username

            if (token === `Bearer ${calculatedToken}`) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Welcome to protected route' }));
            } else {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Unauthorized' }));
            }
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

