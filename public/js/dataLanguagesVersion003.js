'use strict';

// World Languages Drop Down Values
if (typeof worldLanguagesDropDownValues == 'undefined')
    var worldLanguagesDropDownValues = getWorldLanguagesDropDownValues();
// Application (Page) Name
currentEWorldPage = "Data Languages";

// HTML tags and content creation
var textLanguageBody =  document.createElement("body");
textLanguageBody.setAttribute("name","Text Language");

var textLanguageHeader = document.createElement("header");
textLanguageHeader.setAttribute("id", "id_Header");
textLanguageHeader.setAttribute("class","center");

var textLanguageH1 = document.createElement("h1");
textLanguageH1.setAttribute("id","id_FirstMessage");
textLanguageH1.innerHTML = selectedApplicationLanguageTexts["id_DataLanguages"];

var textLanguageH2 = document.createElement("h2");
addApplicationLanguageSelectionDropDownBox(textLanguageH2);

textLanguageHeader.appendChild(textLanguageH1);
textLanguageHeader.appendChild(textLanguageH2);

var textLanguageMain = document.createElement("main");
textLanguageMain.setAttribute("id","worldFlagsLanguageForm");

var textLanguagePTop = document.createElement("p");
textLanguagePTop.setAttribute("class","center registerH2");

var textLanguageSpanInner = document.createElement("span");
textLanguageSpanInner.setAttribute("id","id_Country");
textLanguageSpanInner.setAttribute("class","appLanguageSelPapaya");
textLanguageSpanInner.innerHTML = selectedApplicationLanguageTexts["id_Country"];

var textLanguageLabel = document.createElement("label");
textLanguageLabel.setAttribute("for","appCountry");

var textLanguageSelect = document.createElement("select");
textLanguageSelect.setAttribute("id","appCountry");
textLanguageSelect.setAttribute("class","selectBoxStyles applicationLanguage resetAnchor appLanguageSel");
textLanguageSelect.appendChild(setFirstOption(selectedApplicationLanguageTexts["id_ChooseOne"], "ChooseOne", textLanguageSelect), true);
if (typeof allCountryNames == 'undefined')
    var allCountryNames = allCountryNames = getAllCountriesNames();
if (typeof allCountryFullNames == 'undefined')
    var allCountryFullNames = getAllCountriesFullNames();
for (var key in allCountryNames) {
    createOneOption(textLanguageSelect, allCountryFullNames[key], allCountryNames[key]);
}

textLanguageLabel.appendChild(textLanguageSelect);
textLanguagePTop.appendChild(textLanguageSpanInner);
textLanguagePTop.appendChild(textLanguageLabel);

var textLanguageSpanInnerTwo = document.createElement("span");
textLanguageSpanInnerTwo.setAttribute("id","id_Language");
textLanguageSpanInnerTwo.setAttribute("class","appLanguageSelPapaya");
textLanguageSpanInnerTwo.innerHTML = selectedApplicationLanguageTexts["id_Language"];

var textLanguageLabelTwo = document.createElement("label");
textLanguageLabelTwo.setAttribute("for","appLanguage");

var textLanguageSelectTwo = document.createElement("select");
textLanguageSelectTwo.setAttribute("id","appLanguage");
textLanguageSelectTwo.setAttribute("class","selectBoxStyles applicationLanguage resetAnchor appLanguageSel");
textLanguageSelectTwo.appendChild(setFirstOption(selectedApplicationLanguageTexts["id_ChooseOne"], "ChooseOne", textLanguageSelectTwo), true);
setOptionsFromSavedData(textLanguageSelectTwo,worldLanguagesDropDownValues);

var textLanguageI = document.createElement("i");
textLanguageI.setAttribute("id","id_SaveStartupValues");
textLanguageI.setAttribute("class","material-icons");
textLanguageI.setAttribute("title",selectedApplicationLanguageTexts["title_SaveStartupValues"]);
textLanguageI.innerHTML = "save"; // this must be lowercase to work

textLanguagePTop.appendChild(textLanguageSpanInnerTwo);
textLanguageLabelTwo.appendChild(textLanguageSelectTwo);
textLanguagePTop.appendChild(textLanguageLabelTwo);
addApplicationLanguageSelectionDropDownBox(textLanguagePTop, "appLanguageToUseB");
textLanguagePTop.appendChild(textLanguageI);
textLanguageMain.appendChild(textLanguagePTop);

var textLanguageForm = document.createElement("form"); // no method='POST' action='/' but AJAX with csrf_field
var textLanguageFieldset = document.createElement("fieldset");
var textLanguageLegend = document.createElement("legend");
textLanguageLegend.innerHTML = "Application Data Language Maintenance";
var textLanguageFormDiv = document.createElement("div");
textLanguageFormDiv.setAttribute("class","languageTable tableExtras margin1ThirdRem");
var textLanguagePlaceHolderTable = document.createElement("table");
textLanguagePlaceHolderTable.setAttribute("id","appLangIntroductionText");
var textLanguageTBody = document.createElement("tbody");
var textLanguageTBodyTr = document.createElement("tr");
var textLanguageTBodyTh = document.createElement("th");
textLanguageTBodyTh.setAttribute("id","id_LanguagePlaceHolder");
textLanguageTBodyTh.innerHTML = selectedApplicationLanguageTexts["id_LanguagePlaceHolder"];
var textLanguageTextTable = document.createElement("table");
textLanguageTextTable.setAttribute("id","appLangTextData");
textLanguageTextTable.setAttribute("class","displayNone");

textLanguageTBodyTr.appendChild(textLanguageTBodyTh);
textLanguageTBody.appendChild(textLanguageTBodyTr);
textLanguagePlaceHolderTable.appendChild(textLanguageTBody);
textLanguageFormDiv.appendChild(textLanguagePlaceHolderTable);
textLanguageFormDiv.appendChild(textLanguageTextTable);
textLanguageFieldset.appendChild(textLanguageLegend);
textLanguageFieldset.appendChild(textLanguageFormDiv);
textLanguageForm.appendChild(textLanguageFieldset);
textLanguageMain.appendChild(textLanguageForm);
// add navigation and footer and load the page (replace the body)
createNavFooterAddIntoBodyAndReplaceBody(textLanguageBody, textLanguageHeader, textLanguageMain);

// variables
var tagsTextsArray;
var numberOfObjects;
var appLanguageInstructionTable;
var appLanguageDataTable;
var applicationLanguageId = -1;
var texts;
var usaTexts;

// including the initial immediate run the Functions.
setTimeout(function () {
    tagsTextsArray = "";
    numberOfObjects = usaAppLanTexts.length;
    appLanguageInstructionTable = document.getElementById('appLangIntroductionText');
    appLanguageDataTable = document.getElementById('appLangTextData');
    // if user enters /languages or use the refresh button:
    if (document.getElementById('appCountry').getElementsByTagName('option').length >0)
        document.getElementById('appCountry').getElementsByTagName('option')[0].selected = 'selected';
    if (document.getElementById('appLanguage').getElementsByTagName('option').length >0)
        document.getElementById('appLanguage').getElementsByTagName('option')[0].selected = 'selected';
    // at the beginning the Language can not be selected up until a Country is selected
    document.getElementById('appLanguage').disabled = true;
    // Add Application Language Events
    // On Application Language Country New Selection, Should not be any Language selected
    document.getElementById("appCountry").addEventListener("change", resetEntry, false);
    // If there is a country and a new language is selected (changed): Retrieve the data
    document.getElementById("appLanguage").addEventListener("change", changeEvents, false);
    // Save Button is selected
    document.getElementById("id_SaveStartupValues").addEventListener("click", clickedSaveButton, false);
}, 250);

