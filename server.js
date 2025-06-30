const express = require('express');
const app = express();
const port = 3000;

// Route principale
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Nouvelle route /random
app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.send(`Voici un nombre aléatoire : ${randomNumber}`);
});

// Démarrage serveur
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'hello world' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 

// Remove me
