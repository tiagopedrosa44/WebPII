const express = require('express');
const app = express();
const port = process.env.PORT || '127.0.0.1' ; const host = process.env.HOST || 8080;
app.use(express.json()); //enable parsing JSON body data

// root route -- /api/
app.get('/', function (req, res) {
res.status(200).json({ message: 'home -- Ecopontos api' });
});

// routing middleware for resource MOVIES
app.use('/ecopontos', require('GeoRecycleAPI/routes/ecopontos.routes.js'))

// handle invalid routes
app.get('*', function (req, res) {
res.status(404).json({ message: 'WHAT???' });
})

app.listen(port, host, () => console.log(`App listening at http://${host}:${port}/`));