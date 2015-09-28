'use strict';

/**
 * Export for lambda handler
 * @param event
 * @param context
 * @param cb
 */
exports.run = function(event, context, cb) {
  /**
   *
   *
   *
   * Write your callback code here. Make sure you validate the request
   * by checking the event ID with stripe before processing.
   *
   *
   *
  */
  console.log(event.id);
  return cb(null, {"message": "success"});
};
