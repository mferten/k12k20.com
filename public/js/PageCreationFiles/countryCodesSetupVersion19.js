'use strict';

currentEWorldPage = "eWorld Countries"; // this should be up here all the time to work again from the menu (after the first time)

// retrieve the external js files if not open yet
importAnExternalUtilityJSFile("CountriesTableData", "js/OneCountryLanguageTextJSFiles/countriesTableDataVersion19.js");

initializationUtilityForFlags();

var eWorldCountriesBody =  document.createElement("body");
eWorldCountriesBody.setAttribute("name","register");
var eWorldCountriesHeader = document.createElement("header");
eWorldCountriesHeader.setAttribute("id", "id_Header");
var eWorldCountriesH1 = document.createElement("h1");
eWorldCountriesH1.setAttribute("id", "id_FirstMessage");
eWorldCountriesH1.innerHTML = selectedApplicationLanguageTexts["id_Countries"];
eWorldCountriesHeader.appendChild(eWorldCountriesH1);

var eWorldCountriesH2 = document.createElement("h2");
eWorldCountriesH2.setAttribute("id", "id_FirstH2");
eWorldCountriesH2.setAttribute("class", "registerH2");

eWorldCountriesHeader.appendChild(eWorldCountriesH2); // must be here before h2HeaderCodes(

setTimeout(function () {
    getCountryCodesTableData(); // (0) // call if data is not saved but this is for to save it.
    h2HeaderCodes(eWorldCountriesHeader);
    muteTheSoundCodes(" ");
    addApplicationLanguageSelectionDropDownBox(h2First); // (): adds into h2First (redundant) but the variable will force it to skip class: dashBoardCombine
    h2First.classList.remove("h2Header"); // no grid required for eWorld Countries Pause and Application Text Language Selection
    playGreetingCodes(eWorldCountriesHeader);

    var eWorldCountriesMain = document.createElement("main");
    eWorldCountriesMain.setAttribute("class","myInfoPageCountryList");

    var eWorldCountriesMainDivOne = document.createElement("div");
    eWorldCountriesMainDivOne.setAttribute("id", "worldFlagsForm");
    if (iPhone) {
      createCountryInformationLabels(eWorldCountriesMainDivOne, // Left Labels
          ["Language", "Population", "Overweight", "LifeExpectancy", "CapitalCities"],"marginPointPoint2Rem displayNone sharedLinkState", true);
    }
    else {
          createCountryInformationLabels(eWorldCountriesMainDivOne, // Left Labels
              ["Language", "Population", "Religion", "LandArea", "Income", "Overweight", "LifeExpectancy", "CapitalCities", "CountryCodes", "Currency", "Water",
              "SexRatio", "SeatRatio","HDI", "Gini"],"marginPointPoint2Rem displayNone sharedLinkState", true);
    }
    var eWorldCountriesMainDivTwo = document.createElement("div");
    eWorldCountriesMainDivTwo.setAttribute("id", "myInfoPageCountryList");
    var eWorldCountriesAlphabetLetters = document.createElement("div");
    eWorldCountriesAlphabetLetters.setAttribute("id", "id_Letters26");
    eWorldCountriesAlphabetLetters.setAttribute("class", "worldCountryCodes");
    // eWorldCountriesAlphabetLetters.innerHTML = decodeURIComponent(aToZObject); // if the A to Z Object is Saved
    createAtoZTags(eWorldCountriesAlphabetLetters);

    eWorldCountriesMainDivTwo.appendChild(eWorldCountriesAlphabetLetters);
    var eWorldCountriesTableDiv = document.createElement("div");
    eWorldCountriesTableDiv.setAttribute("id", "id_CountryListMenuDiv");
    eWorldCountriesTableDiv.setAttribute("class", "displayNone");
    var eWorldCountriesTable = document.createElement("table");
    eWorldCountriesTable.setAttribute("id", "id_CountryListMenu");
    eWorldCountriesTable.setAttribute("class", "displayNone");
    eWorldCountriesTableDiv.appendChild(eWorldCountriesTable);
    eWorldCountriesMainDivTwo.appendChild(eWorldCountriesTableDiv);

    var eWorldCountriesMainDivThree = document.createElement("div");
    eWorldCountriesMainDivThree.setAttribute("id", "selectedFlagForm");
    if (appleProduct) {
        createCountryInformationLabels(eWorldCountriesMainDivThree, // Right Labels
            ["TravelWarning", "TimeAndDate", "GoogleMap", "Tourism", "UNCountry"],"marginPointPoint2Rem displayNone sharedLinkState", false);
    }
    else {
        createCountryInformationLabels(eWorldCountriesMainDivThree, // Right Labels
            ["DrivingSide", "CleanWater", "CleanToilet", "Cell", "RandD", "Internet", "TravelWarning", "TimeAndDate", "GoogleMap", "Government", "Tourism", "Weather",
            "WikiCountry", "CIACountry", "UNCountry"],"marginPointPoint2Rem displayNone sharedLinkState", false);
    }

    eWorldCountriesMain.appendChild(eWorldCountriesMainDivOne);
    eWorldCountriesMain.appendChild(eWorldCountriesMainDivTwo);
    eWorldCountriesMain.appendChild(eWorldCountriesMainDivThree);

    eWorldCountriesBody.appendChild(eWorldCountriesHeader);

    var eWorldCountriesNav = document.createElement("nav");
    eWorldCountriesNav.setAttribute("id", "id_Navigation");
    eWorldCountriesNav.setAttribute("class", "center");
    eWorldCountriesNav.setAttribute("data-nav", "CountryCodes");

    var eWorldCountriesFooter = document.createElement("footer");
    eWorldCountriesFooter.setAttribute("class","center");
    var eWorldCountriesFooterP = document.createElement("p");
    eWorldCountriesFooterP.setAttribute("id","id_CopyRight");
    var eWorldCountriesFooterP2 = document.createElement("p");
    eWorldCountriesFooterP2.setAttribute("id","id_LanguageImplementedBy");
    eWorldCountriesFooter.appendChild(eWorldCountriesFooterP);
    eWorldCountriesFooter.appendChild(eWorldCountriesFooterP2);

    eWorldCountriesBody.appendChild(eWorldCountriesMain);
    eWorldCountriesBody.appendChild(eWorldCountriesNav);
    eWorldCountriesBody.appendChild(eWorldCountriesFooter);
}, 50);

var processTheseTH = {0:true,1:true,2:true,4:true,5:true,6:true};
var threeBelongsToOthers = {"UnitedStatesMinorOutlyingIslands":"UnitedStatesofAmerica",
    "HeardIslandandMcDonaldIslands":"Australia", "BouvetIsland":"Norway" };
var currentLetter = myUndefined;
var tableRowsByCapitalCity = {};
var currentSortIcon;
var headerRow;

dashBoardFlag = true; // emulate Dashboard since we see all the countries

function setTheTableData()
{
    var tableRows = document.getElementById("id_CountryListMenu").rows;
    headerRow = tableRows[0];
    for (var oneRow in tableRows)
    {
        if (oneRow >= 1 && oneRow <= 255)
            tableRowsByCapitalCity[tableRows[oneRow].cells[9].innerHTML] =  tableRows[oneRow];
    }

    var headings = tableRows[0].cells;
    setHeaderRowIds(headerRow);

    for (var oneTH in headings)
    {
        if (processTheseTH[oneTH]) addTheAscendingDescendingSortIcon(headings[oneTH], oneTH);
    }
    setTheTableRows(tableRows);
}

