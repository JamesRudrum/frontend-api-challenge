"use strict";

(function(exports){
  function PeepListView(peeplist){
    this.list = peeplist;
  };




  PeepListView.prototype.printListHTML = function() {
    var html = "<ul>";
    for (var i = 0; i < this.list.getAllPeeps().length ; i++){
      html += ("<li><div>" +  this.list.getAllPeeps()[i].text + "</div></li>");

    }

    return html + "</ul>";
  };

  exports.PeepListView = PeepListView;
})(this);
