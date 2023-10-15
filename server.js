const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV === 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare().then(() => {
    const server = express();
    
    // Define your Express routes here, for example:
    server.get('/custom-route', (req, res) => {
        return res.json({ message: 'This is a custom route handled by Express!' });
    });

    // Default handler for Next.js pages
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});