function setTheTableRows(tableRows)
{
    var oneFlagImageElement;
    for (var oneRow in tableRows)
    {
        if (oneRow >= 1 && oneRow <= 255)
        {
            addCodesClassToEachTd(tableRows[oneRow].cells);
            var countryNameFromTD = tableRows[oneRow].cells[1].innerHTML;
            tableRows[oneRow].setAttribute("id", "id_" + oneRow);
            tableRows[oneRow].setAttribute("name", countryFromISOLongName[countryNameFromTD]?countryFromISOLongName[countryNameFromTD]:countryNameFromTD);
            tableRows[oneRow].cells[0].classList.add("displayNone");
            tableRows[oneRow].cells[9].classList.add("displayNone");
            oneFlagImageElement = document.createElement("img");
            oneFlagImageElement.setAttribute("class", "plainFlagsWorld");

            if (countryNameFromTD.indexOf("|") != -1) {
                countryNameFromTD = countryNameFromTD.substring(0, countryNameFromTD.indexOf("|"));
                tableRows[oneRow].cells[1].innerHTML = tableRows[oneRow].cells[1].innerHTML.substring(0, tableRows[oneRow].cells[1].innerHTML.indexOf("|"));
            } // Set the flags
            if (flagsSVGFiles[countryNameFromTD]) {
                oneFlagImageElement.src = "data:image/svg+xml," + flagsSVGFiles[countryNameFromTD].svg;
                setAnIdForAFlag(oneFlagImageElement, countryNameFromTD)
            }
            else if (flagsSVGFiles[countryNameFromLongName[countryNameFromTD]]) {
                oneFlagImageElement.src = "data:image/svg+xml," + flagsSVGFiles[countryNameFromLongName[countryNameFromTD]].svg;
                setAnIdForAFlag(oneFlagImageElement, countryNameFromLongName[countryNameFromTD]);
            }
            else if (threeBelongsToOthers[countryNameFromLongName[countryNameFromTD]]) {
                oneFlagImageElement.src = "data:image/svg+xml," + flagsSVGFiles[threeBelongsToOthers[countryNameFromLongName[countryNameFromTD]]].svg;
                setAnIdForAFlag(oneFlagImageElement, threeBelongsToOthers[countryNameFromLongName[countryNameFromTD]]);
            }
            else console.log(countryNameFromTD);
            oneFlagImageElement.alt = "Entity: " + countryNameFromTD;
            tableRows[oneRow].cells[1].prepend(oneFlagImageElement);
        }
    }
}

function setAnIdForAFlag(oneFlagImageElement, idText) {
    oneFlagImageElement.id = "id_" + idText;
    oneFlagImageElement.name = idText;
}

function addCodesClassToEachTd(aRowCells)
{
    for (var aCell in aRowCells) {
        if (aRowCells[aCell] && aRowCells[aCell].classList) aRowCells[aCell].classList.add("codesWithPointer"); }
}

function setHeaderRowIds(headerRow)
{
    if (headerRow)
        headerRow.classList.add("codesWithPointer");
    for (var oneCell in headerRow.cells)
    {
        if (headerRow.cells[oneCell].innerHTML)
        {
            headerRow.cells[oneCell].setAttribute("id", "id_" + headerRow.cells[oneCell].innerHTML + "Th");
            var oneHeadingSpan;
            if (processTheseTH[oneCell])
                oneHeadingSpan = getASpanElement("id_" + headerRow.cells[oneCell].innerHTML  + "ThText", "sortIconTh",
                    selectedApplicationLanguageTexts["id_" + headerRow.cells[oneCell].innerHTML  + "ThText"], myUndefined, myUndefined, true);
            else oneHeadingSpan = getASpanElement("id_" + headerRow.cells[oneCell].innerHTML  + "ThText", myUndefined,
                selectedApplicationLanguageTexts["id_" + headerRow.cells[oneCell].innerHTML  + "ThText"], myUndefined, myUndefined, true);
            headerRow.cells[oneCell].innerHTML = "";
            headerRow.cells[oneCell].appendChild(oneHeadingSpan);
        }
    }
}

function addTheAscendingDescendingSortIcon(oneTH, number)
{
    var oneSortImageIconElement = document.createElement("img");
    var iconName = oneTH.getAttribute("id").substring(3, oneTH.getAttribute("id").indexOf("Th"));
    oneSortImageIconElement.setAttribute("id", "id_Sort" + iconName);
    oneSortImageIconElement.setAttribute("class", "sortIconTh vertialAlignMiddle");
    oneSortImageIconElement.setAttribute("alt", "Sort-" + iconName);
    if (number < 3)
        oneSortImageIconElement.src = "/images/sortAscending.svg";
    else {
        oneSortImageIconElement.src = "/images/sortDescending.svg";
    }
    oneTH.appendChild(oneSortImageIconElement);
}

var showPointer = {"id_CountryTh":true, "id_RegionTh":true, "id_CapitalTh":true, "id_PopulationTh":true, "id_SurfaceTh":true, "id_IncomeTh":true,
    "id_CountryThText":true, "id_RegionThText":true, "id_CapitalThText":true, "id_PopulationThText":true, "id_SurfaceThText":true, "id_IncomeThText":true,
    "id_SortCountry":true, "id_SortRegion":true, "id_SortCapital":true, "id_SortPopulation":true, "id_SortSurface":true, "id_SortIncome":true}
var showSelected = {"id_SortCountry":"id_CountryTh", "id_SortRegion":"id_RegionTh", "id_SortCapital":"id_CapitalTh", "id_SortPopulation":"id_PopulationTh",
    "id_SortSurface":"id_SurfaceTh", "id_SortIncome":"id_IncomeTh", "id_CountryThText":"id_CountryTh", "id_RegionThText":"id_RegionTh", "id_CapitalThText":"id_CapitalTh",
    "id_PopulationThText":"id_PopulationTh","id_SurfaceThText":"id_SurfaceTh", "id_IncomeThText":"id_IncomeTh"}

function countryCodesClickEvents(event)
{
    var eventTargetId = event.target.id;
    if (rowsByLetter[eventTargetId] && currentLetter != eventTargetId)
    {
        setTheLetterRows(rowsByLetter[eventTargetId]["start"], rowsByLetter[eventTargetId]["end"]);
        if (currentLetter && document.getElementById(currentLetter).classList.contains("selectedInputTag"))
            document.getElementById(currentLetter).classList.remove("selectedInputTag");
        currentLetter = eventTargetId;
        if (!document.getElementById(currentLetter).classList.contains("selectedInputTag"))
            document.getElementById(currentLetter).classList.add("selectedInputTag");

        document.getElementById("id_CountryFacts").innerHTML = selectedApplicationLanguageTexts["id_Countries"]; // start place holder
        retrieveAndDisplayCountryInformation("hide");
        stopAllPlaying();
    }
    else if (event.target.alt && event.target.alt.indexOf("Entity") != -1)
    {
        aFlagIsSelected();
    }
    else if (showPointer[eventTargetId])
    {
        aSortIconIsSelected(eventTargetId);
    }
    else if (eventTargetId == "id_CheckBoxPlaySounds") { // Sound Off
        playSoundsChanged();
    }
    else {
        var clickedParentNode = event.target.parentNode;
        if (clickedParentNode && clickedParentNode.hasAttribute && clickedParentNode.hasAttribute("id") && clickedParentNode.getAttribute("id")
            && clickedParentNode.getAttribute("id").indexOf("id_")!=-1) {
            var isNumberAfterId = clickedParentNode.getAttribute("id").substring(3);
            if (isNumberAfterId >= 1 && isNumberAfterId <= 255) {
                triggerAMouseEvent("id_" + clickedParentNode.getAttribute("name"));
            }
        }
    }
}

