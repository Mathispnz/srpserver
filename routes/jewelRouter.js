const express = require('express');
const router = express.Router();

const Product = require('../models/jewelModel');

router.get('/vente002', (req, res, next) => {
    Product.create()
    .then(products => res.json(products))
    .catch(err => next(err));
})

module.exports = router;