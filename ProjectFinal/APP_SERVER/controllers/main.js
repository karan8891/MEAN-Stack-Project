const index = function(req,res){
      res.render('index', { title: 'Restaurant' });
};
module.exports = {
    index
};