// Application Language Drop Down (Select/Options) for Based Application Language Selection: Accent Entry...
setTimeout(function () {
    setApplicationLanguageDropDownBox("appLanguageToUseB", JSON.parse(applicationLanguageDropDownValues),
        startupValuesJSONObject.language);
    document.getElementById("appLanguageToUseB").selectedIndex = 0;
}, 350);

// Application Language Drop Down (Select/Options) for Based Application Language Selection: Accent Entry...
setTimeout(function () {
    setApplicationLanguageDropDownBox("appLanguageToUse", JSON.parse(applicationLanguageDropDownValues),
        startupValuesJSONObject.language);
    document.getElementById("appLanguageToUse").selectedIndex = applicationTextLanguageSelectedIndex;
}, 350);

function clickedSaveButton(event)
{
    // Validate the data: At least One Tag must have a Text
    if (isThereAnEntry())
    {
        setTimeout(function()
        {
            saveApplicationLanguageData();
        }, 600);
    }
    else
    {
        alert("Nothing Entered Yet; Can not be Saved!")
    }
}

function changeEvents(event)
{
    // if "Choose one..." selected, disable Menu tabs and display the example table
    if (document.getElementById("appLanguage").value == "ChooseOne")
    {
        // display the default introduction table text (data)
        if (appLanguageInstructionTable.classList.contains("displayNone"))
            appLanguageInstructionTable.classList.remove("displayNone");
        if (!appLanguageDataTable.classList.contains("displayNone"))
            appLanguageDataTable.classList.add("displayNone");
        applicationLanguageId = -1;
    }
    else
    {
        getThisApplicationLanguageTexts();
        setTimeout(function()
        {
            if (applicationLanguageId != -1) {
                getThisApplicationLanguageData(); // Good: Tex Language found, get/set the Data
                setTimeout(function() {
                    createTheTable();
                }, 400)
            }
        }, 400);
    }
}

function createTheTable() // this should be a method to be shared by Text Language Page...
{
    if (applicationLanguageId != -1) {
        var htmlTableWithTexts = document.createElement("tbody");
        var trElement = document.createElement("tr");
        var thElement = document.createElement("th");
        thElement.setAttribute("id","id_AmericanEnglish");
        thElement.setAttribute("class","languageTH");
        var tdElement = document.createElement("td");
        var labelElement = document.createElement("label");
        var textElement = document.createTextNode(selectedApplicationLanguageTexts["id_AmericanEnglish"]);
        var inputElement = document.createElement("input"); // for About this should be an TextArea...
        thElement.appendChild(textElement) // first one is created above
        trElement.appendChild(thElement) // first one is created above
        thElement = document.createElement("th");
        thElement.setAttribute("id","id_AmericanEnglishInOtherLanguage");
        thElement.setAttribute("class","languageTH");
        textElement = document.createTextNode(selectedApplicationLanguageTexts["id_AmericanEnglishInOtherLanguage"]);
        thElement.appendChild(textElement);
        trElement.appendChild(thElement)
        htmlTableWithTexts.appendChild(trElement);
        insertEachRow(htmlTableWithTexts,trElement,thElement,tdElement,labelElement,textElement,inputElement);
    }
}

function insertEachRow(htmlTableWithTexts,trElement,thElement,tdElement,labelElement,textElement,inputElement)
{
    for (var loop = 0; loop < numberOfObjects; loop++)
    {
        trElement = document.createElement("tr");
        if (loop%2 != 0) trElement.setAttribute("class", "oddRow"); // coloring each row different alternatively
        else trElement.setAttribute("class", "evenRow");
        tdElement = document.createElement("td");
        labelElement = document.createElement("label")
        labelElement.setAttribute("for", "text" + loop);
        labelElement.setAttribute("id", "for_text" + loop);
        textElement = document.createTextNode(usaAppLanTexts[loop]);
        labelElement.appendChild(textElement);
        tdElement.appendChild(labelElement);
        trElement.appendChild(tdElement)
        tdElement = document.createElement("td");
        inputElement = document.createElement("textarea");
        inputElement.setAttribute("class","languageInput");
        inputElement.setAttribute("id", "text" + loop);
        inputElement.setAttribute("type", "text");
        inputElement.setAttribute("autofocus", true);
        if (tagsTextsArray == null || tagsTextsArray == "[]" || tagsTextsArray == "no row") {} // no data yet
        else { if (tagsTextsArray[loop]) inputElement.innerHTML = tagsTextsArray[loop].this_language_feature_value; }
        tdElement.appendChild(inputElement);
        trElement.appendChild(tdElement);
        htmlTableWithTexts.appendChild(trElement);
    }
    setTheTable(htmlTableWithTexts);
}

function setTheTable(htmlTableWithTexts)
{
    if (appLanguageDataTable.firstChild)
    {
        appLanguageDataTable.removeChild(appLanguageDataTable.firstChild);
    }
    appLanguageDataTable.appendChild(htmlTableWithTexts);
    if (!appLanguageInstructionTable.classList.contains("displayNone"))
    appLanguageInstructionTable.classList.add("displayNone");
    if (appLanguageDataTable.classList.contains("displayNone"))
        appLanguageDataTable.classList.remove("displayNone");
    document.getElementById('id_SaveStartupValues').disabled = false;
}

// saving this Application Language
function saveApplicationLanguageData()
{
    var applicationLanguageBasedId;
    if (document.getElementById("appLanguageToUseB").value.lastIndexOf("appLanguageToUseOption") != -1) {
        applicationLanguageBasedId = document.getElementById("appLanguageToUseB").value.substring(22);
    }
    else applicationLanguageBasedId = 999;
    var xhttpsaveTagsData = new XMLHttpRequest();
    var dataWorlds = new FormData();
    getTagIdTextsArray();
    dataWorlds.append("applicationLanguageId", applicationLanguageId);
    dataWorlds.append("applicationLanguageBasedId", applicationLanguageBasedId);
    dataWorlds.append("texts", texts);
    xhttpsaveTagsData.onreadystatechange = function() // On Ready State Change
    {
        if (xhttpsaveTagsData.readyState == 4 && xhttpsaveTagsData.status == 200)
        {
            // if applicationLanguageId == applicationTextLanguageSelectedIndex (same in testLanguagesVersion...)
            // ===> trigger "appLanguageToUse" change event (as if the Application Text Language is changed!)
            return (xhttpsaveTagsData.responseText == "success") ? true : false;
        }
    };
    // Pass: the application_language_id country and language ids
    xhttpsaveTagsData.open("POST", "/ajax/data/saveCreate", true);
    xhttpsaveTagsData.setRequestHeader('X-CSRF-TOKEN', document.getElementsByName('csrf-token')[0].getAttribute('content'));
    xhttpsaveTagsData.send(dataWorlds); // Start the Ajax Communication (call PHP program through Route => Controller)
}