function aSortIconIsSelected(idIcon)
{
    if (showSelected[idIcon]) idIcon = showSelected[idIcon];
    if (currentSortIcon != idIcon) {
        if (currentSortIcon && document.getElementById(currentSortIcon+"Text").classList.contains("selectedInputTag"))
            document.getElementById(currentSortIcon+"Text").classList.remove("selectedInputTag");
        currentSortIcon = idIcon;
        if (!document.getElementById(currentSortIcon+"Text").classList.contains("selectedInputTag"))
            document.getElementById(currentSortIcon+"Text").classList.add("selectedInputTag");
        var tableRows = document.getElementById("id_CountryListMenu");
        tableRows.innerHTML = "";
        tableRows.appendChild(headerRow);
        var newOrder = iconJSONData[sortIconSelectionID[idIcon]];
        for (var addThis in newOrder)
        {
            if (idIcon == "id_SortCapital" || idIcon == "id_CapitalTh")
            {
                if (tableRowsByCapitalCity[addThis]) // TRNC and Canary Islands are not ISO defined (not here)
                    tableRows.appendChild(tableRowsByCapitalCity[addThis]);
            }
            else
            {
                var oneCountryFeatures = featuresOfAllCountries[addThis];
                if (oneCountryFeatures[14]['feature'] == "CapitalCitiesDisplay") {
                    for (var oneFeature in oneCountryFeatures)
                    {
                        if (oneCountryFeatures[oneFeature]['feature'] == "CapitalCities")
                            if (tableRowsByCapitalCity[oneCountryFeatures[oneFeature]['value']])
                                tableRows.appendChild(tableRowsByCapitalCity[oneCountryFeatures[oneFeature]['value']]);
                    }
                }
                else if (tableRowsByCapitalCity[oneCountryFeatures[14]['value']]) tableRows.appendChild(tableRowsByCapitalCity[oneCountryFeatures[14]['value']]);
            }
        }
        setOddOrEven();
    }
}

function aFlagIsSelected()
{
    if (previousFlag == -1) {
        previousFlag = event.target.id;
        removeAddClass(previousFlag,"plainFlagsWorld","tdSelectedFlagsWorld");
    }
    else {
      removeAddClass(previousFlag,"tdSelectedFlagsWorld","plainFlagsWorld");
      previousFlag = event.target.id;
      removeAddClass(previousFlag,"plainFlagsWorld","tdSelectedFlagsWorld");
    }
    document.getElementById("id_CountryFacts").innerHTML = event.target.alt.substring(8);
    retrieveAndDisplayCountryInformation(event.target.name);
    startPlaying(event.target.name); // Start playing the Greetings if not Muted
}

function removeAddClass(tagId, removeClass, addClass) { // see if this is dublicate
    if (document.getElementById(tagId).classList.contains(removeClass))
        document.getElementById(tagId).classList.remove(removeClass);
    if (!document.getElementById(tagId).classList.contains(addClass))
        document.getElementById(tagId).classList.add(addClass);
}

function removeAddClassByObject(object, removeClass, addClass) { // see if this is dublicate
    if (object.classList.contains(removeClass))
        object.classList.remove(removeClass);
    if (!object.classList.contains(addClass))
        object.classList.add(addClass);
}

function setTheLetterRows(start, end)
{
    var rowsCount = document.getElementById("id_CountryListMenu").rows.length;
    for (var x=1; x<rowsCount; x++) // show-hide
    {
        if (x >= start && x <= end)
        {
            if (document.getElementById("id_" + x) && document.getElementById("id_" + x).classList.contains("displayNone"))
                    document.getElementById("id_" + x).classList.remove("displayNone");
        }
        else
        {
            if (document.getElementById("id_" + x) && !document.getElementById("id_" + x).classList.contains("displayNone"))
                document.getElementById("id_" + x).classList.add("displayNone");
        }
    }
    setOddOrEven();
}

function setOddOrEven()
{
    var newRows = document.getElementById("id_CountryListMenu").rows; // odd-even rows
    var oddOrEvenRow=0;
    for (var oneRow in newRows)
    {
        if (oneRow >= 1 && oneRow <= 255) {
            if (newRows[oneRow].classList && !newRows[oneRow].classList.contains("displayNone")) {
                if (oddOrEvenRow%2==0) removeAddClassByObject(newRows[oneRow], "oddRow", "evenRow");
                else removeAddClassByObject(newRows[oneRow], "evenRow", "oddRow");
                oddOrEvenRow++;
            }
        }
    }
}

function getCountryCodesTableData()
{
    var oneCountryFeatures;
    var oneCountryCodes;
    var oneCountryName;
    var worldPopulation = 7700000000;
    var worldIncome = 87500000000000;
    var worldSurfaceArea = 149000000;
    var capitalCitiesOfAllCountriesRaw = {};
    for (var aCountry in countryCodesOfAllCountries)
    {   /* countryListOfAllCountries { "Afghanistan":["Region","CapitalCity","Big City", "Population", "Surface", "Income", "Alpha-2, Alpha-3, Numeric, GEC & Calling"],... } */
        if (countryFromISOLongName[aCountry])
            oneCountryName = countryFromISOLongName[aCountry];
        else oneCountryName = englishCountryFromEnglishLongName[aCountry];
        oneCountryFeatures = featuresOfAllCountries[oneCountryName];
        oneCountryCodes = countryCodesOfAllCountries[aCountry];
        if (oneCountryFeatures[14]['feature'] == "CapitalCitiesDisplay") {
              var indexCapital = 0;
              for (var oneFeature in oneCountryFeatures) {
                  if (oneCountryFeatures[oneFeature]['feature'] == "CapitalCities") {
                      capitalCitiesOfAllCountriesRaw[aCountry + "|" + indexCapital++] = [oneCountryFeatures[20]['value'], oneCountryFeatures[oneFeature]['value'] + " " +
                      getCapitalPopulationPercent(oneCountryFeatures),
                      getLargestCityIfAny(oneCountryFeatures, oneCountryFeatures[0]['value']),
                      numberFixedToString(oneCountryFeatures[0]['value']) + " " + getTheRatio(oneCountryFeatures[0]['value'], worldPopulation),
                      numberFixedToString(oneCountryFeatures[7]['value']) + " " + getTheRatio(oneCountryFeatures[7]['value'], worldSurfaceArea),
                      numberFixedToString(oneCountryFeatures[27]['value']) + " " + getTheRatio(oneCountryFeatures[27]['value'], worldIncome),
                      oneCountryCodes[0] + ", " + oneCountryCodes[1] + ", " + oneCountryCodes[2] + ", " + oneCountryCodes[3] + ", " + oneCountryCodes[4], oneCountryFeatures[oneFeature]['value']];
                  }
              }
        }
        else {
            capitalCitiesOfAllCountriesRaw[aCountry] = [oneCountryFeatures[20]['value'], oneCountryFeatures[14]['value'] + " " + getCapitalPopulationPercent(oneCountryFeatures),
                getLargestCityIfAny(oneCountryFeatures, oneCountryFeatures[0]['value']),
                numberFixedToString(oneCountryFeatures[0]['value']) + " " + getTheRatio(oneCountryFeatures[0]['value'], worldPopulation),
                numberFixedToString(oneCountryFeatures[7]['value']) + " " + getTheRatio(oneCountryFeatures[7]['value'], worldSurfaceArea),
                numberFixedToString(oneCountryFeatures[27]['value']) + " " + getTheRatio(oneCountryFeatures[27]['value'], worldIncome),
                oneCountryCodes[0] + ", " + oneCountryCodes[1] + ", " + oneCountryCodes[2] + ", " + oneCountryCodes[3] + ", " + oneCountryCodes[4], oneCountryFeatures[14]['value']];
        }
    }
    countryCodesOfAllCountries = capitalCitiesOfAllCountriesRaw;
}

