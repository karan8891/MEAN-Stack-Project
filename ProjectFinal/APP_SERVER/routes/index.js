var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/main.js');
const ctrlFood = require('../controllers/food.js');
/* GET home page. */
const index = (req, res) => {
res.render('index', { title: 'Express' });
};
router.get('/', ctrlFood.homelist);
router.get('/foods/:foodid', ctrlFood.foodInfo);
router.route('/new').get(ctrlFood.addNewFood).post(ctrlFood.doAddNewFood);


module.exports = router;
   