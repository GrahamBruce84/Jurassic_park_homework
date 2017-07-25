var Jpark = function(){
  this.enclosure = []
};

Jpark.prototype = {
  addDino: function(dino){
    this.enclosure.push(dino);
  },
  removeDinoOfType: function(type){
    for(dino of this.enclosure){
      if(dino.type === type){
        var indexFind = this.enclosure.indexOf(dino)
        this.enclosure.splice(indexFind, 1);
      }
    }
  },
  getDino: function(){
    creche = [];
    for(dino of this.enclosure){
      if(dino.offspring > 2){
        creche.push(dino.type);
      }
    }
    return creche;
  },
  dinosCountPerYear: function(year){
    dinoCount = this.enclosure.length;
    for(i = 0; i < year; i++){
      for(dino of this.enclosure){
        dinoCount += dino.offspring;
      }
    }
    return dinoCount;
  }
};

module.exports = Jpark;