// maybe + 'comment'/population... % == use this as a base to find out Capital City Population Population to world population, Surface to world surface is a direct function call..
function getLargestCityIfAny(oneCountryFeatures)
{
    for (var oneFeature in oneCountryFeatures)
    {
        if (oneCountryFeatures[oneFeature]['feature'] == "LargestCityPopulationDisplay") {
            return oneCountryFeatures[oneFeature]['value'] + " " + ((oneCountryFeatures[oneFeature]['comment']/oneCountryFeatures[0]['value'])*100).toFixed(2) + "%";
        }
    }
    return "";
}

function getCapitalPopulationPercent(oneCountryFeatures)
{
    for (var oneFeature in oneCountryFeatures)
    {
        if (oneCountryFeatures[oneFeature]['feature'] == "CapitalCitiesPopulationDisplay") {
            return ((oneCountryFeatures[oneFeature]['comment']/oneCountryFeatures[0]['value'])*100).toFixed(2) + "%";
        }
    }
    return "";
}

function getTheRatio(value, worldValue)
{
    if (value > 0 && worldValue > 0) {
        return " " + ((value * 1.00/worldValue)*100).toFixed(2) + "%";
    }
    else return "";
}

function finalizeCountriesPage() {
    document.getElementById("topHTML").replaceChild(eWorldCountriesBody, document.body);
    // (2) to rebuild the Table use this one
    // /*
        createATable("id_CountryListMenu", ["Country","Region","Capital","Largest","Population","Surface","Income","Country Codes"],
            countryCodesOfAllCountries, -999, "Array", myUndefined, true, 16);
    // */
    // document.getElementById("id_CountryListMenu").innerHTML = decodeURIComponent(countriesTableData); // (1) if the Table Data is Saved, to rebuild comment this decodeURI out
    document.getElementById("id_CountryFacts").innerHTML = selectedApplicationLanguageTexts["id_Countries"]; // start place holder
    triggerAMouseEvent("id_A");
    document.getElementsByTagName("body")[0].classList.add("countryCodeBodyBackground");
    setTheTableData(); // (3) if the Table Data is NOT saved
    /* (4) if table data is SAVED
    var tableRows = document.getElementById("id_CountryListMenu").rows; // if the Table Data is Saved
    headerRow = tableRows[0];
    for (var oneRow in tableRows)
    {
        if (oneRow >= 1 && oneRow <= 255)
            tableRowsByCapitalCity[tableRows[oneRow].cells[9].innerHTML] =  tableRows[oneRow];
    }
    for (var oneHeading in showPointer)
    {
        if (oneHeading.indexOf("ThText") != -1 && document.getElementById(oneHeading))
            document.getElementById(oneHeading).innerHTML = selectedApplicationLanguageTexts[oneHeading];
    }
    document.getElementById("id_Country CodesThText").innerHTML = selectedApplicationLanguageTexts["id_Country CodesThText"];
    document.getElementById("id_LargestThText").innerHTML = selectedApplicationLanguageTexts["id_LargestThText"];
    */ // end of (4)
    document.getElementById("id_CountryListMenu").classList.remove("displayNone");
    document.getElementById("id_CountryListMenuDiv").classList.remove("displayNone");
    // set the default (initial) sort
    currentSortIcon = "id_CountryTh";
    if (document.getElementById(currentSortIcon+"Text"))
        document.getElementById(currentSortIcon+"Text").classList.add("selectedInputTag");
    // console.log(encodeURIComponent(document.getElementById("id_CountryListMenu").innerHTML)); // (5) // print if not SAVED (to be SAVED)
    // (6) console.log(encodeURIComponent(document.getElementById("id_Letters26").innerHTML)); // to save A-Z
    // id_A to Z and ALL add Click Event for iPhone/iPad
    if (appleProduct) {
        var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','Z','All'];
        for (var i in letters) {
            document.getElementById("id_"+letters[i]).addEventListener("click", countryCodesClickEvents, false);
        }
        for (var ii in showPointer) {
            document.getElementById(ii).addEventListener("click", countryCodesClickEvents, false);
        }
    }
    setNavFooterTags("CountryCodes");
}

