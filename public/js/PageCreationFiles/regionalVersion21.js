'use strict';

currentEWorldPage = "eWorld Regional"; // this should be up here all the time to work again from the menu (after the first time)
dashBoardFlag = false;

removeAnExternalJSFileIfExist("DashBoardmapdata");
// retrieve the external js files if not open yet
setTimeout(function () {
    importAnExternalJSFile("AfricaFlags", "js/OneCountryLanguageTextJSFiles/africaFlagsVersion21.js");
    importAnExternalJSFile("AsiaFlags", "js/OneCountryLanguageTextJSFiles/asiaFlagsVersion21.js");
    importAnExternalJSFile("EuropeFlags", "js/OneCountryLanguageTextJSFiles/europeFlagsVersion21.js");
    importAnExternalJSFile("NaFlags", "js/OneCountryLanguageTextJSFiles/naFlagsVersion21.js");
    importAnExternalJSFile("OceaniaFlags", "js/OneCountryLanguageTextJSFiles/oceaniaFlagsVersion21.js");
    importAnExternalJSFile("Mapdata", "js/mapdata.js");
    importAnExternalJSFile("Worldmap", "js/worldmap.js");
    importAnExternalJSFile("SaFlags", "js/OneCountryLanguageTextJSFiles/saFlagsVersion21.js");

    initializationUtilityForFlags();
}, 50);

var regionBody =  document.createElement("body");
regionBody.setAttribute("name","region");

var regionHeader = document.createElement("header");
regionHeader.setAttribute("id", "id_Header");
regionHeader.setAttribute("class","center");

// start <script src="js/firstPageHeader.js"></script>
h1TitleCodes(regionHeader);

/* Create All Regions Radio Buttons and add into the Header first Div */
var regionFieldSet = document.createElement("fieldset");
var legendFieldSet = document.createElement("legend");
regionFieldSet.setAttribute("class", "fieldsetForAccessibility");
regionFieldSet.appendChild(legendFieldSet);
var selectTextSpan = document.createElement("span");
selectTextSpan.setAttribute("id", "regionsRadioButtons");
createRadioButtons(selectTextSpan, ['Africa', "Asia", "Europe", "NorthAmerica", "Oceania", "SouthAmerica"],
    "regionRadioButtonStyle marginPointPoint2Rem", "span", "region");

// Retrieve the default or user Region countries
regionFieldSet.appendChild(selectTextSpan);
firstDivElement.appendChild(regionFieldSet);
var flags = document.createElement("div");
flags.setAttribute("id", "flags");
firstDivElement.appendChild(flags);
headerElement.appendChild(firstDivElement);

var regionMain = document.createElement("main");
regionMain.setAttribute("id", "rowID");
regionMain.setAttribute("class","myInfoPage");

regionBody.appendChild(regionHeader); // must be here for setTheRegionFlags to work...
regionBody.appendChild(regionMain); // must be here for simplemaps

var regionNav = setNavigation("Surfing");

var regionFooter = setFooter();

regionBody.appendChild(regionNav);
regionBody.appendChild(regionFooter);

function finalizeRegionalPage() {
    document.getElementById("topHTML").replaceChild(regionBody, document.body);
    // set flags from saved Object (no loop no SVG country flag retrieval: Just one Object retreival)
    setTheRegionFlags(startupValuesJSONObject.region, flags);

    h2HeaderCodes();

    muteTheSoundCodes(regionNames[startupValuesJSONObject.region]);

    addApplicationLanguageSelectionDropDownBox();

    playGreetingCodes();

    var mainElement = regionMain;

    // the Form: 1 of 3 <div> of mainWrapper <div>
    var formDivElement = document.createElement("div");
    formDivElement.setAttribute("id", "worldFlagsForm");

    // simplemaps world map as a Region or one is here: Default up until a Country is selected
    // simplemaps one country map is here: Hidden up until a Country selected (clicked)
    simpleMapOneCountryMap(formDivElement);
    // the Selected Flag, Reset and the drop-downs: 3 of 3 <div> of mainWrapper <div>
    var flagControllDivElement = document.createElement("div");
    flagControllDivElement.setAttribute("id", "selectedFlagForm");
    rightLabelAndMainElementCodes(flagControllDivElement, mainElement, formDivElement);
    worldMap = simplemaps_worldmap.create();
    worldMap.mapdata.main_settings.initial_zoom = regionNumbers[startupValuesJSONObject.region];
    regionalGlobalInitialization();
    worldMap.load();
    // process next time: otherwise start up time, the map will be loaded twice
    worldMapLoaded = false; // will stay false all the time
    setNavFooterTags("Surfing");
}