// Retrieve the Application Text Language It must exist: The Application Text Language in order to enter the Application Data Language
function getThisApplicationLanguageTexts()
{
    // Get the selected Language Texts from the database: Must be
    var xhttploadTagsTexts = new XMLHttpRequest();
    // into an Array of "tag" => "text"
    tagsTextsArray = [];
    // On Ready State Change
    xhttploadTagsTexts.onreadystatechange = function()
    {
        if (xhttploadTagsTexts.readyState == 4 && xhttploadTagsTexts.status == 200)
        {
            tagsTextsArray = xhttploadTagsTexts.responseText;
            if (tagsTextsArray == "no row") {
                alert("The Application Text Language must be Defined prior to any Data Language entry!");
                applicationLanguageId = -1;
            }
            else {
                tagsTextsArray = JSON.parse(tagsTextsArray);
                if (tagsTextsArray.length > 0) {
                    applicationLanguageId = tagsTextsArray[0].application_language_id;
                }
            }
        }
    };
    xhttploadTagsTexts.open("GET", "/ajax/texts?countryId="
        +document.getElementById("appCountry").selectedIndex
        +"&languageId="
        +document.getElementById("appLanguage").selectedIndex, true);
    // Start the Ajax Communication (call PHP program through Route => Controller)
    xhttploadTagsTexts.send();
}

// Retrieve the Application Data Language (if any) and Set Up the Selected Application Language Data for the Page
function getThisApplicationLanguageData()
{
    // Get the Selected Language Data from the database if any
    var xhttploadTagsData = new XMLHttpRequest();
    // into an Array of "tag" => "text"
    tagsTextsArray = [];
    // On Ready State Change
    xhttploadTagsData.onreadystatechange = function()
    {
        if (xhttploadTagsData.readyState == 4 && xhttploadTagsData.status == 200)
        {
            tagsTextsArray = xhttploadTagsData.responseText;
            if (tagsTextsArray == "[]" || tagsTextsArray == "no row") {
                // no data yet (never saved!)
            }
            else {
                tagsTextsArray = JSON.parse(tagsTextsArray);
                var basedOnId = tagsTextsArray[0].based_on_application_language_id;
                if (basedOnId != 999) {
                    document.getElementById("appLanguageToUseB").selectedIndex = basedOnId;
                }
            }
        }
    };
    xhttploadTagsData.open("GET", "/ajax/data?applicationLanguageId="+applicationLanguageId, true);
    // Start the Ajax Communication (call PHP program through Route => Controller)
    xhttploadTagsData.send();
}

function isThereAnEntry()
{
    if (!document.getElementById("text0")) return false; // no table created yet
    // Read all the Table Text
    var tdId = "";
    for (var loop = 0; loop < numberOfObjects; loop++)
    {
        tdId = "text" + loop;
        if (document.getElementById(tdId).value.trim().length > 0)
        {
            return true;
        }
    }
    return false;
}

function getTagIdTextsArray()
{
    // Read all the Table Text
    texts = ""; // a string with | to explode
    for (var loop = 0; loop < numberOfObjects; loop++)
    {
        texts += document.getElementById("text" + loop).value.trim() + "|";
    }
    // remove the last one otherwise there will be one empty one...
    texts = texts.substring(0, texts.lastIndexOf("|"));
}

function resetEntry()
{
    document.getElementById('appLanguage').getElementsByTagName('option')[0].selected = 'selected';
    // up until a Country is selected and it is not "choose": disable the Language selection
    // "Choose one..." can not be used: Text in the Application Language
    document.getElementById('appLanguage').disabled = (document.getElementById('appCountry').value == "choose") ? true : false;
    // Country Change: Put the Table into Demo Mode
    // display the default introduction table text (data)
    if (appLanguageInstructionTable.classList.contains("displayNone"))
        appLanguageInstructionTable.classList.remove("displayNone");
    if (!appLanguageDataTable.classList.contains("displayNone"))
        appLanguageDataTable.classList.add("displayNone");
}

/*
    (1) from Feature table all unique words
    (2) low, medium, how for Gini
    (3) Country Full Names, Short Names (can be one name for all 3 fields)

    select distinct concat('"',feature,": ",value,'",')
    from features where value > " " and (
        feature = 'DrivingSide' or
        feature = 'Currency' or
        feature = 'CapitalCities' or
        feature = 'LanguageDisplay' or
        feature = 'Language' or
        feature = 'Water' or
        feature = 'WaterDisplay' or
        feature = 'Religion' or
        feature = 'ReligionDisplay' or
        feature = 'Region' or
        feature = 'Color' or
        feature = 'Shape')
    order by value;

 */
