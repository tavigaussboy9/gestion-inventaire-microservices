const express = require('express');
const router = express.Router();
const Produit = require('../models/produit');

// Obtenir tous les produits
router.get('/', async (req, res) => {
  const produits = await Produit.find();
  res.json(produits);
});

// Ajouter un produit
router.post('/', async (req, res) => {
  const produit = new Produit(req.body);
  await produit.save();
  res.status(201).json(produit);
});

module.exports = router;
