require('dotenv').config();
const express = require('express');

const app = express();

const recipes = require('./routes/api/recipes');
const ingredients = require('./routes/api/ingredients');

// app middleware
app.use(express.json());

// routes middleware
app.use('/api/recipes', recipes);
app.use('/api/ingredients', ingredients);

const port = process.env.PORT;

app.listen(port, () => console.log(`Server is running on port ${port}`));
