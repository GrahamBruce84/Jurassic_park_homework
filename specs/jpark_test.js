var assert = require('assert');
var Dino = require('../dino.js');
var Jpark = require('../jpark.js')

describe('dino', function(){
  var jpark;
  var dino1 = new Dino("T Rex", 2);
  var dino2 = new Dino("raptor", 3);
  var dino3 = new Dino("Triceratops", 5);
  var dino4 = new Dino("Stegosaurus", 1);

  beforeEach(function(){
    jpark = new Jpark;
  });

  it('Can add dinosaurs to the park', function(){
    jpark.addDino(dino1);
    jpark.addDino(dino3);
    jpark.addDino(dino2);
    jpark.addDino(dino4);
    jpark.addDino(new Dino("Dilophosaurus", 8));
    assert.strictEqual(jpark.enclosure.length, 5);
  })

  it('remove all dinos of a particular type', function(){
    jpark.addDino(dino1);
    jpark.addDino(dino3);
    jpark.addDino(dino2);
    jpark.addDino(dino4);
    jpark.removeDinoOfType("raptor");
    assert.strictEqual(jpark.enclosure.length, 3);
  });

  it('get all dinos with offspring more than 2', function(){
    jpark.addDino(dino1);
    jpark.addDino(dino3);
    jpark.addDino(dino2);
    jpark.addDino(dino4);
    assert.deepEqual(jpark.getDino(), ["Triceratops", "raptor"])
  });

  it('1 dino after 1 year', function(){
    jpark.addDino(dino1);
    assert.strictEqual(jpark.dinosCountPerYear(1), 3);
  });

  it('1 dino after 2 year', function(){
    jpark.addDino(dino1);
    assert.strictEqual(jpark.dinosCountPerYear(2), 5);
  });

  it('2 dinos after 2 year', function(){
    jpark.addDino(dino1);
    jpark.addDino(dino2);
    assert.strictEqual(jpark.dinosCountPerYear(2), 12);
  });

});

























