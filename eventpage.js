//onclick function passes two parameters 1. info: information about the item clicked and the context where the click happened
//2. tab: the details of the tab where the click took place
function getword(info,tab) {
	console.log("Word " + info.selectionText + " was clicked.");
	var apiKey = "b01519412a74b74d8463cd439040f586b8fff0e6";
	var baseUrl = "http://www.giantbomb.com/api";
	var queryURL = baseUrl + '/search/?api_key=' + apiKey + '&format=json';
	var query = info.selectionText;
	var searchURL = queryURL + '&query=' + encodeURI(query) + '&limit=1&resources=game';
	// chrome.tabs.create({
	// 	url: searchURL
	// })
	// var httpRequest = new XMLHttpRequest();

	// function apiRequest(searchURL){
	// 	if (!httpRequest) {
	// 		alert("API Request Failed");
	// 	}
	// 	httpRequest.onreadystatechange = alertContents;
	// 	httpRequest.open('GET', searchURL);
	// 	httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	// 	httpRequest.send();
	// }

	// function alertContents() {
	// 	if (httpRequest.readyState === XMLHttpRequest.DONE) {
	// 		if (httpRequest.status === 200) {
	// 			chrome.tabs.create({
	// 				url: httpRequest.site_detail_url,
	// 			});
	// 		} else {
	// 			alert('API Request Failed');
	// 		}
	// 	}
	// }
	
	// apiRequest(searchURL);
	// alertContents();

	$.ajax({
		url: searchURL,
		dataType: "json",
		success: function(data) {
			console.log("test");
		    var games = data.results[0].site_detail_url;
		    console.log(data.results);
		    console.log(data.results[0].site_detail_url);
		    chrome.tabs.create({  
				url: games,
			});   
		},
		error: function() {
			console.log("AJAX request failed.")
		}  
	});     
}

chrome.contextMenus.create({
  title: "Search Giant Bomb Wiki for: %s",
  //contexts refers to the different "contexts" a menu can appear in. Example: all, page, selection, frame, link, image, etc. 
  contexts:["selection"], 
  //function that will be called back when menu item is clicked
  onclick: getword,
});