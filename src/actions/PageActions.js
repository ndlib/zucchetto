var AppDispatcher = require("../dispatcher/AppDispatcher.jsx");
var PageActionTypes = require("../constants/PageActionTypes.jsx");
var EventEmitter = require("../middleware/EventEmitter.js");
var HoneycombURL = require("../modules/HoneycombURL.js");

class PageActions {
  fetchSitePath() {
    $.ajax({
      url: 'https://honeycomb.library.nd.edu/v1/collections/e5b80cd1d9/site_path',
      method: 'GET',
      dataType: 'json',
      success: (response) => {
        AppDispatcher.dispatch({
          actionType: PageActionTypes.FETCH_SITE_PATH,
          sitePathData: response.site_path,
        })
      },
      error: (request, status, thrownError) => {
        EventEmitter.emit("PageFetchFailed", { request: request, status: status, error: thrownError });
      }
    })
  }
}

module.exports = new PageActions()
