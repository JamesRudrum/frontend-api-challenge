describe("PeepListView", function() {
  var peep1;
  var peep2;
  var peeplist;
  var peeplistview;


  beforeEach(function() {
  peep1 = new Peep("Test1");
  peep2 = new Peep("Test2");
  peeplist = new PeepList();
  peeplist.addPeep(peep1);
  peeplist.addPeep(peep2);
  peeplistview = new PeepListView(peeplist);
  });

  it("should be able to display all peeps with HTML tag", function() {
    expect(peeplistview.printListHTML()).toEqual("<ul><li><div>" + peep1.text + "</div></li><li><div>" + peep2.text +  "</div></li></ul>");
  });

});
