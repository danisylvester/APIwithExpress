const express = require('express');
const bodyParser = require('body-parser');
const studentsRoutes = require('./routes/students');

const app = express();
const PORT = process.env.PORT || 5000;

//Body parser middleware
app.use(bodyParser.json());

app.use('/api/students', studentsRoutes);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
