const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Yogender is Alive!'));

app.listen(port, () => console.log(`Yogender is listening to http://localhost:${port}`));