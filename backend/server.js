// wmbc/backend/server.js
// Server backend API handler

const express = require('express');

const PORT = process.env.port || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"});
});

app.listen(PORT, () =>
    console.log('Server listening on %s', PORT)
);