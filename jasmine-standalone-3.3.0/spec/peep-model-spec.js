describe("Peep", function() {
  var peep1;

  beforeEach(function() {
    peep1 = new Peep(id = 346,
    body = "test peep",
    created_at = "2019-02-23T19:16:40.757Z",
    updated_at = "2019-02-23T20:16:40.757Z",
    user_id = 598,
    user_handle = "jpr",
    likes = 0 );
  });

  it("should be able to create a peep instance", function() {
    expect(peep1 instanceof Peep).toBe(true);
  });

  it("should be able to create a peep with correct parameters", function() {
    expect(peep1.id).toEqual(346);
    expect(peep1.body).toEqual("test peep");
    expect(peep1.created_at).toContain("2019-02-23" && "19:16:40");
    expect(peep1.updated_at).toContain("2019-02-23" && "20:16:40");
    expect(peep1.user_id).toEqual(598);
    expect(peep1.user_handle).toEqual("jpr");
    expect(peep1.likes).toEqual(0);
  });

  it("should be able to view peep id", function() {
    expect(peep1.getPeepId()).toEqual(peep1.id);
  });

  it("should be able to view peep body", function() {
    expect(peep1.getPeepBody()).toEqual(peep1.body);
  });

  it("should be able to view peep creation date", function() {
    expect(peep1.getPeepCreatedAt()).toEqual(peep1.created_at);
  });

  it("should be able to view peep updated date", function() {
    expect(peep1.getPeepUpdatedAt()).toEqual(peep1.updated_at);
  });

  it("should be able to view peep user id", function() {
    expect(peep1.getPeepUserId()).toEqual(peep1.user_id);
  });

  it("should be able to view peep user handle", function() {
    expect(peep1.getPeepUserHandle()).toEqual(peep1.user_handle);
  });

  it("should be able to view peep likes", function() {
    expect(peep1.getPeepLikes()).toEqual(peep1.likes);
  });
  
});
