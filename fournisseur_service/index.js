const express = require('express');
const mongoose = require('mongoose');
const fournisseurRoutes = require('./routes/fournisseurs');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://mongodb:27017/inventaire', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error('Erreur de connexion à MongoDB', err));

app.use('/api/fournisseurs', fournisseurRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Fournisseur service est en marche sur le port ${PORT}`);
});
