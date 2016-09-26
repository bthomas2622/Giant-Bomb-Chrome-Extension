Ben Thomas - Giant Bomb Game Wiki Search
===============================

Colony Collapse Disorder (CCD)

# **About**

This Google Chrome extension allows you to right click a highlighted selection in the Google Chrome browser and search that selection in the Giant Bomb Game Wiki. If the highlighted selection matches a game in the database a new window will open with the database page for that game. There one can read about the game, watch associated videos, and enjoy all the other Giant Bomb content around that game. 

## How to Use 

Setup: Add the "Giant Bomb Game Wiki Search" extension to your chome browser from the extension store and "enable" at your extension management settings. 

Use: Right click a highlighted selection, a context menu will appear, click the "Search Giant Bomb Game Wiki" entry. 

## How it was programmed

###### Tools
This Google Chrome extension was programmed in JavaScript/JSON. The "JQuery" JS framework was utilzed for its AJAX functionality to query the Giant Bomb database. The "Giant Bomb API" was used to create parameters for AJAX query and get web URL of matching searched game. Chrome Extension documentation was also necessary to set up "manifest.json" file, set icons, and provide chrome tab manipulation commands. 

#### Directory Structure

The manifest.json file is the JSON formatted manifest file that every google chrome extension must have. This file contains important information about the extension such as name, description, version number, permissions, icons, background scripts, etc. The eventpage.js file contains the persistent JavaScript code that controls the behavior of the extension. In this case grabbing highlighted selection, searching in Giant Bomb wiki, and opening new tab for game page. The ".png" pictures are the extension icons that will accompany the extension when it appear in the store, in your browser, etc. The "jquery-1.11.3.min.js" is the jquery framework that is utilized for its AJAX JavaScript functionality. 

#### Contributing

Anyone is welcome to re-use the code used in this project.

#### References

* [Giant Bomb API](http://www.giantbomb.com/api/)
* [JQueury Documentation](https://api.jquery.com/)
* [Google Chrome Developer's Guide](https://developer.chrome.com/extensions/devguide)

#### Contact Me

For any questions please email me at _bthomas2622@gmail.com_

#### License

The content of this repository is not licensed. 