const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Readiness Probe for ArgoCD
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'healthy', version: 'v1' });
});

// Mock Database for Version 1
app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, username: 'alice123' }, 
        { id: 2, username: 'bob_smith' }
    ]);
});
//
app.listen(port, () => console.log(`Backend Version 1 running on port ${port}`));