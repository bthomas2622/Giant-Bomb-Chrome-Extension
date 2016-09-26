//onclick function passes two parameters 1. info: information about the item clicked and the context where the click happened
//2. tab: the details of the tab where the click took place
function getword(info,tab) {
	console.log("Word " + info.selectionText + " was clicked.");
	var apiKey = "b01519412a74b74d8463cd439040f586b8fff0e6";
	var baseUrl = "http://www.giantbomb.com/api";
	var queryURL = baseUrl + '/search/?api_key=' + apiKey + '&format=json';
	var query = info.selectionText;
	//var searchURL = queryURL + '&query=' + encodeURI(query) + '&limit=5&resources=game';
	//exact game name only search url
	var searchURL = queryURL + '&query=' + encodeURI(query) + '&limit=5&resources=game&filter=name:' + encodeURI(query);
	console.log(encodeURI(query));

	$.ajax({
		url: searchURL,
		dataType: "json",
		success: function(data) {
			console.log(data.results);
			var i = 0;
			var games = "temp";
			if (data.results[0] == undefined) {
				alert("Sorry there are no matches for this search");
				console.log("no matching results");
			}
			else {
				try {
					while (i < 5){
						// console.log(i + " result: " + data.results[i].name);
						// console.log(data.results[i].name.toLowerCase());
						// console.log(query.toLowerCase());
						if (data.results[i].name.toLowerCase() == query.toLowerCase()){
							games = data.results[i].site_detail_url;
							chrome.tabs.create({  
								url: games,
							}); 
							break;
						}
						console.log(i);
						i++;
					}
				}
				catch(err){
					console.log("Error")
					if (games == "temp"){
				    	games = data.results[0].site_detail_url;
						chrome.tabs.create({  
							url: games,
						}); 
				    } 
				}
			    // console.log(data);
			    // console.log(data.results);
			    // console.log(data.results[0].site_detail_url); 
			    if (games == "temp"){
			    	games = data.results[0].site_detail_url;
					chrome.tabs.create({  
						url: games,
					}); 
			    }
			} 
		},
		error: function() {
			console.log("AJAX request failed.")
		}  
	});     
}

chrome.contextMenus.create({
  title: "Search GB Game Wiki for: %s",
  //contexts refers to the different "contexts" a menu can appear in. Example: all, page, selection, frame, link, image, etc. 
  contexts:["selection"], 
  //function that will be called back when menu item is clicked
  onclick: getword,
});