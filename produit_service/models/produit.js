const mongoose = require('mongoose');

const produitSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  quantite: { type: Number, required: true },
  fournisseur: { type: String, required: true }
});

module.exports = mongoose.model('Produit', produitSchema);
