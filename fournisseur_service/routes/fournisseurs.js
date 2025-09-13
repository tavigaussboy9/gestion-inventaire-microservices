const express = require('express');
const router = express.Router();
const Fournisseur = require('../models/fournisseur');

// Obtenir tous les fournisseurs
router.get('/', async (req, res) => {
  const fournisseurs = await Fournisseur.find();
  res.json(fournisseurs);
});

// Ajouter un fournisseur
router.post('/', async (req, res) => {
  const fournisseur = new Fournisseur(req.body);
  await fournisseur.save();
  res.status(201).json(fournisseur);
});

module.exports = router;