var countryCodesOfAllCountries =
{
    "Afghanistan":["AF","AFG","4","AF","93"],
    "Åland Islands":["AX","ALA","248","","358"],
    "Albania":["AL","ALB","8","AL","355"],
    "Algeria":["DZ","DZA","12","AG","213"],
    "American Samoa":["AS","ASM","16","AQ","1 684"],
    "Andorra":["AD","AND","20","AN","376"],
    "Angola":["AO","AGO","24","AO","244"],
    "Anguilla":["AI","AIA","660","AV","1 264"],
    "Antarctica":["AQ","ATA","10","AY","672, 64"],
    "Antigua and Barbuda":["AG","ATG","28","AC","1 268"],
    "Argentina":["AR","ARG","32","AR","54"],
    "Armenia":["AM","ARM","51","AM","374"],
    "Aruba":["AW","ABW","533","AA","297"],
    "Australia":["AU","AUS","36","AS","61"],
    "Austria":["AT","AUT","40","AU","43"],
    "Azerbaijan":["AZ","AZE","31","AJ","994"],
    "Bahamas (the)":["BS","BHS","44","BF","1 242"],
    "Bahrain":["BH","BHR","48","BA","973"],
    "Bangladesh":["BD","BGD","50","BG","880"],
    "Barbados":["BB","BRB","52","BB","1 246"],
    "Belarus":["BY","BLR","112","BO","375"],
    "Belgium":["BE","BEL","56","BE","32"],
    "Belize":["BZ","BLZ","84","BH","501"],
    "Benin":["BJ","BEN","204","BN","229"],
    "Bermuda":["BM","BMU","60","BD","1 441"],
    "Bhutan":["BT","BTN","64","BT","975"],
    "Bolivia (Plurinational State of)":["BO","BOL","68","BL","591"],
    "Bonaire, Sint Eustatius and Saba":["BQ","BES","535","","599"],
    "Bosnia and Herzegovina":["BA","BIH","70","BK","387"],
    "Botswana":["BW","BWA","72","BC","267"],
    "Bouvet Island":["BV","BVT","74","BV",""],
    "Brazil":["BR","BRA","76","BR","55"],
    "British Indian Ocean Territory (the)":["IO","IOT","86","IO","246"],
    "Brunei Darussalam":["BN","BRN","96","BX","673"],
    "Bulgaria":["BG","BGR","100","BU","359"],
    "Burkina Faso":["BF","BFA","854","UV","226"],
    "Burundi":["BI","BDI","108","BY","257"],
    "Cabo Verde":["CV","CPV","132","CV","238"],
    "Cambodia":["KH","KHM","116","CB","855"],
    "Cameroon":["CM","CMR","120","CM","237"],
    "Canada":["CA","CAN","124","CA","1"],
    "Cayman Islands (the)":["KY","CYM","136","CJ","1 345"],
    "Central African Republic (the)":["CF","CAF","140","CT","236"],
    "Chad":["TD","TCD","148","CD","235"],
    "Chile":["CL","CHL","152","CI","56"],
    "China":["CN","CHN","156","CH","86"],
    "Christmas Island":["CX","CXR","162","KT","61"],
    "Cocos (Keeling) Islands (the)":["CC","CCK","166","CK","61"],
    "Colombia":["CO","COL","170","CO","57"],
    "Comoros (the)":["KM","COM","174","CN","269"],
    "Congo (the Democratic Republic of the)":["CD","COD","180","CG","243"],
    "Congo (the)":["CG","COG","178","CF","242"],
    "Cook Islands (the)":["CK","COK","184","CW","682"],
    "Costa Rica":["CR","CRI","188","CS","506"],
    "Côte d'Ivoire":["CI","CIV","384","IV","225"],
    "Croatia":["HR","HRV","191","HR","385"],
    "Cuba":["CU","CUB","192","CU","53"],
    "Curaçao":["CW","CUW","531","UC","599"],
    "Cyprus":["CY","CYP","196","CY","357"],
    "Czechia":["CZ","CZE","203","EZ","420"],
    "Denmark":["DK","DNK","208","DA","45"],
    "Djibouti":["DJ","DJI","262","DJ","253"],
    "Dominica":["DM","DMA","212","DO","1 767"],
    "Dominican Republic (the)":["DO","DOM","214","DR","1 (809/829/849)"],
    "Ecuador":["EC","ECU","218","EC","593"],
    "Egypt":["EG","EGY","818","EG","20"],
    "El Salvador":["SV","SLV","222","ES","503"],
    "Equatorial Guinea":["GQ","GNQ","226","EK","240"],
    "Eritrea":["ER","ERI","232","ER","291"],
    "Estonia":["EE","EST","233","EN","372"],
    "Eswatini":["SZ","SWZ","748","WZ","268"],
    "Ethiopia":["ET","ETH","231","ET","251"],
    "Falkland Islands (the) [Malvinas]":["FK","FLK","238","FK","500"],
    "Faroe Islands (the)":["FO","FRO","234","FO","298"],
    "Fiji":["FJ","FJI","242","FJ","679"],
    "Finland":["FI","FIN","246","FI","358"],
    "France":["FR","FRA","250","FR","33"],
    "French Guiana":["GF","GUF","254","FG","594"],
    "French Polynesie":["PF","PYF","258","FP","689"],
    "French Southern Territories (the)":["TF","ATF","260","FS",""],
    "Gabon":["GA","GAB","266","GB","241"],
    "Gambia (the)":["GM","GMB","270","GM","220"],
    "Georgia":["GE","GEO","268","GE","995"],
    "Germany":["DE","DEU","276","GM","49"],
    "Ghana":["GH","GHA","288","GH","233"],
    "Gibraltar":["GI","GIB","292","GI","350"],
    "Greece":["GR","GRC","300","GR","50"],
    "Greenland":["GL","GRL","304","GL","299"],
    "Grenada":["GD","GRD","308","GJ","1 473"],
    "Guadeloupe":["GP","GLP","312","GP","590"],
    "Guam":["GU","GUM","316","GQ","1 671"],
    "Guatemala":["GT","GTM","320","GT","502"],
    "Guernsey":["GG","GGY","831","GK","44"],
    "Guinea":["GN","GIN","324","GV","224"],
    "Guinea-Bissau":["GW","GNB","624","PU","245"],
    "Guyana":["GY","GUY","328","GY","592"],
    "Haiti":["HT","HTI","332","HA","509"],
    "Heard Island and McDonald Islands":["HM","HMD","334","HM",""],
    "Holy See (the)":["VA","VAT","336","VT","39"],
    "Honduras":["HN","HND","340","HO","504"],
    "Hong Kong":["HK","HKG","344","HK","852"],
    "Hungary":["HU","HUN","348","HU","36"],
    "Iceland":["IS","ISL","352","IC","354"],
    "India":["IN","IND","356","IN","91"],
    "Indonesia":["ID","IDN","360","ID","62"],
    "Iran (Islamic Republic of)":["IR","IRN","364","IR","98"],
    "Iraq":["IQ","IRQ","368","IZ","964"],
    "Ireland":["IE","IRL","372","EI","353"],
    "Isle of Man":["IM","IMN","833","IM","44"],
    "Israel":["IL","ISR","376","IS","972"],
    "Italy":["IT","ITA","380","IT","39"],
    "Jamaica":["JM","JAM","388","JM","1 876"],
    "Japan":["JP","JPN","392","JA","81"],
    "Jersey":["JE","JEY","832","JE","44"],
    "Jordan":["JO","JOR","400","JO","962"],
    "Kazakhstan":["KZ","KAZ","398","KZ","7"],
    "Kenya":["KE","KEN","404","KE","254"],
    "Kiribati":["KI","KIR","296","KR","686"],
    "Kosovo":["XK","XKX","","KV","383"],
    "Korea (the Democratic People's Republic of)":["KP","PRK","408","KP","850"],
    "Korea (the Republic of)":["KR","KOR","410","KS","82"],
    "Kuwait":["KW","KWT","414","KU","965"],
    "Kyrgyzstan":["KG","KGZ","417","KG","996"],
    "Lao People's Democratic Republic (the)":["LA","LAO","418","LA","856"],
    "Latvia":["LV","LVA","428","LG","371"],
    "Lebanon":["LB","LBN","422","LE","961"],
    "Lesotho":["LS","LSO","426","LT","266"],
    "Liberia":["LR","LBR","430","LI","231"],
    "Libya":["LY","LBY","434","LY","218"],
    "Liechtenstein":["LI","LIE","438","LS","423"],
    "Lithuania":["LT","LTU","440","LH","370"],
    "Luxembourg":["LU","LUX","442","LU","352"],
    "Macau":["MO","MAC","446","MC","853"],
    "Macedonia (the former Yugoslav Republic of)":["MK","MKD","807","MK","389"],
    "Madagascar":["MG","MDG","450","MA","261"],
    "Malawi":["MW","MWI","454","MI","265"],
    "Malaysia":["MY","MYS","458","MY","60"],
    "Maldives":["MV","MDV","462","MV","960"],
    "Mali":["ML","MLI","466","ML","223"],
    "Malta":["MT","MLT","470","MT","356"],
    "Marshall Islands (the)":["MH","MHL","584","RM","692"],
    "Martinique":["MQ","MTQ","474","MB","596"],
    "Mauritania":["MR","MRT","478","MR","222"],
    "Mauritius":["MU","MUS","480","MP","230"],
    "Mayotte":["YT","MYT","175","MF","262"],
    "Mexico":["MX","MEX","484","MX","52"],
    "Micronesia (Federated States of)":["FM","FSM","583","FM","691"],
    "Moldova (the Republic of)":["MD","MDA","498","MD","373"],
    "Monaco":["MC","MCO","492","MN","377"],
    "Mongolia":["MN","MNG","496","MG","976"],
    "Montenegro":["ME","MNE","499","MJ","382"],
    "Montserrat":["MS","MSR","500","MH","1 664"],
    "Morocco":["MA","MAR","504","MO","212"],
    "Mozambique":["MZ","MOZ","508","MZ","258"],
    "Myanmar":["MM","MMR","104","BM","95"],
    "Namibia":["NA","NAM","516","WA","264"],
    "Nauru":["NR","NRU","520","NR","674"],
    "Nepal":["NP","NPL","524","NP","977"],
    "Netherlands (the)":["NL","NLD","528","NL","31"],
    "New Caledonia":["NC","NCL","540","NC","687"],
    "New Zealand":["NZ","NZL","554","NZ","64"],
    "Nicaragua":["NI","NIC","558","NU","505"],
    "Niger (the)":["NE","NER","562","NG","227"],
    "Nigeria":["NG","NGA","566","NI","234"],
    "Niue":["NU","NIU","570","NE","683"],
    "Norfolk Island":["NF","NFK","574","NF","672"],
    "Northern Mariana Islands (the)":["MP","MNP","580","CQ","1 670"],
    "Norway":["NO","NOR","578","NO","47"],
    "Oman":["OM","OMN","512","MU","968"],
    "Pakistan":["PK","PAK","586","PK","92"],
    "Palau":["PW","PLW","585","PS","680"],
    "Palestine, State of":["PS","PSE","275","WE","970"],
    "Panama":["PA","PAN","591","PM","507"],
    "Papua New Guinea":["PG","PNG","598","PP","675"],
    "Paraguay":["PY","PRY","600","PA","595"],
    "Peru":["PE","PER","604","PE","51"],
    "Philippines (the)":["PH","PHL","608","RP","63"],
    "Pitcairn Islands":["PN","PCN","612","PC","870"],
    "Poland":["PL","POL","616","PL","48"],
    "Portugal":["PT","PRT","620","PO","351"],
    "Puerto Rico":["PR","PRI","630","RQ","1 (787/939)"],
    "Qatar":["QA","QAT","634","QA","974"],
    "Réunion":["RE","REU","638","RE","262"],
    "Romania":["RO","ROU","642","RO","40"],
    "Russian Federation (the)":["RU","RUS","643","RS","7"],
    "Rwanda":["RW","RWA","646","RW","250"],
    "Saint Barthélemy":["BL","BLM","652","TB","590"],
    "Saint Helena, Ascension and Tristan da Cunha":["SH","SHN","654","SH","290"],
    "Saint Kitts and Nevis":["KN","KNA","659","SC","1 869"],
    "Saint Lucia":["LC","LCA","662","ST","1 758"],
    "Saint Martin (French part)":["MF","MAF","663","RN","590"],
    "Saint Pierre and Miquelon":["PM","SPM","666","SB","508"],
    "Saint Vincent and the Grenadines":["VC","VCT","670","VC","1 784"],
    "Samoa":["WS","WSM","882","WS","685"],
    "San Marino":["SM","SMR","674","SM","378"],
    "São Tomé and Príncipe":["ST","STP","678","TP","239"],
    "Saudi Arabia":["SA","SAU","682","SA","966"],
    "Senegal":["SN","SEN","686","SG","221"],
    "Serbia":["RS","SRB","688","RI","381"],
    "Seychelles":["SC","SYC","690","SE","248"],
    "Sierra Leone":["SL","SLE","694","SL","232"],
    "Singapore":["SG","SGP","702","SN","65"],
    "Sint Maarten (Dutch part)":["SX","SXM","534","NN","1 721"],
    "Slovakia":["SK","SVK","703","LO","421"],
    "Slovenia":["SI","SVN","705","SI","386"],
    "Solomon Islands":["SB","SLB","90","BP","677"],
    "Somalia":["SO","SOM","706","SO","252"],
    "South Africa":["ZA","ZAF","710","SF","27"],
    "South Georgia and the South Sandwich Islands":["GS","SGS","239","SX","500"],
    "South Sudan":["SS","SSD","728","OD","211"],
    "Spain":["ES","ESP","724","SP","34"],
    "Sri Lanka":["LK","LKA","144","CE","94"],
    "Sudan (the)":["SD","SDN","729","SU","249"],
    "Suriname":["SR","SUR","740","NS","597"],
    "Svalbard and Jan Mayen":["SJ","SJM","744","SV","47"],
    "Sweden":["SE","SWE","752","SW","46"],
    "Switzerland":["CH","CHE","756","SZ","41"],
    "Syrian Arab Republic":["SY","SYR","760","SY","963"],
    "Taiwan (Province of China)":["TW","TWN","158","TW","886"],
    "Tajikistan":["TJ","TJK","762","TI","992"],
    "Tanzania, United Republic of":["TZ","TZA","834","TZ","255"],
    "Thailand":["TH","THA","764","TH","66"],
    "Timor-Leste":["TL","TLS","626","TT","670"],
    "Togo":["TG","TGO","768","TO","228"],
    "Tokelau":["TK","TKL","772","TL","690"],
    "Tonga":["TO","TON","776","TN","676"],
    "Trinidad and Tobago":["TT","TTO","780","TD","1 868"],
    "Tunisia":["TN","TUN","788","TS","246"],
    "Turkey":["TR","TUR","792","TU","90"],
    "Turkmenistan":["TM","TKM","795","TX","993"],
    "Turks and Caicos Islands (the)":["TC","TCA","796","TK","1 649"],
    "Tuvalu":["TV","TUV","798","TV","688"],
    "Uganda":["UG","UGA","800","UG","256"],
    "Ukraine":["UA","UKR","804","UP","380"],
    "United Arab Emirates (the)":["AE","ARE","784","AE","971"],
    "United Kingdom of Great Britain and Northern Ireland (the)":["GB","GBR","826","UK","44"],
    "United States Minor Outlying Islands (the)":["UM","UMI","581","","1"],
    "United States of America (the)":["US","USA","840","US","1"],
    "Uruguay":["UY","URY","858","UY","598"],
    "Uzbekistan":["UZ","UZB","860","UZ","998"],
    "Vanuatu":["VU","VUT","548","NH","678"],
    "Venezuela (Bolivarian Republic of)":["VE","VEN","862","VE","58"],
    "Viet Nam":["VN","VNM","704","VM","84"],
    "Virgin Islands (British)":["VG","VGB","92","VI","1 284"],
    "Virgin Islands (U.S.)":["VI","VIR","850","VQ","1 340"],
    "Wallis and Futuna":["WF","WLF","876","WF","681"],
    "Western Sahara":["EH","ESH","732","WI","212"],
    "Yemen":["YE","YEM","887","YM","967"],
    "Zambia":["ZM","ZMB","894","ZA","260"],
    "Zimbabwe":["ZW","ZWE","716","ZI","263"]
}

