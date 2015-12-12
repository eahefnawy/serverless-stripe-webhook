/**
 * Lib
 */

module.exports.respond = function(event, cb) {
  /**
   *
   *
   *
   * Write your callback code here. Make sure you validate the request
   * by checking the event.id with stripe before processing.
   *
   *
   *
   */
  var response = {
    message: "Your Serverless function ran successfully!"
  };

  return cb(null, response);
};