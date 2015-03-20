var db = require('../mysqlORM');


module.exports = {

  contests: {
    get: function(req, res){
      db.findAll().then(function(contests){
        res.send(contests);        
      })
    },
    put: function(req, res){
      var modelToUpdate = req.body;

      db.find({ where: {id: modelToUpdate.id} }).then(function(model) {
        model.updateAttributes({currentEntries: modelToUpdate.currentEntries}).then(function(){          
          res.send(200);          
        })
      });

    }
  }
};