var usaAppLanTexts = [ // for Gini: low/medium/high
    'Low: low',
    'Medium: medium',
    'High: high',
    /*
    select distinct concat("'",short_name,"':'",long_name,"',") from countries;
    */
    'Afghanistan','Afghanistan', // from Country table: full name or short name (all can be the same: Spain, Turkey, Slovakia...)
    'Aland: Åland','Aland: Åland Islands',
    'Albania','Albania',
    'Algeria','Algeria',
    'US Samoa','American Samoa',
    'Andorra','Andorra',
    'Angola','Angola',
    'Anguilla','Anguilla',
    'Antarctic','Antarctic Treaty System',
    'Antigua','Antigua and Barbuda',
    'Argentina','Argentina',
    'Armenia','Armenia',
    'Aruba','Aruba',
    'Australia','Australia',
    'Austria','Austria',
    'Azerbaijan','Azerbaijan',
    'Bahamas','Bahamas',
    'Bahrain','Bahrain',
    'Bangladesh','Bangladesh',
    'Barbados','Barbados',
    'Belarus','Belarus',
    'Belgium','Belgium',
    'Belize','Belize',
    'Benin','Benin',
    'Bermuda','Bermuda',
    'Bhutan','Bhutan',
    'Bolivia','Bolivia',
    'Bonaire','Bonaire Sint Eustatius and Saba',
    'Bosnia','Bosnia and Herzegovina',
    'Botswana','Botswana',
    'Bouvet','Bouvet Island',
    'Brazil','Brazil',
    'UK Indian','British Indian Ocean Territory',
    'BVI','British Virgin Islands',
    'Brunei','Brunei',
    'Bulgaria','Bulgaria',
    'Burkina Faso','Burkina Faso',
    'Burundi','Burundi',
    'Cambodia','Cambodia',
    'Cameroon','Cameroon',
    'Canada','Canada',
    'Canary','Canary Islands',
    'Cabo Verde','Cabo Verde',
    'Cayman','Cayman Islands',
    'CAR','Central African Republic',
    'Chad','Chad',
    'Chile','Chile',
    'China','China',
    'Christmas','Christmas Island',
    'Cocos','Cocos Islands',
    'Colombia','Colombia',
    'Comoros','Comoros',
    'Cook','Cook Islands',
    'Costa Rica','Costa Rica',
    "Côte d'Ivoire","Côte d'Ivoire",
    'Croatia','Croatia',
    'Cuba','Cuba',
    'Curaçao','Curaçao',
    'Cyprus','Cyprus',
    'Czechia','Czechia',
    'DR Congo','Democratic Republic of the Congo',
    'Denmark','Denmark',
    'Djibouti','Djibouti',
    'Dominica','Dominica',
    'Dominican','Dominican Republic',
    'Ecuador','Ecuador',
    'Egypt','Egypt',
    'El Salvador','El Salvador',
    'E Guinea','Equatorial Guinea',
    'Eritrea','Eritrea',
    'Estonia','Estonia',
    'Eswatini','Eswatini',
    'Ethiopia','Ethiopia',
    'Falkland','Falkland Islands',
    'Faroe','Faroe Islands',
    'Fiji','Fiji',
    'Finland','Finland',
    'France','France',
    'Guiana','French Guiana',
    'Polynesia','French Polynesia',
    'Fr Antarctic','French Southern and Antarctic Lands',
    'Gabon','Gabon',
    'Gambia','Gambia',
    'Georgia','Georgia',
    'Germany','Germany',
    'Ghana','Ghana',
    'Gibraltar','Gibraltar',
    'Greece','Greece',
    'Greenland','Greenland',
    'Grenada','Grenada',
    'Guadeloupe','Guadeloupe',
    'Guam','Guam',
    'Guatemala','Guatemala',
    'Guernsey','Guernsey',
    'Guinea','Guinea',
    'Guinea Bissau','Guinea-Bissau',
    'Guyana','Guyana',
    'Haiti','Haiti',
    'H McDonald','Heard Island and McDonald Islands',
    'Honduras','Honduras',
    'Hong Kong','Hong Kong',
    'Hungary','Hungary',
    'Iceland','Iceland',
    'India','India',
    'Indonesia','Indonesia',
    'Iran','Iran',
    'Iraq','Iraq',
    'Ireland','Ireland',
    'Isle of Man','Isle of Man',
    'Israel','Israel',
    'Italy','Italy',
    'Jamaica','Jamaica',
    'Japan','Japan',
    'Jersey','Jersey',
    'Jordan','Jordan',
    'Kazakhstan','Kazakhstan',
    'Kenya','Kenya',
    'Kiribati','Kiribati',
    'Kosovo','Kosovo',
    'Kuwait','Kuwait',
    'Kyrgyzstan','Kyrgyzstan',
    'Laos','Laos',
    'Latvia','Latvia',
    'Lebanon','Lebanon',
    'Lesotho','Lesotho',
    'Liberia','Liberia',
    'Libya','Libya',
    'Liechtenstein','Liechtenstein',
    'Lithuania','Lithuania',
    'Luxembourg','Luxembourg',
    'Macau','Macau',
    'Macedonia','Macedonia',
    'Madagascar','Madagascar',
    'Malawi','Malawi',
    'Malaysia','Malaysia',
    'Maldives','Maldives',
    'Mali','Mali',
    'Malta','Malta',
    'Marshall','Marshall Islands',
    'Martinique','Martinique',
    'Mauritania','Mauritania',
    'Mauritius','Mauritius',
    'Mayotte','Mayotte',
    'Mexico','Mexico',
    'Micronesia','Micronesia',
    'Moldova','Moldova',
    'Monaco','Monaco',
    'Mongolia','Mongolia',
    'Montenegro','Montenegro',
    'Montserrat','Montserrat',
    'Morocco','Morocco',
    'Mozambique','Mozambique',
    'Myanmar','Myanmar',
    'Namibia','Namibia',
    'Nauru','Nauru',
    'Nepal','Nepal',
    'Netherlands','Netherlands',
    'N Caledonia','New Caledonia',
    'N Zealand','New Zealand',
    'Nicaragua','Nicaragua',
    'Niger','Niger',
    'Nigeria','Nigeria',
    'Niue','Niue',
    'Norfolk','Norfolk Island',
    'Mariana','Northern Mariana Islands',
    'North Korea','North Korea',
    'Norway','Norway',
    'Oman','Oman',
    'Pakistan','Pakistan',
    'Palau','Palau',
    'Panama','Panama',
    'P N Guinea','Papua New Guinea',
    'Paraguay','Paraguay',
    'Peru','Peru',
    'Philippines','Philippines',
    'Pitcairn','Pitcairn Islands',
    'Poland','Poland',
    'Portugal','Portugal',
    'Puerto Rico','Puerto Rico',
    'Qatar','Qatar',
    'Rep Congo','Republic of Congo',
    'Réunion','Réunion',
    'Romania','Romania',
    'Russia','Russian Federation',
    'Rwanda','Rwanda',
    'Barthélemy','Saint Barthélemy',
    'St Helena','Saint Helena',
    'St Kitts','St. Kitts & Nevis',
    'St Lucia','Saint Lucia',
    'St Martin','Saint Martin',
    'St Pierre','Saint Pierre and Miquelon',
    'St Vincents','Saint Vincent and the Grenadines',
    'Samoa','Samoa',
    'San Marino','San Marino',
    'São Tomé','São Tomé and Príncipe',
    'Saudi Arabia','Saudi Arabia',
    'Senegal','Senegal',
    'Serbia','Serbia',
    'Seychelles','Seychelles',
    'Sierra Leone','Sierra Leone',
    'Singapore','Singapore',
    'St Maarten','Sint Maarten',
    'Slovakia','Slovakia',
    'Slovenia','Slovenia',
    'Solomon','Solomon Islands',
    'Somalia','Somalia',
    'South Africa','South Africa',
    'S Georgia','South Georgia And South Sandwich Islands',
    'South Korea','South Korea',
    'S Sudan','South Sudan',
    'Spain','Spain',
    'Sri Lanka','Sri Lanka',
    'Palestine','State of Palestine',
    'Sudan','Sudan',
    'Suriname','Suriname',
    'Svalbard','Svalbard and Jan Mayen',
    'Sweden','Sweden',
    'Switzerland','Switzerland',
    'Syria','Syria',
    'Taiwan','Taiwan: Republic of China',
    'Tajikistan','Tajikistan',
    'Tanzania','Tanzania',
    'Thailand','Thailand',
    'Timor Leste','Timor-Leste',
    'Togo','Togo',
    'Tokelau','Tokelau',
    'Tonga','Tonga',
    'Trinidad','Trinidad and Tobago',
    'Tunisia','Tunisia',
    'Turkey','Turkey',
    'TRNC','Turkish Republic of Northern Cyprus',
    'Turkmenistan','Turkmenistan',
    'Turks Caicos','Turks and Caicos Islands',
    'Tuvalu','Tuvalu',
    'Uganda','Uganda',
    'Ukraine','Ukraine',
    'UAE','United Arab Emirates',
    'UK','United Kingdom',
    'US Minor','United States Minor Outlying Islands',
    'USA','United States',
    'USVI','United States Virgin Islands',
    'Uruguay','Uruguay',
    'Uzbekistan','Uzbekistan',
    'Vanuatu','Vanuatu',
    'Vatican','Vatican City and Holy See',
    'Venezuela','Venezuela',
    'Vietnam','Vietnam',
    'Wallis','Wallis and Futuna',
    'West Sahara','Western Sahara',
    'Yemen','Yemen',
    'Zambia','Zambia',
    'Zimbabwe','Zimbabwe',
    // from Feature table
    "Currency: $ Dollar",
    "Currency: $ USD",
    "Currency: € EURO",
    "CapitalCities: Abu Dhabi",
    "CapitalCities: Abuja",
    "CapitalCities: Accra",
    "CapitalCities: Adamstown",
    "CapitalCities: Addis Ababa",
    "Water: Adriatic",
    "Water: Aegean",
    "Currency: Afgani AFN",
    "Region: Africa",
    "Language: Afrikaans",
    "Religion: Agnostic",
    "Language: Albanian",
    "Currency: Albanian LEK",
    "CapitalCities: Algiers",
    "CapitalCities: Alofi",
    "Shape: Alpaca",
    "Language: Amharic",
    "CapitalCities: Amman",
    "CapitalCities: Amsterdam",
    "Shape: Anchor",
    "Water: Andaman",
    "CapitalCities: Andorra la Vella",
    "Currency: ANG",
    "Shape: Angkor Wat",
    "Shape: Animal",
    "Religion: Animism",
    "CapitalCities: Ankara",
    "CapitalCities: Antananarivo",
    "Water: Antarctic",
    "Language: Antillean Creole",
    "CapitalCities: Apia",
    "Water: Arabian",
    "Language: Arabic",
    "Shape: Arabic",
    "Water: Arafura",
    "Water: Arctic",
    "Currency: Ariary MGA",
    "Language: Armenian",
    "Shape: Armillary sphere",
    "Shape: Armour",
    "Shape: Armoured",
    "Shape: Arrow",
    "Shape: Arrowhead",
    "Language: Asante",
    "CapitalCities: Ashgabat",
    "Region: Asia",
    "CapitalCities: Asmara",
    "Language: Assamese",
    "CapitalCities: Astana",
    "CapitalCities: Asunción",
    "CapitalCities: Athens",
    "Water: Atlantic",
    "Currency: AU$ AUD",
    "Currency: AUD",
    "Currency: Australian Dollar AUD",
    "CapitalCities: Avarua",
    "Shape: Axe",
    "Language: Aymara",
    "Language: Azerbaijani",
    "CapitalCities: Baghdad",
    "Language: Bahasa",
    "Language: Bahasa Indonesia",
    "Currency: Baht THB",
    "Language: Bajan",
    "CapitalCities: Baku",
    "Currency: Balboa PAB",
    "Water: Bali",
    "Water: Baltic",
    "CapitalCities: Bamako",
    "Language: Bambara",
    "Shape: Banana",
    "Shape: Band",
    "Water: Banda",
    "CapitalCities: Bandar Seri Begawan",
    "CapitalCities: Bangkok",
    "Language: Bangla",
    "CapitalCities: Bangui",
    "CapitalCities: Banjul",
    "Shape: Bar",
    "Water: Barent",
    "Shape: Barrel",
    "Language: Base Nations",
    "CapitalCities: Basse-Terre",
    "CapitalCities: Basseterre",
    "Shape: Bay",
    "Shape: Bay laurel",
    "Water: Bay of Bengal",
    "Water: Bay of Biscay",
    "Shape: Bayonet",
    "CapitalCities: Beijing",
    "CapitalCities: Beirut",
    "Language: Belarusian",
    "CapitalCities: Belgrade",
    "CapitalCities: Belmopan",
    "Language: Bemba",
    "Language: Bengali",
    "Water: Bering",
    "Water: Bering Seas",
    "CapitalCities: Berlin",
    "CapitalCities: Bern",
    "Language: Bhojpuri",
    "Shape: Bible",
    "Shape: Bird",
    "Currency: Birr ETB",
    "CapitalCities: Bishkek",
    "Language: Bislama",
    "Water: Bismarck",
    "CapitalCities: Bissau",
    "Color: Black",
    "Water: Black",
    "CapitalCities: Bloemfontein",
    "Color: Blue",
    "CapitalCities: Bogota",
    "Currency: Bolívar VEF",
    "Currency: Boliviano BOB",
    "Shape: Book",
    "Shape: Border",
    "Language: Bosnian",
    "Shape: Bow",
    "CapitalCities: Brades",
    "Shape: Branch",
    "CapitalCities: Brasilia",
    "CapitalCities: Bratislava",
    "CapitalCities: Brazzaville",
    "Shape: Bridge",
    "CapitalCities: Bridgetown",
    "Shape: British-Flag",
    "Color: Brown",
    "CapitalCities: Brussels",
    "CapitalCities: Bucharest",
    "CapitalCities: Budapest",
    "Religion: Buddhism",
    "CapitalCities: Buenos Aires",
    "Shape: Bugle",
    "Shape: Building",
    "CapitalCities: Bujumbura",
    "Language: Bulgarian",
    "Language: Burmese",
    "Shape: Cacao",
    "Shape: Cactus",
    "CapitalCities: Cairo",
    "CapitalCities: Camp Justice",
    "CapitalCities: Canberra",
    "Shape: Candor",
    "Shape: Cannon",
    "Shape: Canoe",
    "Shape: Canton",
    "Shape: Cap",
    "CapitalCities: Cape Town",
    "CapitalCities: Caracas",
    "Water: Caribbean",
    "Shape: Carpet",
    "Water: Carribbean",
    "Water: Caspian",
    "Shape: Castle",
    "CapitalCities: Castries",
    "Language: Catalan",
    "CapitalCities: Cayenne",
    "Shape: Cedar",
    "Currency: Cedi GHS",
    "Water: Celebes",
    "Water: Celtic",
    "Water: Ceram",
    "Shape: Chain",
    "Language: Chamorro",
    "CapitalCities: Charlotte Amalie",
    "Language: Chichewa",
    "CapitalCities: Chișinău",
    "Religion: Christianity",
    "Water: Chukchi",
    "Shape: Circle",
    "Shape: Clove",
    "Shape: Coat of Arms",
    "CapitalCities: Cockburn Town",
    "Shape: Cocoa",
    "Shape: Coconut",
    "Shape: Coin",
    "CapitalCities: Colombo",
    "Currency: Colon CRC",
    "Currency: Colon SVC",
    "Shape: Compass",
    "CapitalCities: Conakry",
    "Shape: Condor",
    "Religion: Confucianism",
    "CapitalCities: Copenhagen",
    "Shape: Cord",
    "Shape: Cornucopia",
    "Shape: Courthouse",
    "Shape: Cow",
    "Shape: Crane",
    "Language: Creole",
    "Shape: Crescent",
    "Shape: Crest",
    "Language: Crioulo",
    "Language: Croatian",
    "Shape: Cross",
    "Shape: Crown",
    "Shape: Crux",
    "Language: Czech",
    "Shape: Dagger",
    "CapitalCities: Dakar",
    "Currency: Dalasi GMD",
    "CapitalCities: Damascus",
    "Language: Danish",
    "Language: Dari",
    "Currency: Denar MKD",
    "CapitalCities: Dhaka",
    "Language: Dhivehi",
    "Shape: Diagonal",
    "Shape: Diamond",
    "CapitalCities: Dili",
    "Currency: Dinar BHD",
    "Currency: Dinar DZD",
    "Currency: Dinar IQD",
    "Currency: Dinar JOD",
    "Currency: Dinar KWD",
    "Currency: Dinar LYD",
    "Currency: Dinar RSD",
    "Currency: Dinar TND",
    "Language: Dioula",
    "Currency: Dirham AED",
    "Currency: Dirham MAD",
    "CapitalCities: Djibouti",
    "Currency: DKK",
    "CapitalCities: Dodoma",
    "Shape: Dog",
    "CapitalCities: Doha",
    "Currency: Dollar AUD",
    "Currency: Dollar BBD",
    "Currency: Dollar BMD",
    "Currency: Dollar BND",
    "Currency: Dollar BSD",
    "Currency: Dollar BZD",
    "Currency: Dollar CAD",
    "Currency: Dollar FJD",
    "Currency: Dollar GYD",
    "Currency: Dollar JMD",
    "Currency: Dollar LRD",
    "Currency: Dollar NAD",
    "Currency: Dollar SGD",
    "Currency: Dollar SRD",
    "Currency: Dollar TTD",
    "Currency: Dollar ZWL",
    "Shape: Dolphin",
    "Currency: Dong VND",
    "Shape: Double Cross",
    "CapitalCities: Douglas",
    "Shape: Dove",
    "Shape: Dragon",
    "Currency: Dram AMD",
    "Shape: Drum",
    "Religion: Druze",
    "CapitalCities: Dublin",
    "CapitalCities: Dushanbe",
    "Language: Dutch",
    "Language: Dzongkha",
    "Shape: Eagle",
    "Water: East China",
    "CapitalCities: East Jerusalem",
    "Water: East Siberian",
    "Currency: EGP ILS JOD",
    "Shape: Eight-Pointed Star",
    "CapitalCities: El Aaiún",
    "Language: Emakhuwa",
    "Shape: Emblem",
    "Language: English",
    "Shape: English",
    "Water: English Channel",
    "Shape: Equilateral",
    "Currency: Escudo CVE",
    "Shape: Estoile",
    "Language: Estonian",
    "Currency: Euro €",
    "Region: Europe",
    "Language: Ewe",
    "Shape: Face",
    "Language: Fante",
    "Shape: Feather",
    "Shape: Female",
    "Shape: Fern",
    "Language: Fijian",
    "Language: Filipino",
    "Shape: Fimbriation",
    "Language: Finnish",
    "Shape: Fire",
    "Shape: Five-Petal",
    "Shape: Five-Pointed Star",
    "Currency: FKP",
    "Shape: Flag",
    "Shape: Fleurs-de-lys",
    "Water: Flores",
    "Currency: Florin AWG",
    "Shape: Flower",
    "Shape: Fly whisk",
    "CapitalCities: Flying Fish Cove",
    "Religion: Folk",
    "Currency: Forint HUF",
    "CapitalCities: Fort-de-France",
    "Shape: Forteen-Points Star",
    "Shape: Four-Pointed Star",
    "Currency: Franc BIF",
    "Currency: Franc CDF",
    "Currency: Franc CHF",
    "Currency: Franc DJF",
    "Currency: Franc GNF",
    "Currency: Franc KMF",
    "Currency: Franc RWF",
    "Currency: Franc XAF",
    "Currency: Franc XOF",
    "Currency: Franc XPF",
    "Currency: Frank XAF",
    "CapitalCities: Freetown",
    "Language: French",
    "Shape: French",
    "Shape: Fruit",
    "Language: Fula",
    "CapitalCities: Funafuti",
    "CapitalCities: Gaborone",
    "Language: Gaelic",
    "Language: Ganda",
    "CapitalCities: Garapan",
    "Currency: GBP",
    "Shape: Gear",
    "Shape: George",
    "CapitalCities: George Town",
    "CapitalCities: Georgetown",
    "Language: Georgian",
    "Language: German",
    "Currency: GGP",
    "CapitalCities: Gibraltar",
    "Currency: GIP",
    "Shape: Globe",
    "Shape: Goat",
    "Currency: Gourde HTG",
    "Shape: Grass",
    "Color: Gray",
    "Language: Greek",
    "Color: Green",
    "Language: Greenlandic",
    "Language: Guarani",
    "Currency: Guarani PYG",
    "CapitalCities: Guatemala City",
    "Language: Gujarati",
    "Water: Gulf of Aden",
    "Water: Gulf of Aqaba",
    "Water: Gulf of California",
    "Water: Gulf of Guinea",
    "Water: Gulf of Mexico",
    "Water: Gulf of Oman",
    "Water: Gulf of Thailand",
    "Water: Gulf of Thailand and Pacific Ocean",
    "CapitalCities: Gustavia",
    "CapitalCities: Hagåtña",
    "Water: Halmahera",
    "CapitalCities: Hamilton",
    "Shape: Hand",
    "CapitalCities: Hanoi",
    "CapitalCities: Harare",
    "Shape: Harp",
    "Shape: Hat",
    "CapitalCities: Havana",
    "Shape: Head",
    "Language: Hebrew",
    "Shape: Helmet",
    "CapitalCities: Helsinki",
    "Shape: Hexagram",
    "Shape: Hill",
    "Language: Hindi",
    "Religion: Hinduism",
    "Language: Hiri Motu",
    "Currency: HKD",
    "CapitalCities: Hong Kong",
    "CapitalCities: Honiara",
    "Shape: Hood",
    "Shape: Horizontal",
    "Shape: Horn",
    "Currency: Hryvnia UAH",
    "Shape: Human Face",
    "Language: Hungarian",
    "Language: I-Kiribati",
    "Shape: Ice",
    "Language: Icelandic",
    "Water: Indian",
    "Water: Indian Oceans",
    "Religion: Indigenous",
    "Language: Indonesian",
    "Water: Ionian",
    "Water: Irish",
    "Language: Irish",
    "Language: isiZulu",
    "Religion: Islam",
    "CapitalCities: Islamabad",
    "Shape: Isosceles",
    "Language: Italian",
    "CapitalCities: Jakarta",
    "CapitalCities: Jamestown",
    "Language: Japanese",
    "Water: Java",
    "Language: Javanese",
    "CapitalCities: Jerusalem",
    "Shape: Jewel",
    "CapitalCities: Juba",
    "Religion: Judism",
    "CapitalCities: Kabul",
    "CapitalCities: Kampala",
    "Language: Kannada",
    "Water: Kara",
    "Language: Kashmiri",
    "CapitalCities: Kathmandu",
    "Language: Kazakh",
    "Shape: Key",
    "CapitalCities: Khartoum",
    "Language: Khmer",
    "CapitalCities: Kigali",
    "Currency: Kina PGK",
    "CapitalCities: King Edward Point",
    "CapitalCities: Kingston-JM",
    "CapitalCities: Kingston-NF",
    "CapitalCities: Kingstown",
    "CapitalCities: Kinshasa",
    "Language: Kinyarwanda",
    "Currency: Kip LAK",
    "Language: Kirundi",
    "Language: Korean",
    "Currency: Koruna CZK",
    "CapitalCities: Kralendijk",
    "Language: Krio",
    "Currency: Krona ISK",
    "Currency: Krona SEK",
    "Currency: Krone DKK",
    "Currency: Krone NOK",
    "CapitalCities: Kuala Lumpur",
    "Shape: Kufic",
    "Currency: Kuna HRK",
    "Language: Kurdish",
    "CapitalCities: Kuwait City",
    "Currency: Kwacha MWK",
    "Currency: Kwacha ZMW",
    "Currency: Kwanza AOA",
    "Currency: Kyat MMK",
    "Currency: KYD",
    "CapitalCities: Kyiv",
    "Language: Kyrgyz",
    "CapitalCities: La Paz",
    "Water: Laccadive",
    "Shape: Lady",
    "Water: Lake Malawi",
    "Water: Lake Victoria",
    "Shape: Lama",
    "Shape: Lamp",
    "Water: Landlocked",
    "Language: Lao",
    "Water: Laptev",
    "Currency: Lari GEL",
    "CapitalCities: Las Palmas",
    "Shape: Latin",
    "Language: Latvian",
    "Shape: Laurel",
    "Shape: Leaf",
    "DrivingSide: Left",
    "Shape: Leg",
    "Currency: Lempira HNL",
    "Currency: Leone SLL",
    "Shape: Leopard",
    "Currency: Leu MDL",
    "Currency: Leu RON",
    "Language: Lhotshamkha",
    "CapitalCities: Libreville",
    "Water: Ligurian",
    "Currency: Lilangeni SZL",
    "CapitalCities: Lilongwe",
    "CapitalCities: Lima",
    "Shape: Line",
    "Language: Lingala",
    "Shape: Lion",
    "CapitalCities: Lisbon",
    "Language: Lithuanian",
    "CapitalCities: Ljubljana",
    "CapitalCities: Lobamba",
    "Shape: Lobster",
    "CapitalCities: Lomé",
    "CapitalCities: London",
    "CapitalCities: Longyearbyen",
    "Currency: Loti LSL",
    "Shape: Lotus",
    "CapitalCities: Luanda",
    "Language: Luganda",
    "CapitalCities: Lusaka",
    "CapitalCities: Luxembourg",
    "Language: Luxembourgish",
    "CapitalCities: Macau",
    "Language: Macedonian",
    "Shape: Machete",
    "CapitalCities: Madrid",
    "Shape: Mahogany",
    "Language: Maithali",
    "CapitalCities: Majuro",
    "Language: Makasai",
    "CapitalCities: Malabo",
    "Language: Malagasy",
    "Language: Malay",
    "Language: Malayalam",
    "CapitalCities: Malé",
    "Language: Maltese",
    "Language: Mambai",
    "CapitalCities: Mamoudzou",
    "CapitalCities: Managua",
    "CapitalCities: Manama",
    "Currency: Manat AZN",
    "Currency: Manat TMT",
    "Language: Mandarin",
    "Language: Mandinka",
    "Shape: Mango",
    "CapitalCities: Manila",
    "Shape: Mantle",
    "Shape: Map",
    "Shape: Maple",
    "CapitalCities: Maputo",
    "Language: Marathi",
    "CapitalCities: Mariehamn",
    "CapitalCities: Marigot",
    "Currency: Mark BAM",
    "Water: Marmara",
    "Color: Maroon",
    "Language: Marshallese",
    "CapitalCities: Maseru",
    "CapitalCities: Matu-Utu",
    "Language: Maya",
    "CapitalCities: Mbabane",
    "Water: Mediterranean",
    "Language: Melanesian pidgin",
    "CapitalCities: Melekeok",
    "Language: Mende",
    "CapitalCities: Mexico City",
    "CapitalCities: Minsk",
    "Shape: Miro",
    "CapitalCities: Mogadishu",
    "Language: Moldovan",
    "Water: Molucca",
    "CapitalCities: Monaco",
    "Language: Mongolian",
    "Language: Monokutuba",
    "CapitalCities: Monrovia",
    "Language: Montenegrin",
    "CapitalCities: Montevideo",
    "Shape: Monument",
    "Shape: Moon",
    "Currency: MOP",
    "CapitalCities: Moroni",
    "CapitalCities: Moscow",
    "Shape: Mountain",
    "Shape: Mullet",
    "CapitalCities: Muscat",
    "CapitalCities: N'Djamena",
    "CapitalCities: N/A-AQ",
    "CapitalCities: N/A-BV",
    "CapitalCities: N/A-HM",
    "Currency: Naira NGN",
    "CapitalCities: Nairobi",
    "Currency: Nakfa ERN",
    "Shape: Namele",
    "CapitalCities: Nassau",
    "Water: Natuna",
    "Language: Nauruan",
    "Language: Nawat",
    "CapitalCities: Nay Pyi Taw",
    "Language: Ndebele",
    "Language: Nepali",
    "CapitalCities: New Delhi",
    "Currency: Ngultrum BTN",
    "CapitalCities: Niamey",
    "CapitalCities: Nicosia",
    "Language: Niuean",
    "Currency: NOK",
    "CapitalCities: NONE",
    "Water: North",
    "Region: North America",
    "CapitalCities: North Nicosia",
    "Region: NorthAmerica",
    "Language: Norwegian",
    "Water: Norwegian",
    "CapitalCities: Nouakchott",
    "CapitalCities: Nouméa",
    "Currency: NT$ TWD",
    "CapitalCities: Nuku'alofa",
    "Shape: Nutmeg",
    "CapitalCities: Nuuk",
    "Language: Nyanja",
    "Currency: NZD",
    "Shape: Oak",
    "Shape: Oar",
    "Shape: Oblique",
    "Shape: Ocean",
    "Region: Oceania",
    "Shape: Olive",
    "Currency: Omani OMR",
    "Color: Orange",
    "CapitalCities: Oranjestad",
    "Language: Oriya",
    "Shape: Ornament",
    "Currency: Oro NIO",
    "Language: Oromo",
    "CapitalCities: Oslo",
    "Shape: Ostrich-plume",
    "CapitalCities: Ottawa",
    "CapitalCities: Ouagadougou",
    "Currency: Ouguiya MRO",
    "Currency: Pa'anga TOP",
    "Water: Pacific",
    "CapitalCities: Pago Pago",
    "Language: Palauan",
    "CapitalCities: Palikir",
    "Shape: Palm",
    "CapitalCities: Panama City",
    "Shape: Papal tiara",
    "CapitalCities: Papeete",
    "Language: Papiamento",
    "Shape: Parallelogram",
    "CapitalCities: Paramaribo",
    "Shape: Parasol",
    "CapitalCities: Paris",
    "Shape: Parrot",
    "Language: Pashto",
    "Shape: Pattern",
    "Shape: Pearl",
    "Shape: Penguin",
    "Shape: Pennon",
    "Shape: Pentagram",
    "Language: Persian",
    "Water: Persian Gulf",
    "Shape: Person",
    "Currency: Peso ARS",
    "Currency: Peso CLP",
    "Currency: Peso COP",
    "Currency: Peso CUP",
    "Currency: Peso MXN",
    "Currency: Peso PHP",
    "Currency: Peso Uruguayo UYU",
    "Water: Philippine",
    "CapitalCities: Philipsburg",
    "CapitalCities: Phnom Penh",
    "Shape: Pillar",
    "Shape: Pine",
    "Shape: Pineapple",
    "Color: Pink",
    "CapitalCities: Podgorica",
    "Language: Polish",
    "Shape: Pomegranate",
    "CapitalCities: Port Louis",
    "CapitalCities: Port Moresby",
    "CapitalCities: Port of Spain",
    "CapitalCities: Port Vila",
    "CapitalCities: Port-au-Prince",
    "CapitalCities: Porto-Novo",
    "Language: Portuguese",
    "Shape: Portuguese",
    "Shape: Potato",
    "Currency: Pound EGP",
    "Currency: Pound LBP",
    "Currency: Pound SDG",
    "Currency: Pound SSP",
    "Currency: Pound Sterling GBP",
    "Currency: Pound SYP",
    "CapitalCities: Prague",
    "CapitalCities: Praia",
    "CapitalCities: Pretoria",
    "CapitalCities: Pristina",
    "Currency: Pula BWP",
    "Language: Punjabi",
    "Color: Purple",
    "CapitalCities: Pyongyang",
    "Language: Quechua",
    "Currency: Quetzal GTQ",
    "CapitalCities: Quito",
    "CapitalCities: Rabat",
    "Shape: Rainbow",
    "Shape: Ram",
    "Currency: Rand ZAR",
    "Language: Rarotongan",
    "Shape: Ray",
    "Water: Read",
    "Currency: Real BRL",
    "Shape: Rectangle",
    "Color: Red",
    "Water: Red",
    "Shape: Reindeer",
    "CapitalCities: Reykjavik",
    "Shape: Rhombus",
    "Currency: Rial IRR",
    "Currency: Rial QAR",
    "Currency: Rial YER",
    "Shape: Ribbon",
    "Shape: Rifle",
    "CapitalCities: Riga",
    "DrivingSide: Right",
    "Shape: Ring",
    "Currency: Ringgit MYR",
    "Shape: River",
    "CapitalCities: Riyadh",
    "Currency: Riyal SAR",
    "CapitalCities: Road Town",
    "Language: Romanian",
    "Language: Romansch",
    "CapitalCities: Rome",
    "Shape: Rope",
    "Shape: Rose",
    "CapitalCities: Roseau",
    "Currency: Ruble BYR",
    "Currency: Ruble RUB",
    "Currency: Rufiyaa MVR",
    "Currency: Rupee INR",
    "Currency: Rupee LKR",
    "Currency: Rupee MUR",
    "Currency: Rupee NPR",
    "Currency: Rupee PKR",
    "Currency: Rupee SCR",
    "Currency: Rupiah IDR",
    "Language: Russian",
    "Color: Saffron",
    "Shape: Sage",
    "Shape: Sail",
    "Shape: Sailboat",
    "CapitalCities: Saint George's",
    "CapitalCities: Saint Helier",
    "CapitalCities: Saint John's",
    "CapitalCities: Saint-Denis",
    "CapitalCities: Saint-Pierre-PM",
    "CapitalCities: Saint-Pierre-TF",
    "Shape: Saltire",
    "Language: Samoan",
    "CapitalCities: San Jose",
    "CapitalCities: San Juan",
    "CapitalCities: San Marino",
    "CapitalCities: San Salvador",
    "CapitalCities: Sana'a",
    "Language: Sango",
    "Language: Sanskrit",
    "CapitalCities: Santa Cruz de Tenerife",
    "CapitalCities: Santiago",
    "CapitalCities: Santo Domingo",
    "CapitalCities: São Tomé",
    "Language: Saraiki",
    "CapitalCities: Sarajevo",
    "Water: Savu",
    "Currency: SBD",
    "Language: Scots",
    "Shape: Script",
    "Shape: Sea",
    "Water: Sea of Azov",
    "Water: Sea of Japan",
    "Water: Sea of Okhotsk",
    "Shape: Seahorse",
    "Shape: Seal",
    "Water: See of Japan",
    "Language: Sekalanga",
    "CapitalCities: Seoul",
    "Language: Sepedi",
    "Language: Serbian",
    "Language: Sesotho",
    "Language: Setswana",
    "Shape: Seven-Pointed Star",
    "Language: Seychellois Creole",
    "Shape: Shahada",
    "Religion: Shamanism ",
    "Language: Sharchhopka",
    "Shape: Sheath",
    "Shape: Sheep",
    "Shape: Shell",
    "Currency: Sheqel ILS",
    "Shape: Shield",
    "Currency: Shilling KES",
    "Currency: Shilling SOS",
    "Currency: Shilling TZS",
    "Currency: Shilling UGX",
    "Religion: Shintoism",
    "Shape: Ship",
    "Language: Shona",
    "Currency: SHP",
    "Language: Sign language",
    "Language: Sindhi",
    "CapitalCities: Singapore",
    "Language: Sinhala",
    "Language: siSwati",
    "Shape: Six-Pointed Star",
    "CapitalCities: Skopje",
    "Shape: Sling",
    "Language: Slovak",
    "Language: Slovenian",
    "Shape: Smoke",
    "Shape: Snake",
    "Shape: Snow",
    "CapitalCities: Sofia",
    "Currency: Sol PEN",
    "Water: Solomon",
    "Currency: Som KGS",
    "Language: Somali",
    "Currency: Somoni TJS",
    "Region: South America",
    "Water: South China",
    "Water: Southern",
    "Shape: Spanish",
    "Language: Spanish",
    "Shape: Spear",
    "Shape: Spur",
    "Shape: Square",
    "CapitalCities: Sri Jayewardenepura Kotte",
    "CapitalCities: St Peter Port",
    "Shape: Stairs",
    "Shape: Stalk",
    "CapitalCities: Stanley",
    "Shape: Star",
    "Currency: STD",
    "CapitalCities: Stockholm",
    "Shape: Stone",
    "Shape: Stripe",
    "CapitalCities: Sucre",
    "Water: Sulu",
    "Currency: Sum UZS",
    "Shape: Sun",
    "Shape: Sun of May",
    "Shape: Surgarcane",
    "CapitalCities: Suva",
    "Language: Swahili",
    "Language: Swedish",
    "Currency: Swiss Franc CHF",
    "Shape: Sword",
    "Shape: Symbol",
    "Shape: Taegeukgi",
    "Shape: Taiji",
    "CapitalCities: Taipei",
    "Language: Tajik",
    "Currency: Taka BDT",
    "Shape: Takbir",
    "Currency: Tala WST",
    "CapitalCities: Tallinn",
    "Language: Tamil",
    "Religion: Taoism",
    "CapitalCities: Tarawa",
    "CapitalCities: Tashkent",
    "Water: Tasman",
    "Language: Tatar",
    "CapitalCities: Tbilisi",
    "CapitalCities: Tegucigalpa",
    "CapitalCities: Tehran",
    "Language: Telugu",
    "Language: Temne",
    "Currency: Tenge KZT",
    "Shape: Tent",
    "Language: Tetum",
    "Language: Thai",
    "CapitalCities: The Valley",
    "CapitalCities: Thimphu",
    "Shape: Thuluth",
    "Language: Tigrinya",
    "Water: Timor",
    "CapitalCities: Tirana",
    "Language: Tok Pisin",
    "CapitalCities: Tokelau",
    "Language: Tokelauan",
    "CapitalCities: Tokyo",
    "Language: Tonga",
    "Language: Tongan",
    "Shape: Torch",
    "CapitalCities: Tórshavn",
    "Shape: Totem",
    "Shape: Tower",
    "Shape: Trapezium",
    "Shape: Trapezoid",
    "Shape: Tree",
    "Shape: Triangle",
    "Shape: Trident",
    "Shape: Trigram",
    "CapitalCities: Tripoli",
    "Currency: Tugrik MNT",
    "Shape: Tulip",
    "CapitalCities: Tunis",
    "Language: Turkish",
    "Language: Turkmen",
    "Shape: Turtle",
    "Shape: Tusk",
    "Language: Tuvaluan",
    "Shape: Twelve-Pointed Star",
    "Shape: Twenty-Four-Pointed Star",
    "Language: Ukrainian",
    "CapitalCities: Ulaanbaatar",
    "Language: Umbundu",
    "Religion: Unaffiliated",
    "Language: Urdu",
    "Language: Uzbek",
    "CapitalCities: Vaduz",
    "CapitalCities: Valletta",
    "CapitalCities: Vatican City",
    "Currency: Vatu VUV",
    "Shape: Vertical",
    "CapitalCities: Victoria",
    "CapitalCities: Vienna",
    "CapitalCities: Vientiane",
    "Language: Vietnamese",
    "CapitalCities: Vilnius",
    "Shape: Volcano",
    "CapitalCities: Warsaw",
    "CapitalCities: Washington, D.C.",
    "Shape: Water",
    "Shape: Wave",
    "Shape: Waves",
    "Shape: Weapon",
    "CapitalCities: Wellington",
    "Language: Welsh",
    "CapitalCities: West Island",
    "Shape: Wheat",
    "Shape: Wheel",
    "Shape: Wheelbarrow",
    "Color: White",
    "Shape: White Saltire",
    "CapitalCities: Willemstad",
    "CapitalCities: Windhoek",
    "Shape: Wing",
    "Language: Wolof",
    "Currency: Won KPW",
    "Currency: Won KRW",
    "Shape: Wreath",
    "Currency: XCD",
    "Language: Xichangana",
    "Currency: XPF",
    "CapitalCities: Yamoussoukro",
    "CapitalCities: Yaounde",
    "CapitalCities: Yaren",
    "Water: Yellow",
    "Color: Yellow",
    "Water: Yellow Sea",
    "Currency: Yen JPY",
    "CapitalCities: Yerevan",
    "Shape: Yin Yang",
    "Currency: Yuan Renminbi CNY",
    "CapitalCities: Zagreb",
    "Currency: Zloty PLN",
    "Shape: Zodiac",
    "Currency: ₺ Lira TRY"];
