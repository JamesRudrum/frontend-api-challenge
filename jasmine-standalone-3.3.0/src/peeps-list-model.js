"use strict";

(function(exports){
  function PeepList(){
    this.peeps = [];
  };

  PeepList.prototype.addPeep = function(peep) {
    this.peeps.push(peep)
  };

  PeepList.prototype.getAllPeeps = function() {
    return this.peeps;
  };

  exports.PeepList = PeepList;
})(this);
