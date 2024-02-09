const router = require('express').Router();

const Productcontroller = require('../controllers/productsController');
// router.get('/', (req, res) => res.send('Hello World!'));
router.get('/', Productcontroller.getAllProducts);
router.get('/:id', Productcontroller.getProduct);
router.get('/search/:key', Productcontroller.searchProduct);
router.post('/', Productcontroller.createProduct);

module.exports = router