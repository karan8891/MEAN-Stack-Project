const mongoose = require('mongoose');
const Food = mongoose.model('food');

const getFoods = function (req, res) {
    Food.find().exec(function(err,fooddata){
        if(err){
            res
            .status(404)
            .json(err);
            return;
        }
    res
    .status(200)
    .json(fooddata);
});
};

const createFood = function (req, res) {
    Food.create({
        name:req.body.name,
        type:req.body.type,
        description:req.body.description,
        price:req.body.price
    },(err,fooddata) =>{
        if(err){
            res
            .status(400)
            .json(err);
        } else{
            res
            .status(201)
            .json(fooddata);
        }
    });
};

const getSingleFood = function (req, res) {
            Food
            .findById(req.params.foodid)
            .exec((err, food) =>{
                if(!food)
                    {
                   return res
                     .status(404)
                     .json({"message": "FoodID Not Found"});
                     return;
                    }
                else if(err)
                    {
                       return res
                        .status(404)
                        .json(err);
                    }
                res
                .status(200)
                .json(food);
            });
};

const updateFood = function (req, res) {
    if(!req.params.foodid){
        res
        .status(404)
        .json({
            "message":"not found, food id is required"
        });
        return;
    }
    Food.findById(req.params.foodid)
        .exec((err,fooddata) => {
        if(!fooddata){
            res
            .json(404)
            .status({
                "message":"foodid not found"
            });
            return;
        } else if(err){
            res
            .status(400)
            .json(err);
            return;
        }
        fooddata.name = req.body.name;
        fooddata.type = req.body.type;
        fooddata.price = req.body.price;
        fooddata.description = req.body.description;
        fooddata.save((err,fooddata)=>{
            if(err){
                res
                .status(404)
                .json(err);
            } else{
                res
                .status(200)
                .json(fooddata);
            }
        });
    });
};

const deleteFood = function (req, res) {
    const foodid = req.params.foodid;
    if(foodid){
        Food
        .findByIdAndRemove(foodid)
        .exec((err,fooddata) => {
            if(err){
                res
                .status(404)
                .json(err);
                return;
            }
            res
    .status(204)
    .json(null);
        });
    } else{
        res
        .status(404)
        .json({"message":"No foodid"});
    
}};

module.exports = {
    getFoods,
    createFood,
    getSingleFood,
    updateFood,
    deleteFood
};