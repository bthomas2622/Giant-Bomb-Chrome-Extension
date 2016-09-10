//onclick function passes two parameters 1. info: information about the item clicked and the context where the click happened
//2. tab: the details of the tab where the click took place
function getword(info,tab) {
	console.log("Word " + info.selectionText + " was clicked.");
	var apiKey = "b01519412a74b74d8463cd439040f586b8fff0e6";
	var baseUrl = "http://www.giantbomb.com/api";
	var queryURL = baseUrl + '/search/?api_key=' + apiKey + '&format=json';
	var query = info.selectionText;
	$.ajax({
	url: queryURL + '&query=' + encodeURI(query),
	dataType: "json",
	success: searchCallback
	});
	// callback for when we get back the results
	function searchCallback(data) {
	    var games = data.site_detail_url;
	    chrome.tabs.create({  
			url: games,
		});   
	}        
}
chrome.contextMenus.create({
  title: "Search Giant Bomb Wiki for: %s",
  //contexts refers to the different "contexts" a menu can appear in. Example: all, page, selection, frame, link, image, etc. 
  contexts:["selection"], 
  //function that will be called back when menu item is clicked
  onclick: getword,
});