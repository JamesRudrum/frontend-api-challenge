describe("PeepListModel", function() {
  var peeplist;
  var peep1;
  var peep2;

  beforeEach(function() {
    peeplist = new PeepList();

    peep1 = new Peep(id = 346,
    body = "test peep 1",
    created_at = "2019-02-23T19:16:40.757Z",
    updated_at = "2019-02-23T20:16:40.757Z",
    user_id = 598,
    user_handle = "Big D",
    likes = 0);

    peep2 = new Peep(id = 666,
    body = "test peep 2",
    created_at = "2019-02-23T15:16:40.757Z",
    updated_at = "2019-02-23T20:37:40.757Z",
    user_id = 745,
    user_handle = "jpr",
    likes = 0);

    peeplist.addPeep(peep1);
    peeplist.addPeep(peep2);
  });

  it("should be able to push peeps into the array that is the peeplist", function() {
    expect(peeplist.peeps).toContain(peep1 && peep2);
  });

  it("should be able to display all peeps", function() {
    expect(peeplist.getAllPeeps()).toContain(peep1);
    expect(peeplist.getAllPeeps()).toContain(peep2);
  });

});
