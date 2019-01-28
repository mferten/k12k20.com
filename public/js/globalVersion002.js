'use strict';

removeAnExternalJSFileIfExist("Mapdata");
// retrieve the external js files if not open yet
setTimeout(function () {
    importAnExternalJSFileIfNotYetWithNoProcessing("WorldFlags", "js/worldFlags.js");
    importAnExternalJSFileIfNotYetWithNoProcessing("DashBoardmapdata", "js/dashBoardmapdata.js");
    importAnExternalJSFileIfNotYetWithNoProcessing("StaticDataForDashboard", "js/staticDataForDashboard.js");
    importAnExternalJSFileIfNotYetWithNoProcessing("Worldmap", "js/worldmap.js");

    currentEWorldPage = "eWorld Global";
    dashBoardFlag = true;
    initializationUtilityForFlags();
}, 50);

var allCountryLanguages;
// World Languages Drop Down Values
if (typeof worldLanguagesDropDownValues == 'undefined') // text or data lanageues.js may define this variable
    var worldLanguagesDropDownValues;
// World Religions Drop Down Values
var worldReligionsDropDownValues;
// World Waters Drop Down Values
var worldWatersDropDownValues;
// Flags Colors Drop Down Values
var flagsColorsDropDownValues;
// Flags Shapes Drop Down Values
var flagsShapesDropDownValues;

setTimeout(function () {
    if (typeof allCountryNames == 'undefined') // text or data lanageues.js may define this variable
        allCountryNames = getAllCountriesNames();
    if (typeof allCountryFullNames == 'undefined') // text or data lanageues.js may define this variable
        allCountryFullNames = getAllCountriesFullNames();
    allCountryLanguages = allLanguages; // for dashBoard: Each Country's First (major) Language
    // World Languages Drop Down Values
    worldLanguagesDropDownValues = getWorldLanguagesDropDownValues();
    // World Religions Drop Down Values
    worldReligionsDropDownValues = getWorldReligionsDropDownValues();
    // World Waters Drop Down Values
    worldWatersDropDownValues = getWorldWatersDropDownValues();
    // Flags Colors Drop Down Values
    flagsColorsDropDownValues = getFlagsColorsDropDownValues();
    // Flags Shapes Drop Down Values
    flagsShapesDropDownValues = getFlagsShapesDropDownValues();
    // <script src="js/firstPageHeaderDashBoard.js"></script>
    var globalBody =  document.createElement("body");
    globalBody.setAttribute("name","global");

    var globalHeader = document.createElement("header");
    globalHeader.setAttribute("id", "id_Header");
    globalHeader.setAttribute("class","center");

    h1TitleCodes(globalHeader);

    /* Create All Category Select Input Fields */
    var selectTextSpan = getASpanElement("", myUndefined, " ");
    // These will be multiple selection drop down Category Select fields:
    createSelectFields(selectTextSpan, ["Country", "Population", "LandArea", "Language", "Religion", "Reports"],
        "selectBoxStyles marginPointPoint2Rem worldSelectSize");
    createSelectFields(selectTextSpan, ["appLanguageToUse"],"selectBoxStyles marginPointPoint2Rem worldSelectSize");
    firstDivElement.appendChild(selectTextSpan);

    var flags = document.createElement("div");
    flags.setAttribute("id", "flagsWorld");
    firstDivElement.appendChild(flags);
    globalHeader.appendChild(firstDivElement);

    var globalMain = document.createElement("main");
    globalMain.setAttribute("id", "rowID");
    globalMain.setAttribute("class","myInfoPage");

    globalBody.appendChild(globalHeader); // must be here for setTheRegionFlags to work...
    globalBody.appendChild(globalMain); // must be here for simplemaps

    var globalNav = document.createElement("nav");
    globalNav.setAttribute("id", "id_Navigation");
    globalNav.setAttribute("class", "center");
    globalNav.setAttribute("data-nav", "Searching");

    var globalFooter = document.createElement("footer");
    globalFooter.setAttribute("class","center");
    var globalFooterSpan = document.createElement("span");
    globalFooterSpan.setAttribute("id","id_CopyRight");
    var globalFooterP = document.createElement("span");
    globalFooterP.setAttribute("id","id_LanguageImplementedBy");
    globalFooter.appendChild(globalFooterSpan);
    globalFooter.appendChild(globalFooterP);

    globalBody.appendChild(globalNav);
    globalBody.appendChild(globalFooter);
    document.getElementById("topHTML").replaceChild(globalBody, document.body);

    // flags already set but needs to set the required Arrays/Objects: Set the Flag Object Used flag ON (true)
    setTheFlags();
    h2HeaderCodes();
    muteTheSoundCodes(selectedApplicationLanguageTexts["id_World"]);
    combineSearchCodes(h2First);
    playGreetingCodes();

    var mainElement = globalMain;

    // the Form: 1 of 3 <div> of mainWrapper <div>
    var formDivElement = document.createElement("div");
    formDivElement.setAttribute("id", "worldFlagsForm");

    // Create Left Side Categories: Select Input Fields II (top, left and right below)
    if (appleProduct) {
        createSelectFields(formDivElement, ["Cell","Internet","CapitalCities"],
            "selectBoxStyles marginPointPoint2Rem worldSelectSize");
    }
    else {
        createSelectFields(formDivElement, ["Cell","Internet","RandD","Color", "Color2nd", "Color3rd", "Shape", "Shape2nd", "Shape3rd"],
            "selectBoxStyles marginPointPoint2Rem worldSelectSize");
    }

    simpleMapOneCountryMap(formDivElement);

    setReportingMedia();

    // the Selected Flag, Reset and the drop-downs: 3 of 3 <div> of mainWrapper <div>
    var flagControllDivElement = document.createElement("div");
    flagControllDivElement.setAttribute("id", "selectedFlagForm");

    // Create Rest of Categories: Select Input Fields
    if (appleProduct) {
    createSelectFields(flagControllDivElement,
        ["Income", "Overweight", "LifeExpectancy"],
        "selectBoxStyles marginPointPoint2Rem worldSelectSize");
    }
    else {
        createSelectFields(flagControllDivElement,
            ["Income", "Overweight", "Water", "LifeExpectancy", "CapitalCities", "DrivingSide", "SexRatio", "SeatRatio", "CleanWater","CleanToilet"],
            "selectBoxStyles marginPointPoint2Rem worldSelectSize");
    }

    rightLabelAndMainElementCodes(flagControllDivElement, mainElement, formDivElement);

    // Some of the Select Option Values will be retrieved from Server (AJAX calls)
    setSelectOptionsFromServerData();
    setCombineValueCodes("was here");
    // create SimpleMaps World Map
    worldMap = simplemaps_worldmap.create();
    // only one region in World view map: 0, all countries in it
    worldMap.load();
    regionalGlobalInitialization();
    // set flags from saved Object (no loop no SVG country flag retrieval: Just one Object retreival)
    if (typeof WorldFlags == 'undefined') setTimeout(function() { flags.innerHTML = decodeURIComponent(WorldFlags["flags"]); },200); // no ready yet
    else flags.innerHTML = decodeURIComponent(WorldFlags["flags"]); // if defined Now  (can be done when the js/worldFlags.js external file onload!)
},900);