// this is only applicable for ISO related Country Names in Countries Module: not System-wide..
var countryFromISOLongName = { "American Samoa":"AmericanSamoa", "Antarctic Treaty System":"AntarcticTreatySystem", "Antigua and Barbuda":"AntiguaandBarbuda",
    "Bonaire, Sint Eustatius and Saba":"BonaireSintEustatiusandSaba", "Bosnia and Herzegovina":"BosniaandHerzegovina", "Virgin Islands (British)":"BritishVirginIslands",
    "British Indian Ocean Territory (the)":"BritishIndianOceanTerritory", "Burkina Faso":"BurkinaFaso", "Cabo Verde":"CaboVerde", "Canary Islands":"CanaryIslands",
    "Cayman Islands (the)":"CaymanIslands", "Central African Republic (the)":"CentralAfricanRepublic", "Christmas Island":"ChristmasIsland", "Cocos (Keeling) Islands (the)":"CocosIslands",
    "Cook Islands (the)":"CookIslands", "Costa Rica":"CostaRica", "Congo (the Democratic Republic of the)":"DemocraticRepublicoftheCongo", "Congo (the)":"RepublicofCongo",
    "Côte d'Ivoire":"CotedIvoire", "Dominican Republic (the)":"DominicanRepublic", "El Salvador":"ElSalvador", "Equatorial Guinea":"EquatorialGuinea", "Syrian Arab Republic":"Syria",
    "Falkland Islands (the) [Malvinas]":"FalklandIslands", "Faroe Islands (the)":"FaroeIslands", "French Guiana":"FrenchGuiana", "French Polynesie":"FrenchPolynesia",
    "French Southern Territories (the)":"FrenchSouthernandAntarcticLands", "Guinea-Bissau":"GuineaBissau", "Hong Kong":"HongKong", "Isle of Man":"IsleofMan",
    "Marshall Islands (the)":"MarshallIslands", "New Caledonia":"NewCaledonia", "New Zealand":"NewZealand", "Norfolk Island":"NorfolkIsland", "Comoros (the)":"Comoros",
    "Northern Mariana Islands (the)":"NorthernMarianaIslands", "Korea (the Democratic People's Republic of)":"NorthKorea", "Papua New Guinea":"PapuaNewGuinea", "Pitcairn Islands":"PitcairnIslands",
    "Puerto Rico":"PuertoRico", "Russian Federation (the)":"RussianFederation", "Saint Barthélemy":"SaintBarthelemy", "Saint Helena, Ascension and Tristan da Cunha":"SaintHelena", "Curaçao":"Curacao",
    "Saint Kitts and Nevis":"SaintKittsandNevis", "Saint Lucia":"SaintLucia", "Saint Pierre and Miquelon":"SaintPierreandMiquelon", "Brunei Darussalam":"Brunei",
    "Saint Vincent and the Grenadines":"SaintVincentandGrenadines", "San Marino":"SanMarino", "São Tomé and Príncipe":"SaoTomeandPrincipe", "Saudi Arabia":"SaudiArabia",
    "Sierra Leone":"SierraLeone", "Sint Maarten (Dutch part)":"SintMaarten", "Solomon Islands":"SolomonIslands", "South Africa":"SouthAfrica", "Korea (the Republic of)":"SouthKorea",
    "South Sudan":"SouthSudan", "Sri Lanka":"SriLanka", "Palestine, State of":"StateofPalestine", "Svalbard and Jan Mayen":"SvalbardandJanMayen", "Gambia (the)":"Gambia",
    "Taiwan (Province of China)":"Taiwan", "Timor-Leste":"TimorLeste", "Trinidad and Tobago":"TrinidadandTobago", "Antarctica":"AntarcticTreatySystem", "Tanzania, United Republic of":"Tanzania",
    "Turkish Republic of Northern Cyprus":"TurkishRepublicofNorthernCyprus", "Turks and Caicos Islands (the)":"TurksandCaicosIslands",
    "United Kingdom of Great Britain and Northern Ireland (the)":"UnitedKingdom", "Venezuela (Bolivarian Republic of)":"Venezuela", "Viet Nam":"Vietnam",
    "United States of America (the)":"UnitedStatesofAmerica", "Virgin Islands (U.S.)":"UnitedStatesVirginIslands", "United Arab Emirates (the)":"UnitedArabEmirates", "SÃ£o TomÃ© and PrÃ­ncipe":"SaoTomeandPrincipe",
    "Western Sahara":"WesternSahara", "Holy See (the)":"VaticanCityAndHolySee", "Wallis and Futuna":"WallisandFutuna", "Åland Islands":"AlandIslands", "Sudan (the)":"Sudan",
    "Bouvet Island":"BouvetIsland", "Heard Island and McDonald Islands":"HeardIslandandMcDonaldIslands","Bahamas (the)":"Bahamas", "Bolivia (Plurinational State of)":"Bolivia", "Saint Martin (French part)":"SaintMartin",
    "Iran (Islamic Republic of)":"Iran", "Lao People's Democratic Republic (the)":"Laos", "Macedonia (the former Yugoslav Republic of)":"Macedonia", "Réunion":"Reunion",
    "Micronesia (Federated States of)":"Micronesia", "Moldova (the Republic of)":"Moldova", "Netherlands (the)":"Netherlands", "Niger (the)":"Niger", "Philippines (the)":"Philippines",
    "South Georgia and the South Sandwich Islands":"SouthGeorgiaAndSouthSandwichIslands", "United States Minor Outlying Islands (the)":"UnitedStatesMinorOutlyingIslands" }

    // For Conversion: English and English: SELECT concat('"', long_name, '":"', country,'",') FROM countries order by country;
    var englishCountryFromEnglishLongName = {"Afghanistan":"Afghanistan",
    "Åland Islands":"AlandIslands",
    "Albania":"Albania",
    "Algeria":"Algeria",
    "American Samoa":"AmericanSamoa",
    "Andorra":"Andorra",
    "Angola":"Angola",
    "Anguilla":"Anguilla",
    "Antarctic Treaty System":"AntarcticTreatySystem",
    "Antigua and Barbuda":"AntiguaandBarbuda",
    "Argentina":"Argentina",
    "Armenia":"Armenia",
    "Aruba":"Aruba",
    "Australia":"Australia",
    "Austria":"Austria",
    "Azerbaijan":"Azerbaijan",
    "Bahamas":"Bahamas",
    "Bahrain":"Bahrain",
    "Bangladesh":"Bangladesh",
    "Barbados":"Barbados",
    "Belarus":"Belarus",
    "Belgium":"Belgium",
    "Belize":"Belize",
    "Benin":"Benin",
    "Bermuda":"Bermuda",
    "Bhutan":"Bhutan",
    "Bolivia":"Bolivia",
    "Bonaire Sint Eustatius and Saba":"BonaireSintEustatiusandSaba",
    "Bosnia and Herzegovina":"BosniaandHerzegovina",
    "Botswana":"Botswana",
    "Bouvet Island":"BouvetIsland",
    "Brazil":"Brazil",
    "British Indian Ocean Territory":"BritishIndianOceanTerritory",
    "British Virgin Islands":"BritishVirginIslands",
    "Brunei":"Brunei",
    "Bulgaria":"Bulgaria",
    "Burkina Faso":"BurkinaFaso",
    "Burundi":"Burundi",
    "Cabo Verde":"CaboVerde",
    "Cambodia":"Cambodia",
    "Cameroon":"Cameroon",
    "Canada":"Canada",
    "Canary Islands":"CanaryIslands",
    "Cayman Islands":"CaymanIslands",
    "Central African Republic":"CentralAfricanRepublic",
    "Chad":"Chad",
    "Chile":"Chile",
    "China":"China",
    "Christmas Island":"ChristmasIsland",
    "Cocos Islands":"CocosIslands",
    "Colombia":"Colombia",
    "Comoros":"Comoros",
    "Cook Islands":"CookIslands",
    "Costa Rica":"CostaRica",
    "Côte d'Ivoire":"CotedIvoire",
    "Croatia":"Croatia",
    "Cuba":"Cuba",
    "Curaçao":"Curacao",
    "Cyprus":"Cyprus",
    "Czechia":"Czechia",
    "Democratic Republic of the Congo":"DemocraticRepublicoftheCongo",
    "Denmark":"Denmark",
    "Djibouti":"Djibouti",
    "Dominica":"Dominica",
    "Dominican Republic":"DominicanRepublic",
    "Ecuador":"Ecuador",
    "Egypt":"Egypt",
    "El Salvador":"ElSalvador",
    "Equatorial Guinea":"EquatorialGuinea",
    "Eritrea":"Eritrea",
    "Estonia":"Estonia",
    "Eswatini":"Eswatini",
    "Ethiopia":"Ethiopia",
    "Falkland Islands":"FalklandIslands",
    "Faroe Islands":"FaroeIslands",
    "Fiji":"Fiji",
    "Finland":"Finland",
    "France":"France",
    "French Guiana":"FrenchGuiana",
    "French Polynesia":"FrenchPolynesia",
    "French Southern and Antarctic Lands":"FrenchSouthernandAntarcticLands",
    "Gabon":"Gabon",
    "Gambia":"Gambia",
    "Georgia":"Georgia",
    "Germany":"Germany",
    "Ghana":"Ghana",
    "Gibraltar":"Gibraltar",
    "Greece":"Greece",
    "Greenland":"Greenland",
    "Grenada":"Grenada",
    "Guadeloupe":"Guadeloupe",
    "Guam":"Guam",
    "Guatemala":"Guatemala",
    "Guernsey":"Guernsey",
    "Guinea":"Guinea",
    "Guinea-Bissau":"GuineaBissau",
    "Guyana":"Guyana",
    "Haiti":"Haiti",
    "Heard Island and McDonald Islands":"HeardIslandandMcDonaldIslands",
    "Honduras":"Honduras",
    "Hong Kong":"HongKong",
    "Hungary":"Hungary",
    "Iceland":"Iceland",
    "India":"India",
    "Indonesia":"Indonesia",
    "Iran":"Iran",
    "Iraq":"Iraq",
    "Ireland":"Ireland",
    "Isle of Man":"IsleofMan",
    "Israel":"Israel",
    "Italy":"Italy",
    "Jamaica":"Jamaica",
    "Japan":"Japan",
    "Jersey":"Jersey",
    "Jordan":"Jordan",
    "Kazakhstan":"Kazakhstan",
    "Kenya":"Kenya",
    "Kiribati":"Kiribati",
    "Kosovo":"Kosovo",
    "Kuwait":"Kuwait",
    "Kyrgyzstan":"Kyrgyzstan",
    "Laos":"Laos",
    "Latvia":"Latvia",
    "Lebanon":"Lebanon",
    "Lesotho":"Lesotho",
    "Liberia":"Liberia",
    "Libya":"Libya",
    "Liechtenstein":"Liechtenstein",
    "Lithuania":"Lithuania",
    "Luxembourg":"Luxembourg",
    "Macau":"Macau",
    "Macedonia":"Macedonia",
    "Madagascar":"Madagascar",
    "Malawi":"Malawi",
    "Malaysia":"Malaysia",
    "Maldives":"Maldives",
    "Mali":"Mali",
    "Malta":"Malta",
    "Marshall Islands":"MarshallIslands",
    "Martinique":"Martinique",
    "Mauritania":"Mauritania",
    "Mauritius":"Mauritius",
    "Mayotte":"Mayotte",
    "Mexico":"Mexico",
    "Micronesia":"Micronesia",
    "Moldova":"Moldova",
    "Monaco":"Monaco",
    "Mongolia":"Mongolia",
    "Montenegro":"Montenegro",
    "Montserrat":"Montserrat",
    "Morocco":"Morocco",
    "Mozambique":"Mozambique",
    "Myanmar":"Myanmar",
    "Namibia":"Namibia",
    "Nauru":"Nauru",
    "Nepal":"Nepal",
    "Netherlands":"Netherlands",
    "New Caledonia":"NewCaledonia",
    "New Zealand":"NewZealand",
    "Nicaragua":"Nicaragua",
    "Niger":"Niger",
    "Nigeria":"Nigeria",
    "Niue":"Niue",
    "Norfolk Island":"NorfolkIsland",
    "Northern Mariana Islands":"NorthernMarianaIslands",
    "North Korea":"NorthKorea",
    "Norway":"Norway",
    "Oman":"Oman",
    "Pakistan":"Pakistan",
    "Palau":"Palau",
    "Panama":"Panama",
    "Papua New Guinea":"PapuaNewGuinea",
    "Paraguay":"Paraguay",
    "Peru":"Peru",
    "Philippines":"Philippines",
    "Pitcairn Islands":"PitcairnIslands",
    "Poland":"Poland",
    "Portugal":"Portugal",
    "Puerto Rico":"PuertoRico",
    "Qatar":"Qatar",
    "Republic of Congo":"RepublicofCongo",
    "Réunion":"Reunion",
    "Romania":"Romania",
    "Russian Federation":"RussianFederation",
    "Rwanda":"Rwanda",
    "Saint Barthélemy":"SaintBarthelemy",
    "Saint Helena":"SaintHelena",
    "St. Kitts and Nevis":"SaintKittsandNevis",
    "Saint Lucia":"SaintLucia",
    "Saint Martin":"SaintMartin",
    "Saint Pierre and Miquelon":"SaintPierreandMiquelon",
    "Saint Vincent and the Grenadines":"SaintVincentandGrenadines",
    "Samoa":"Samoa",
    "San Marino":"SanMarino",
    "São Tomé and Príncipe":"SaoTomeandPrincipe",
    "Saudi Arabia":"SaudiArabia",
    "Senegal":"Senegal",
    "Serbia":"Serbia",
    "Seychelles":"Seychelles",
    "Sierra Leone":"SierraLeone",
    "Singapore":"Singapore",
    "Sint Maarten":"SintMaarten",
    "Slovakia":"Slovakia",
    "Slovenia":"Slovenia",
    "Solomon Islands":"SolomonIslands",
    "Somalia":"Somalia",
    "South Africa":"SouthAfrica",
    "South Georgia And South Sandwich Islands":"SouthGeorgiaAndSouthSandwichIslands",
    "South Korea":"SouthKorea",
    "South Sudan":"SouthSudan",
    "Spain":"Spain",
    "Sri Lanka":"SriLanka",
    "State of Palestine":"StateofPalestine",
    "Sudan":"Sudan",
    "Suriname":"Suriname",
    "Svalbard and Jan Mayen":"SvalbardandJanMayen",
    "Sweden":"Sweden",
    "Switzerland":"Switzerland",
    "Syria":"Syria",
    "Taiwan: Republic of China":"Taiwan",
    "Tajikistan":"Tajikistan",
    "Tanzania":"Tanzania",
    "Thailand":"Thailand",
    "Timor-Leste":"TimorLeste",
    "Togo":"Togo",
    "Tokelau":"Tokelau",
    "Tonga":"Tonga",
    "Trinidad and Tobago":"TrinidadandTobago",
    "Tunisia":"Tunisia",
    "Turkey":"Turkey",
    "Turkish Republic of Northern Cyprus":"TurkishRepublicofNorthernCyprus",
    "Turkmenistan":"Turkmenistan",
    "Turks and Caicos Islands":"TurksandCaicosIslands",
    "Tuvalu":"Tuvalu",
    "Uganda":"Uganda",
    "Ukraine":"Ukraine",
    "United Arab Emirates":"UnitedArabEmirates",
    "United Kingdom":"UnitedKingdom",
    "United States Minor Outlying Islands":"UnitedStatesMinorOutlyingIslands",
    "United States":"UnitedStatesofAmerica",
    "United States Virgin Islands":"UnitedStatesVirginIslands",
    "Uruguay":"Uruguay",
    "Uzbekistan":"Uzbekistan",
    "Vanuatu":"Vanuatu",
    "Vatican City and Holy See":"VaticanCityAndHolySee",
    "Venezuela":"Venezuela",
    "Vietnam":"Vietnam",
    "Wallis and Futuna":"WallisandFutuna",
    "Western Sahara":"WesternSahara",
    "Yemen":"Yemen",
    "Zambia":"Zambia",
    "Zimbabwe":"Zimbabwe"}
