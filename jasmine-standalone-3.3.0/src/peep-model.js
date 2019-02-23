"use strict";

(function(exports){
  function Peep(id, body, created_at, updated_at, user_id, user_handle, likes ){
    this.id = id;
    this.body = body;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.user_id = user_id;
    this.user_handle = user_handle;
    this.likes = likes;
  };

  Peep.prototype.getPeepId = function() {
    return this.id;
  };

  Peep.prototype.getPeepBody = function() {
    return this.body;
  };

  Peep.prototype.getPeepCreatedAt = function() {
    return this.created_at;
  };

  Peep.prototype.getPeepUpdatedAt = function() {
    return this.updated_at;
  };

  Peep.prototype.getPeepUserId = function() {
    return this.user_id;
  };

  Peep.prototype.getPeepUserHandle = function() {
    return this.user_handle;
  };

  Peep.prototype.getPeepLikes = function() {
    return this.likes;
  };

  exports.Peep = Peep;
})(this);
