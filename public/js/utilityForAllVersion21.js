'use strict';

// immediately self-evoking function (function () {..} ) ();
// can have argument as its parameter (function (myParameter) {..} ) (myArgument);

/*
   RCP-SPA JS/JSON structure

   1- Variables: primitive and/or object with the assigned (initial) Data which can be undefined
   2- Functions/Methods definitions starting with this file specific initialization

*/

// ****     1- Variables     ******
var versionNumber; // a string: keeping the decimals: // application version
var applicationStarted;
var applicationLanguageDropDownValuesStartedFlag = false; // only once to be retrieved the initial value.

// Startup values in StartupValues Constructor Object
var startupValuesJSONObject;

var oneBlank = '&nbsp;'
var worldMap;
var worldMapLoaded;
var previousCombineOption; // dashboard and register using
var previousRegion; // region and register using
var lastUsedFilter;

// Application Language Drop Down Values
var applicationLanguageDropDownValues;

// an undefined argument for any function call
var myUndefined;

// generic span element
var spanElement;
// generic p element
var pElement;

// Region informations
var flagOfCountries;

// Application Text
var selectedApplicationLanguageTexts = [];

var appleProduct = false;
var iPhone = false;
var iPad = false;

var dashBoardFlag = false;
var sortIconsObj;

var h2First; // Code Sharing Functions (Shared with Region/Global/Register)
var soundOnOffIcon;
var combineTheSearchAndRadioBox;
var combineTheSearchOrRadioBox;
var combineTheSearchNoneRadioBox;
var combineTheSearchReverseRadioBox;
var playAnthem;

// Date and time
var currentTime;
var currentTimeString;
var utc;

var textB;
// one blank Span element
var oneBlankSpan;

var allCountryLanguages;

// simplemaps region numbers
var regionNumbers = {NorthAmerica:0, SouthAmerica:1, Europe:2, Africa:3, Oceania:4, Asia:5};
var regionNames = {NorthAmerica:"North America", SouthAmerica:"South America", Europe:"Europe", Africa:"Africa", Oceania:"Australia & Oceania", Asia:"Asia"};

var locationIndex = {"id_MenuStart": 0, "id_Searching": 1, "id_Surfing": 2, "id_Countries": 3};
var startWithURL = {"Menu": "id_MenuStart", "eWorld Global": "id_Searching", "eWorld Regional": "id_Surfing", "eWorld Countries": "id_Countries"};

// Searchable Select/Options fields
var searchSelects = { "Color":"Color","Color2nd":"Color2nd","Color3rd":"Color3rd","Shape":"Shape","Shape2nd":"Shape2nd","Shape3rd":"Shape3rd","Language":"Language",
   "Population":"Population","Income":"Income","Overweight":"Overweight","LifeExpectancy":"LifeExpectancy","CapitalCities":"CapitalCities","LandArea":"LandArea",
   "Water":"Water","Religion":"Religion","Cell":"Cell","Internet":"Internet","RandD":"RandD","CleanWater":"CleanWater","CleanToilet":"CleanToilet","DrivingSide":"DrivingSide",
   "SexRatio":"SexRatio","SeatRatio":"SeatRatio"};

var initialMenuItems = {"id_Menu":eWorldMenuSetup,"id_MenuStart":eWorldMenuSetup,"id_Searching":eWorldGlobalSetup,"id_Surfing":eWorldRegionalSetup,
   "id_Countries":eWorldCountriesSetup,"id_AboutMe":eWorldAboutSetup,"id_Citations":eWorldCitationsSetup,"id_TextLanguages":eWorldTextLanguagesSetup,
   "id_DataLanguages":eWorldDataLanguagesSetup,"id_Register":eWorldStartupSetup,};

var combineMatrix = {"id_RadioCombineNoneSearch":"id_CombineSearchNone","id_RadioCombineAndSearch":"id_CombineSearchAnd","id_RadioCombineOrSearch":"id_CombineSearchOr"}

var wikiUSState = {"WA":"Washington_(state)", "GA":"Georgia_(U.S._state)", "NY":"New_York_(state)"};
var notInUNData = {"AntarcticTreatySystem":"AntarcticTreatySystem","BritishIndianOceanTerritory":"BritishIndianOceanTerritory","ChristmasIsland":"ChristmasIsland",
   "CocosIslands":"CocosIslands","FrenchSouthernandAntarcticLands":"FrenchSouthernandAntarcticLands","Guernsey":"Guernsey","Jersey":"Jersey","NorfolkIsland":"NorfolkIsland",
   "PitcairnIslands":"PitcairnIslands","SaintBarthelemy":"SaintBarthelemy","SaintMartin":"SaintMartin","SvalbardandJanMayen":"SvalbardandJanMayen","BouvetIsland":"BouvetIsland",
   "HeardIslandandMcDonaldIslands":"HeardIslandandMcDonaldIslands","HeardIslandandMcDonaldIslands":"HeardIslandandMcDonaldIslands","Kosovo":"Kosovo","AlandIslands":"AlandIslands",
   "SouthGeorgiaAndSouthSandwichIslands":"SouthGeorgiaAndSouthSandwichIslands","UnitedStatesMinorOutlyingIslands":"UnitedStatesMinorOutlyingIslands"};

var noAscDesListing = {"Reports":"Reports","Country":"Country","Color2nd":"Color2nd",
   "Color3rd":"Color3rd","Shape2nd":"Shape2nd","Shape3rd":"Shape3rd"};

var pageHeaderI18n = {"Text Languages":"id_TextLanguages", "Data Languages":"id_DataLanguages", "AboutMe":"id_AboutMe", "Citation":"id_Citations",
   "eWorld Countries":"id_Countries", "Startup":"id_Register", "Menu":"id_MenuStart", "eWorld Global":"id_Searching", "eWorld Regional":"id_Surfing"};

var applicationHrefs = {1:"http://www.k12k20.com/",2:"http://www.k12k20tr.com/",3:"http://www.k12k20sk.com/"};

var boldLinkCategories = {"TravelWarning":"TravelWarning","TimeAndDate":"TimeAndDate","GoogleMap":"GoogleMap","Government":"Government",
   "Tourism":"Tourism","Weather":"Weather","WikiCountry":"WikiCountry","CIACountry":"CIACountry"}

var noDropDownDescription = {"LifeExpectancy":"LifeExpectancy","UNCountry":"UNCountry","Income":"Income","LandArea":"LandArea",
   "Population":"Population","Overweight":"Overweight","Currency":"Currency","DrivingSide":"DrivingSide"}

// used to retrieve the Greeting: hard KEY keep it in utilityForAll... (See: oneLanguageSpecificTextAndCodeGeneration.js)
var allCountryLanguages =  {"Afghanistan":"Pashto","AlandIslands":"Swedish","Albania":"Albanian","Algeria":"Arabic","AmericanSamoa":"English","Andorra":"Catalan","Angola":"Portuguese",
   "Anguilla":"English","AntarcticTreatySystem":"Russian","AntiguaandBarbuda":"English","Argentina":"Spanish","Armenia":"Armenian","Aruba":"Dutch","Australia":"English","Austria":"German",
   "Azerbaijan":"Azerbaijani","Bahamas":"English","Bahrain":"Arabic","Bangladesh":"Bangla","Barbados":"English","Belarus":"Belarusian","Belgium":"Dutch","Belize":"English","Benin":"French",
   "Bermuda":"English","Bhutan":"Dzongkha","Bolivia":"Spanish","BonaireSintEustatiusandSaba":"Dutch","BosniaandHerzegovina":"Bosnian","Botswana":"Setswana","BouvetIsland":"Norwegian",
   "Brazil":"Portuguese","BritishIndianOceanTerritory":"English","BritishVirginIslands":"English","Brunei":"Malay","Bulgaria":"Bulgarian","BurkinaFaso":"French","Burundi":"Kirundi",
   "Cambodia":"Khmer","Cameroon":"English","Canada":"English","CanaryIslands":"Spanish","CaboVerde":"Portuguese","CaymanIslands":"English","CentralAfricanRepublic":"French","Chad":"French",
   "Chile":"Spanish","China":"Mandarin","ChristmasIsland":"English","CocosIslands":"English","Colombia":"Spanish","Comoros":"Arabic","CookIslands":"English","CostaRica":"Spanish",
   "CotedIvoire":"French","Croatia":"Croatian","Cuba":"Spanish","Curacao":"Dutch","Cyprus":"Greek","Czechia":"Czech","DemocraticRepublicoftheCongo":"French","Denmark":"Danish",
   "Djibouti":"French","Dominica":"English","DominicanRepublic":"Spanish","Ecuador":"Spanish","Egypt":"Arabic","ElSalvador":"Spanish","EquatorialGuinea":"Spanish","Eritrea":"Tigrinya",
   "Estonia":"Estonian","Eswatini":"English","Ethiopia":"Amharic","FalklandIslands":"English","FaroeIslands":"Danish","Fiji":"English","Finland":"Finnish","France":"French",
   "FrenchGuiana":"French","FrenchPolynesia":"French","FrenchSouthernandAntarcticLands":"French","Gabon":"French","Gambia":"English","Georgia":"Georgian","Germany":"German",
   "Ghana":"English","Gibraltar":"English","Greece":"Greek","Greenland":"Greenlandic","Grenada":"English","Guadeloupe":"French","Guam":"English","Guatemala":"Spanish","Guernsey":"English",
   "Guinea":"French","GuineaBissau":"Portuguese","Guyana":"English","Haiti":"French","HeardIslandandMcDonaldIslands":"English","Honduras":"Spanish","HongKong":"Mandarin","Hungary":"Hungarian",
   "Iceland":"Icelandic","India":"English","Indonesia":"Indonesian","Iran":"Persian","Iraq":"Arabic","Ireland":"English","IsleofMan":"English","Israel":"Hebrew","Italy":"Italian",
   "Jamaica":"English","Japan":"Japanese","Jersey":"English","Jordan":"Arabic","Kazakhstan":"Kazakh","Kenya":"English","Kiribati":"English","Kosovo":"Albanian","Kuwait":"Arabic",
   "Kyrgyzstan":"Kyrgyz","Laos":"Lao","Latvia":"Latvian","Lebanon":"Arabic","Lesotho":"Sesotho","Liberia":"English","Libya":"Arabic","Liechtenstein":"German","Lithuania":"Lithuanian",
   "Luxembourg":"Luxembourgish","Macau":"Mandarin","Macedonia":"Macedonian","Madagascar":"French","Malawi":"English","Malaysia":"Bahasa","Maldives":"Maldivian","Mali":"French",
   "Malta":"Maltese","MarshallIslands":"Marshallese","Martinique":"French","Mauritania":"Arabic","Mauritius":"French","Mayotte":"French","Mexico":"Spanish","Micronesia":"English",
   "Moldova":"Moldovan","Monaco":"French","Mongolia":"Mongolian","Montenegro":"Montenegrin","Montserrat":"English","Morocco":"Arabic","Mozambique":"Portuguese","Myanmar":"Burmese",
   "Namibia":"English","Nauru":"English","Nepal":"Nepali","Netherlands":"Dutch","NewCaledonia":"French","NewZealand":"English","Nicaragua":"Spanish","Niger":"French","Nigeria":"English",
   "Niue":"English","NorfolkIsland":"English","NorthernMarianaIslands":"English","NorthKorea":"Korean","Norway":"Norwegian","Oman":"Arabic","Pakistan":"Punjabi","Palau":"English",
   "Panama":"Spanish","PapuaNewGuinea":"English","Paraguay":"Spanish","Peru":"Spanish","Philippines":"Filipino","PitcairnIslands":"English","Poland":"Polish","Portugal":"Portuguese",
   "PuertoRico":"Spanish","Qatar":"Arabic","RepublicofCongo":"French","Reunion":"French","Romania":"Romanian","RussianFederation":"Russian","Rwanda":"Kinyarwanda","SaintBarthelemy":"French",
   "SaintHelena":"English","SaintKittsandNevis":"English","SaintLucia":"English","SaintMartin":"French","SaintPierreandMiquelon":"French","SaintVincentandGrenadines":"English",
   "Samoa":"Samoan","SanMarino":"Italian","SaoTomeandPrincipe":"Portuguese","SaudiArabia":"Arabic","Senegal":"French","Serbia":"Serbian","Seychelles":"French","SierraLeone":"English",
   "Singapore":"Mandarin","SintMaarten":"Dutch","Slovakia":"Slovak","Slovenia":"Slovenian","SolomonIslands":"English","Somalia":"Somali","SouthAfrica":"IsiZulu",
   "SouthGeorgiaAndSouthSandwichIslands":"English","SouthKorea":"Korean","SouthSudan":"English","Spain":"Spanish","SriLanka":"Sinhala","StateofPalestine":"Arabic","Sudan":"Arabic",
   "Suriname":"Dutch","SvalbardandJanMayen":"Norwegian","Sweden":"Swedish","Switzerland":"German","Syria":"Arabic","Taiwan":"Mandarin","Tajikistan":"Tajik","Tanzania":"Swahili",
   "Thailand":"Thai","TimorLeste":"Tetum","Togo":"French","Tokelau":"Tokelau","Tonga":"Tongan","TrinidadandTobago":"English","Tunisia":"Arabic","Turkey":"Turkish",
   "TurkishRepublicofNorthernCyprus":"Turkish","Turkmenistan":"Turkmen","TurksandCaicosIslands":"English","Tuvalu":"English","Uganda":"English","Ukraine":"Ukrainian",
   "UnitedArabEmirates":"Arabic","UnitedKingdom":"English","UnitedStatesMinorOutlyingIslands":"English","UnitedStatesofAmerica":"English","UnitedStatesVirginIslands":"English",
   "Uruguay":"Spanish","Uzbekistan":"Uzbek","Vanuatu":"Bislama","VaticanCityAndHolySee":"Italian","Venezuela":"Spanish","Vietnam":"Vietnamese","WallisandFutuna":"French",
   "WesternSahara":"Arabic","Yemen":"Arabic","Zambia":"English","Zimbabwe":"English"}

var countryCapitals = {"AlandIslands":"Mariehamn","Albania":"Tirana","Algeria":"Algiers","AmericanSamoa":"Pago Pago","Andorra":"Andorra la Vella",
"Angola":"Luanda","Anguilla":"The Valley","AntarcticTreatySystem":"N/A-AQ","AntiguaandBarbuda":"Saint John's","Argentina":"Buenos Aires","Armenia":"Yerevan",
"Aruba":"Oranjestad","Australia":"Canberra","Austria":"Vienna","Azerbaijan":"Baku","Bahamas":"Nassau","Bahrain":"Manama","Bangladesh":"Dhaka",
"Barbados":"Bridgetown","Belarus":"Minsk","Belgium":"Brussels","Belize":"Belmopan","Benin":"Porto-Novo","Bermuda":"Hamilton","Bhutan":"Thimphu",
"Bolivia":"La Paz","Bolivia":"Sucre","BonaireSintEustatiusandSaba":"Kralendijk","BosniaandHerzegovina":"Sarajevo","Botswana":"Gaborone",
"BouvetIsland":"N/A-BV","Brazil":"Brasilia","BritishIndianOceanTerritory":"Camp Justice","BritishVirginIslands":"Road Town","Brunei":"Bandar Seri Begawan",
"Bulgaria":"Sofia","BurkinaFaso":"Ouagadougou","Burundi":"Bujumbura","CaboVerde":"Praia","Cambodia":"Phnom Penh","Cameroon":"Yaounde","Canada":"Ottawa",
"CanaryIslands":"Las Palmas","CanaryIslands":"Santa Cruz de Tenerife","CaymanIslands":"George Town","CentralAfricanRepublic":"Bangui","Chad":"N'Djamena",
"Chile":"Santiago","China":"Beijing","ChristmasIsland":"Flying Fish Cove","CocosIslands":"West Island","Colombia":"Bogota","Comoros":"Moroni",
"CookIslands":"Avarua","CostaRica":"San Jose","CotedIvoire":"Yamoussoukro","Croatia":"Zagreb","Cuba":"Havana","Curacao":"Willemstad","Cyprus":"Nicosia",
"Czechia":"Prague","DemocraticRepublicoftheCongo":"Kinshasa","Denmark":"Copenhagen","Djibouti":"Djibouti","Dominica":"Roseau",
"DominicanRepublic":"Santo Domingo","Ecuador":"Quito","Egypt":"Cairo","ElSalvador":"San Salvador","EquatorialGuinea":"Malabo","Eritrea":"Asmara",
"Estonia":"Tallinn","Eswatini":"Lobamba","Eswatini":"Mbabane","Ethiopia":"Addis Ababa","FalklandIslands":"Stanley","FaroeIslands":"Tórshavn",
"Fiji":"Suva","Finland":"Helsinki","France":"Paris","FrenchGuiana":"Cayenne","FrenchPolynesia":"Papeete",
"FrenchSouthernandAntarcticLands":"Saint-Pierre-TF","Gabon":"Libreville","Gambia":"Banjul","Georgia":"Tbilisi","Germany":"Berlin","Ghana":"Accra",
"Gibraltar":"Gibraltar","Greece":"Athens","Greenland":"Nuuk","Grenada":"Saint George's","Guadeloupe":"Basse-Terre","Guam":"Hagåtña",
"Guatemala":"Guatemala City","Guernsey":"St Peter Port","Guinea":"Conakry","GuineaBissau":"Bissau","Guyana":"Georgetown","Haiti":"Port-au-Prince",
"HeardIslandandMcDonaldIslands":"N/A-HM","Honduras":"Tegucigalpa","HongKong":"Hong Kong","Hungary":"Budapest","Iceland":"Reykjavik",
"India":"New Delhi","Indonesia":"Jakarta","Iran":"Tehran","Iraq":"Baghdad","Ireland":"Dublin","IsleofMan":"Douglas","Israel":"Jerusalem",
"Italy":"Rome","Jamaica":"Kingston-JM","Japan":"Tokyo","Jersey":"Saint Helier","Jordan":"Amman","Kazakhstan":"Astana","Kenya":"Nairobi",
"Kiribati":"Tarawa","Kosovo":"Pristina","Kuwait":"Kuwait City","Kyrgyzstan":"Bishkek","Laos":"Vientiane","Latvia":"Riga","Lebanon":"Beirut",
"Lesotho":"Maseru","Liberia":"Monrovia","Libya":"Tripoli","Liechtenstein":"Vaduz","Lithuania":"Vilnius","Luxembourg":"Luxembourg","Macau":"Macau",
"Macedonia":"Skopje","Madagascar":"Antananarivo","Malawi":"Lilongwe","Malaysia":"Kuala Lumpur","Maldives":"Malé","Mali":"Bamako","Malta":"Valletta",
"MarshallIslands":"Majuro","Martinique":"Fort-de-France","Mauritania":"Nouakchott","Mauritius":"Port Louis","Mayotte":"Mamoudzou","Mexico":"Mexico City",
"Micronesia":"Palikir","Moldova":"Chișinău","Monaco":"Monaco","Mongolia":"Ulaanbaatar","Montenegro":"Podgorica","Montserrat":"Brades","Morocco":"Rabat",
"Mozambique":"Maputo","Myanmar":"Nay Pyi Taw","Namibia":"Windhoek","Nauru":"Yaren","Nepal":"Kathmandu","Netherlands":"Amsterdam","NewCaledonia":"Nouméa",
"NewZealand":"Wellington","Nicaragua":"Managua","Niger":"Niamey","Nigeria":"Abuja","Niue":"Alofi","NorfolkIsland":"Kingston-NF",
"NorthernMarianaIslands":"Garapan","NorthKorea":"Pyongyang","Norway":"Oslo","Oman":"Muscat","Pakistan":"Islamabad","Palau":"Melekeok",
"Panama":"Panama City","PapuaNewGuinea":"Port Moresby","Paraguay":"Asunción","Peru":"Lima","Philippines":"Manila","PitcairnIslands":"Adamstown",
"Poland":"Warsaw","Portugal":"Lisbon","PuertoRico":"San Juan","Qatar":"Doha","RepublicofCongo":"Brazzaville","Reunion":"Saint-Denis",
"Romania":"Bucharest","RussianFederation":"Moscow","Rwanda":"Kigali","SaintBarthelemy":"Gustavia","SaintHelena":"Jamestown",
"SaintKittsandNevis":"Basseterre","SaintLucia":"Castries","SaintMartin":"Marigot","SaintPierreandMiquelon":"Saint-Pierre-PM",
"SaintVincentandGrenadines":"Kingstown","Samoa":"Apia","SanMarino":"San Marino","SaoTomeandPrincipe":"São Tomé","SaudiArabia":"Riyadh",
"Senegal":"Dakar","Serbia":"Belgrade","Seychelles":"Victoria","SierraLeone":"Freetown","Singapore":"Singapore","SintMaarten":"Philipsburg",
"Slovakia":"Bratislava","Slovenia":"Ljubljana","SolomonIslands":"Honiara","Somalia":"Mogadishu","SouthAfrica":"Bloemfontein",
"SouthAfrica":"Cape Town","SouthAfrica":"Pretoria","SouthGeorgiaAndSouthSandwichIslands":"King Edward Point","SouthKorea":"Seoul",
"SouthSudan":"Juba","Spain":"Madrid","SriLanka":"Colombo","SriLanka":"Sri Jayewardenepura Kotte","StateofPalestine":"East Jerusalem",
"Sudan":"Khartoum","Suriname":"Paramaribo","SvalbardandJanMayen":"Longyearbyen","Sweden":"Stockholm","Switzerland":"Bern","Syria":"Damascus",
"Taiwan":"Taipei","Tajikistan":"Dushanbe","Tanzania":"Dodoma","Thailand":"Bangkok","TimorLeste":"Dili","Togo":"Lomé","Tokelau":"Tokelau",
"Tonga":"Nuku'alofa","TrinidadandTobago":"Port of Spain","Tunisia":"Tunis","Turkey":"Ankara","TurkishRepublicofNorthernCyprus":"North Nicosia",
"Turkmenistan":"Ashgabat","TurksandCaicosIslands":"Cockburn Town","Tuvalu":"Funafuti","Uganda":"Kampala","Ukraine":"Kyiv","UnitedArabEmirates":"Abu Dhabi",
"UnitedKingdom":"London","UnitedStatesMinorOutlyingIslands":"NONE","UnitedStatesofAmerica":"Washington, D.C.",
"UnitedStatesVirginIslands":"Charlotte Amalie","Uruguay":"Montevideo","Uzbekistan":"Tashkent","Vanuatu":"Port Vila","VaticanCityAndHolySee":"Vatican City",
"Venezuela":"Caracas","Vietnam":"Hanoi","WallisandFutuna":"Matu-Utu","WesternSahara":"El Aaiún","Yemen":"Sana'a","Zambia":"Lusaka","Zimbabwe":"Harare" };

var countryArrayKeyValue = {};
var countryNameFromKeyValue = {};
// For Flag objects: set the country names with the sequence number and vice versa: country (252) key (0 to 251)
for (var arrayKeyValue in allCountryNames) {
   countryArrayKeyValue[allCountryNames[arrayKeyValue]] = arrayKeyValue;
   countryNameFromKeyValue[arrayKeyValue] = allCountryNames[arrayKeyValue];
}

var languageArrayKeyValue = {};
// From the Language Description this will help to get the Language Table Id Value... description to country to id (key)
for (var arrayKeyValue in languagesFromLanguageTable) {
   languageArrayKeyValue[languagesFromLanguageTable[arrayKeyValue]] = arrayKeyValue;
}

// ****     2- Functions     ******

// execute this method for each Page requires this external JS file (acts af if it just opened for the requested SPA page)
function initializationUtilityForAll() {
   // versionNumber must match to the Local Storage, if not (for now) Delete the Storage to start a new: Version II, it will it will be upgraded
   // With Version II, the Local Storage will only have the version Number: All the files/objects will be in indexedDB: max is 50 MB not 10MB
   versionNumber = "1.95";
   applicationStarted = false;
   worldMapLoaded = true;
   previousCombineOption = -1; // dashboard and register using
   previousRegion = -1; // region and register using
   lastUsedFilter = "";
   oneBlankSpan = getASpanElement(myUndefined, myUndefined, '&nbsp;');
   startupValuesJSONObject = getStartupValues();
   if (startupValuesJSONObject.versionNumber != versionNumber) {
       localStorage.removeItem("startupValues");
       startupValuesJSONObject = getStartupValues();
   }

   // applicationLanguageDropDownValues = getApplicationLanguageDropDownValues();

   flagOfCountries = startupValuesJSONObject.flagOfCountries;
   // Set the initial Application Language Text
   if (selectedApplicationLanguageTexts.length == 0) { // if blank retrieve otherwise keep it as selected: This is a SPA: a Single Page Application RCP.. Nice!
         selectedApplicationLanguageTexts = startupValuesJSONObject.applicationLanguageText;
   }
   isAppleProduct();
}

function eWorldMenuSetup() {
   setMenuImage(); // re-run the menu...
}

// rename all JS files C:\xampp\htdocs\k12k20.com\public\js>rename *ersion00?.js, *ersion00?.js
// rename one CSS file individually

function eWorldGlobalSetup() {
   importAnExternalPageJSFile("id_Searching", "js/PageCreationFiles/globalVersion21.js", "Searching"); // import a javascript external file
}

function eWorldRegionalSetup() {
   importAnExternalPageJSFile("id_Surfing", "js/PageCreationFiles/regionalVersion21.js", "Surfing"); // import a javascript external file
}

function eWorldCountriesSetup() {
   importAnExternalPageJSFile("id_Countries", "js/PageCreationFiles/countryCodesSetupVersion21.js", "CountryCodes"); // import a javascript external file
}

function eWorldStartupSetup(  ) {
   importAnExternalPageJSFile("id_Register", "js/PageCreationFiles/registerSetupVersion21.js", "Register"); // import a javascript external file
}

function eWorldCitationsSetup() {
   importAnExternalPageJSFile("id_Citations", "js/PageCreationFiles/citationsVersion21.js", "Citations"); // import a javascript external file
}

function eWorldAboutSetup() {
   importAnExternalPageJSFile("id_AboutMe", "js/PageCreationFiles/aboutMeVersion21.js", "AboutMe"); // import a javascript external file
}

function eWorldTextLanguagesSetup() {
   importAnExternalPageJSFile("id_TextLanguages", "js/PageCreationFiles/textLanguagesVersion21.js", "TextLanguages"); // import a javascript external file
}

function eWorldDataLanguagesSetup() {
   importAnExternalPageJSFile("id_DataLanguages", "js/PageCreationFiles/dataLanguagesVersion21.js", "DataLanguages"); // import a javascript external file
}

function isAppleProduct()
{
   if (navigator.userAgent.toUpperCase().indexOf("IPAD") > 0 || navigator.userAgent.toUpperCase().indexOf("IPHONE") > 0
       || navigator.userAgent.toUpperCase().indexOf("MACINTOSH") > 0) appleProduct = true;
   if (navigator.userAgent.toUpperCase().indexOf("IPAD") > 0) iPad = true;
   if (navigator.userAgent.toUpperCase().indexOf("IPHONE") > 0) iPhone = true;
}

// Get to set the Startup Values from the Local Storage
function getStartupValues()
{
   if (window.localStorage.startupValues)
   {
       var savedValuesJSONObject = JSON.parse(window.localStorage.startupValues); // if Local Storage data exits, retrieve it
   }
   else // create JSON object to save into Browser's Local Data Area
   {
       var savedValuesJSONObject =
       new StartupValues(versionNumber,
                         DEFAULTREGIONAPPLICATIONLANGUAGE,
                         DEFAULTREGIONAPPLICATIONCOUNTRYANDLANGUAGE,
                         DEFAULTREGION,
                         false,
                         "id_RadioCombineAndSearch",
                         false,
                         "id_MenuStart",
                         DEFAULTREGIONAPPLICATIONLANGUAGETEXT,
                         DEFAULTREGIONFLAGOFCOUNTRIES);
       window.localStorage.setItem("startupValues", JSON.stringify(savedValuesJSONObject)); // Saved into LDA
   }
   return savedValuesJSONObject; // return StartupValues constructor Object
}

// World Flags by the Regions Application Startup Values Constructor
function StartupValues(versionNumber, language, languageText , region, isSoundOff, isCombineSearch, isReverse,
   startWith, applicationLanguageText, flagOfCountries)
{
   this.versionNumber = versionNumber;
   this.language = language;
   this.languageText = languageText;
   this.region = region;
   this.isSoundOff = isSoundOff;
   this.combine = isCombineSearch;
   this.isReverse = isReverse;
   this.startWith = startWith;
   this.applicationLanguageText = applicationLanguageText;
   this.flagOfCountries = flagOfCountries;
}

// Should be here Register is using it, too.
function setApplicationLanguage(languageId) // Dynamic data: a user can add and use instantly
{
   var xhttploadTagsTexts = new XMLHttpRequest(); // Get the Application Language Texts from the database
   xhttploadTagsTexts.onreadystatechange = function() // On Ready State Change
   {
       if (xhttploadTagsTexts.readyState == 4 && xhttploadTagsTexts.status == 200)
       {
           if (xhttploadTagsTexts.responseText != "no row")
           {
               // console.log(xhttploadTagsTexts.responseText);
               console.log(encodeURIComponent(xhttploadTagsTexts.responseText));
               selectedApplicationLanguageTexts = JSON.parse(xhttploadTagsTexts.responseText); // Application Language Texts   dfg
           }
       }
   }
   xhttploadTagsTexts.open("GET", "/ajax?id="+languageId, true);
   xhttploadTagsTexts.send(); // Start the Ajax Communication (call PHP program through Route => Controller)
}

// Should be here Register is using it, too.
function getApplicationLanguageDropDownValues()
{
   var xhttploadAppLangInfo = new XMLHttpRequest(); // Retrieve all the Defined Application Languages
   xhttploadAppLangInfo.onreadystatechange = function() // On Ready State Change
   {
       if (xhttploadAppLangInfo.readyState == 4 && xhttploadAppLangInfo.status == 200)
       {
           if (xhttploadAppLangInfo.responseText != "no row")
           {
               applicationLanguageDropDownValues = xhttploadAppLangInfo.responseText; //  PHP return a string but a JSON object
               return applicationLanguageDropDownValues;
           }
       }
   }
   xhttploadAppLangInfo.open("GET", "/ajax/applicationLanguage", true);
   xhttploadAppLangInfo.send(); // Start the Ajax Communication (calls PHP program through Route => Controller)
}

function applyTheLanguageTexts()
{
   for (var key in selectedApplicationLanguageTexts)
   {
       if (selectedApplicationLanguageTexts.hasOwnProperty(key)) {
           if (key == "id_ChooseOne" || key == "id_ListAscending" || key == "id_ListDescending"
               || document.getElementById(key) != null || key.indexOf("title") != -1) {
               if (selectedApplicationLanguageTexts[key].trim().length > 0) {
                   if (key.indexOf("title") != -1) {
                       if (key.indexOf("soundOnOffIcon") != -1) {
                           if (document.getElementById("id_CheckBoxPlaySounds") && document.getElementById("id_CheckBoxPlaySounds").checked) {
                               document.getElementById("soundOnOffIcon").title = selectedApplicationLanguageTexts["title_soundOnOffIconPlay"];
                           } else if (document.getElementById("soundOnOffIcon")) {
                               document.getElementById("soundOnOffIcon").title = selectedApplicationLanguageTexts["title_soundOnOffIconPause"];
                           }
                       } else {
                           var idWillBe = "id_" + key.substring(6);
                           if (document.getElementById(idWillBe)) // Register Save Button Title will be skipped
                               document.getElementById(idWillBe).title = selectedApplicationLanguageTexts[key];
                       }
                   }
                   else {
                       if (key == "id_CountryFacts") {
                           // if a country detail is showing: do nothing for now up until Application Data Language is Active
                           if (document.getElementById("map1") && document.getElementById("map1").classList.contains("displayNone")) { } // find Data Language value for this Country Name..
                           else if (dashBoardFlag) document.getElementById(key).innerHTML = selectedApplicationLanguageTexts["id_World"];
                           else document.getElementById(key).innerHTML =
                               selectedApplicationLanguageTexts["id_" + document.querySelectorAll('input[type="radio"]:checked')[0].id];
                       } else if (key == "id_FirstMessage") {
                           document.getElementById(key).innerHTML = selectedApplicationLanguageTexts[pageHeaderI18n[currentEWorldPage]];
                       } else if (dashBoardFlag && key == "id_ListAscending") {
                           listDescendingAscendingText(key, "id_ListAscending");
                       } else if (dashBoardFlag && key == "id_ListDescending") {
                           listDescendingAscendingText(key, "id_ListDescending");
                       } else if (document.getElementById(key)) {
                           if (key != "id_CombineSearchNone" && key != "id_CombineSearchAnd" && key != "id_CombineSearchOr" && key != "id_CombineSearchReverse")
                           {
                               if (key == "id_PlaySound")
                               {
                                   if (document.getElementById("id_CheckBoxPlaySounds").checked) {
                                       document.getElementById(key).innerHTML = selectedApplicationLanguageTexts["title_soundOnOffIconPlay"];
                                   } else {
                                       document.getElementById(key).innerHTML = selectedApplicationLanguageTexts["title_soundOnOffIconPause"];
                                   }
                               }
                               else document.getElementById(key).innerHTML = selectedApplicationLanguageTexts[key] + " ";
                           }
                       }
                   }
               }
           }
       }
   }
}

function listDescendingAscendingText(key, id)
{
   for (var fieldSelect in searchSelects) {
       if (document.getElementById(key+searchSelects[fieldSelect]))
           document.getElementById(key+searchSelects[fieldSelect]).innerHTML = selectedApplicationLanguageTexts[id];
   }
}

// Apply the Region information: First time will be Limited (limitedFlag)
function setRegionFlagsPlus(regionName, runThroughFlag)
{
   // Retrieve this Region Country informations from JS Array
   flagOfCountries = sixRegionsValues[regionNumbers[regionName]];
   if (runThroughFlag)
   {
       setTheRegionFlags(regionName);
       // set the region map
       if (!dashBoardFlag)
           changeTheBackgroundMap(regionName);
   }
}

// Get/Set the Region information: used by Register too not only Regions and World/dashBoard pages: keep here
function processRegion(regionName, detailFlag)
{
   // if not process yet: set it from JS Arrays
   if (detailFlag) previousFlag = -1;
     setRegionFlagsPlus(regionName, detailFlag);
}

function createRadioButtons(firstDivision, regions, classes, htmlElementType, nameValue)
{
   for (var key in regions) {
       if (htmlElementType == "span") {
           var region = getASpanElement(myUndefined,classes);
       }
       else
       {
           var region = document.createElement("div");
           region.setAttribute("class", classes);
       }
       var regionLabel = document.createElement("label");
       var regionInput = document.createElement("input");
       regionInput.setAttribute("id", regions[key]);
       regionInput.setAttribute("class", "displayNone");
       regionInput.setAttribute("type", "radio");
       regionInput.setAttribute("name", nameValue);
       regionInput.setAttribute("value", regions[key]);
       if (regions[key] == startupValuesJSONObject.region) {
           regionInput.setAttribute("checked", true);
       }
       var regionInputLabel;
       if (regions[key] == "ShowAnswer" || regions[key] == "ShowCountry")
           regionInputLabel = getASpanElement("id_" + regions[key], "regionLabelText lineThrough",
               selectedApplicationLanguageTexts["id_" + regions[key]], myUndefined, myUndefined, true);
       else if (regions[key] == "Please" || regions[key] == "SelectQuestion" || regions[key] == "FromCategory")
           regionInputLabel = getASpanElement("id_" + regions[key], "regionLabelText answersBorder",
               selectedApplicationLanguageTexts["id_" + regions[key]], myUndefined, myUndefined, true);
       else regionInputLabel = getASpanElement("id_" + regions[key], "regionLabelText",
           selectedApplicationLanguageTexts["id_" + regions[key]], myUndefined, myUndefined, true);
       regionLabel.appendChild(regionInput);
       regionLabel.appendChild(regionInputLabel);
       region.appendChild(regionLabel);
       firstDivision.appendChild(region);
   }
}

/* create and return a SPAN Element with the passed Text in it */
function getASpanElement(spanID, spanClass, spanText, spanTextId, spanTextClass, keepItAsItIsFlag)
{
   spanElement = document.createElement("span");
   if (spanID) { spanElement.setAttribute("id", spanID); }
   if (spanClass) { spanElement.setAttribute("class", spanClass); }
   if (spanTextId || spanTextClass)
   {
       var textNode = (keepItAsItIsFlag)?document.createTextNode(spanText):document.createTextNode(spanText + " ");
       // set Span Text Id and Class if given
       if (spanTextId) { textNode.setAttribute("id", spanID); }
       if (spanTextClass) { textNode.setAttribute("class", spanClass); }
       // add span text node to the span element
       spanElement.appendChild(textNode);
   }
   // just text no Span Text Id or Class
   else
   {
       if (spanText)
       {
           (keepItAsItIsFlag)?spanElement.textContent = spanText:spanElement.textContent = spanText + " ";
       }
   }
   return spanElement;
}

/* create and return a P Element with the passed Text in it */
function getAPTagWithASpanElement(spanID, spanClass, spanText, spanTextId, spanTextClass)
{
   pElement = document.createElement("p");
   pElement.setAttribute("class", "inlineBlock");
   spanElement = document.createElement("span");
   if (spanID) { spanElement.setAttribute("id", spanID); }
   if (spanClass) { spanElement.setAttribute("class", spanClass); }
   if (spanTextId || spanTextClass)
   {
       var textNode = document.createTextNode(spanText + " ");
       // set Span Text Id and Class if given
       if (spanTextId) { textNode.setAttribute("id", spanID); }
       if (spanTextClass) { textNode.setAttribute("class", spanClass); }
       // add span text node to the span element
       spanElement.appendChild(textNode);
   }
   // just text no Span Text Id or Class
   else { if (spanText) { spanElement.textContent = spanText + " "; } }
   pElement.appendChild(spanElement);
   return pElement;
}

function createCountryInformationLabels (elementTag, infoIds, classes, leftFlag)
{
   for (var key in infoIds)
   {
       var oneInfoValue = infoIds[key];
       var oneInfoAnchor = document.createElement("a");
       if (countryCategorySharedLinks[oneInfoValue])
           oneInfoAnchor.setAttribute("href", countryCategorySharedLinks[oneInfoValue]);
       oneInfoAnchor.setAttribute("target", "_blank");
       var oneInfoSpan = document.createElement("span");
       oneInfoAnchor.setAttribute("id", "info_" + oneInfoValue);
       oneInfoAnchor.setAttribute("class", classes + " dropdown");
       var oneInfoSpanTextSpan = getASpanElement("id_" + oneInfoValue + "Display", (boldLinkCategories[oneInfoValue]?
           "countryInformationLabelState marginPointPoint2Rem makeBold":"countryInformationLabelState marginPointPoint2Rem"),
           selectedApplicationLanguageTexts["id_" + oneInfoValue + "Display"]);
       var oneInfoSpanTwoTextSpan = getASpanElement("id_Display" + oneInfoValue, "countryInformationLabelStateDisplay", "");
       oneInfoSpan.appendChild(oneInfoSpanTextSpan);
       oneInfoAnchor.appendChild(oneInfoSpan);
       // add the Dropdown Description
       if (boldLinkCategories[oneInfoValue]) {} // no Show Description only a Href Link
       else {
           if (noDropDownDescription[oneInfoValue] || iPhone) {} // skip these or iPhone: no need to have a Show Description
           else {
               var oneInfoSpanDDDescription;
               if (leftFlag) oneInfoSpanDDDescription =
                   getASpanElement("id_DisplayDDD" + oneInfoValue, "dropdown-content-left-description dropDownPBorder", myUndefined);
               else oneInfoSpanDDDescription = getASpanElement("id_DisplayDDD" + oneInfoValue, "dropdown-content-right-description dropDownPBorder", myUndefined);
               var oneCriteriaDDDLines = selectedApplicationLanguageTexts["id_" + oneInfoValue + "DM"];
               if (oneCriteriaDDDLines) {
                   oneCriteriaDDDLines = oneCriteriaDDDLines.split("<p>");
                   for (var onePLine in oneCriteriaDDDLines) {
                       var onePDescriptionTag = document.createElement("p");
                       onePDescriptionTag.setAttribute("class", "marginOnSidesABit");
                       onePDescriptionTag.innerHTML = oneCriteriaDDDLines[onePLine];
                       oneInfoSpanDDDescription.appendChild(onePDescriptionTag);
                   }
               }
               oneInfoAnchor.appendChild(oneInfoSpanDDDescription);
           }
       }
       oneInfoAnchor.appendChild(oneInfoSpanTwoTextSpan);
       elementTag.appendChild(oneInfoAnchor);
   }
}

function createSelectFields(firstDivision, regions, classes)
{
   for (var key in regions)
   {
       var selectLabel = document.createElement("label"); // Accessibility requirement
       var selectElement;
       selectElement = createReturnASelectElement(regions[key], regions[key], false, "selectBoxStyles marginPointPoint2Rem");
       setOptionValues(selectElement, regions[key]); // this should be called & done only once: no if else will be required
       if (regions[key] == "appLanguageToUse" && !dashBoardFlag) {
           var selectFieldSet = document.createElement("fieldset");
           var selectLegendFieldSet = document.createElement("legend");
           selectLegendFieldSet.setAttribute("class", "fieldsetForAccessibility");
           selectFieldSet.appendChild(selectLegendFieldSet);
           selectLabel.appendChild(selectElement);
           selectFieldSet.appendChild(selectLabel);
           firstDivision.appendChild(selectFieldSet);
       } else {
           selectLabel.appendChild(selectElement);
           firstDivision.appendChild(selectLabel);
       }
   }
}

function createReturnASelectElement(selectId, selectName, isSelectDisabled, selectClasses)
{
   var selectElement = document.createElement("select");
   if (selectId) selectElement.setAttribute("id", selectId);
   if (selectName) selectElement.setAttribute("name", selectName);
   if (isSelectDisabled) selectElement.setAttribute("disabled",  isSelectDisabled);
   if (selectClasses) selectElement.setAttribute("class", selectClasses);
   else selectElement.setAttribute("class",  "appLanguageSel");
   return selectElement;
}

/* set option values for a Select (drop down) tag: This can be done after the tags without any if statement */
function setOptionValues(selectElement, titleLabel)
{
   // initialize the Drop Down Box and add the Default First Value
   if (titleLabel != "appLanguageToUse")
   {
       selectElement.appendChild(setFirstOption(selectedApplicationLanguageTexts["id_" + titleLabel], titleLabel, selectElement), true);
       if (!noAscDesListing[titleLabel])
       {
           selectElement.appendChild(setFirstOption(selectedApplicationLanguageTexts["id_ListAscending"], "ListAscending"+titleLabel, selectElement), false);
           selectElement.appendChild(setFirstOption(selectedApplicationLanguageTexts["id_ListDescending"], "ListDescending"+titleLabel, selectElement), false);
       }
   }
   // add rest of the values
   if (titleLabel == "Country")
   {
       for (var key in fullNameForCountry)
       {
           createOneOption(selectElement, fullNameForCountry[key], key);
       }
   }
   else
   {
       // the rest in setSelectOptionsFromServerData()
       var optionCodeValues = window[optionCode[titleLabel]+"Code"];
       var optionTextValues = window[optionCode[titleLabel]+"OptionTexts"];
       for (var key in optionCodeValues)
       {
           createOneOption(selectElement, optionTextValues[key], optionCodeValues[key], titleLabel);
       }
   }
}

function createOneOption(selectElement, text, value, name, idName)
{
   var optionNode = document.createElement("option");
   if (idName) optionNode.setAttribute("id", startWithURL[idName]);
   else if (name == "Reports" || name == "DrivingSide") optionNode.setAttribute("id", "id_" + text);
   // create text node
   var textNode;
   if (name == "Reports" || name == "DrivingSide") textNode = document.createTextNode(selectedApplicationLanguageTexts["id_" + text]);
   else textNode = document.createTextNode(text);
   // add text node to <option>
   optionNode.appendChild(textNode);
   // set value="" on the <option>
   optionNode.setAttribute("value", value);
   // set name="" on the <option>
   if (name)
       optionNode.setAttribute("name", name);
   // add the new <option> to the <select>
   selectElement.appendChild(optionNode);
}

/*
*  Set Select DD Box Options Utility Method: Array (of values), Select DD Box Element
*  "options": Option values Array
*  selectElement: Select Drop Down Box DOM element
*/
function setApplicationLanguageOptions(options, selectElement)
{
   // "key in" works both with Arrays and JSON Objects
   for (var key in options)
   {
       //create <option>
       var optionNode = document.createElement("option");
       optionNode.setAttribute("id", options[key].id);
       // set value
       optionNode.setAttribute("value", options[key].value);
       // create text node
       var textNode = document.createTextNode(options[key].text);
       // add text node to <option>
       optionNode.appendChild(textNode);
       // add the new <option> to the <select>
       selectElement.appendChild(optionNode);
   }
}

/*
* Create and Set the First Option as the Default value: Choose One... Sec birini...
* Returns option HTML element
*/
function setFirstOption(chooseOneText, chooseOneValue, dropDownBox, resetFlag)
{
    // initialize the drop down Box
    if (resetFlag)
       dropDownBox.innerHTML = "";
    // create reset (empty) <option> with Choose one...
    var resetOption = document.createElement("option");
    // set id on the option text
    resetOption.setAttribute("id", "id_" + chooseOneValue);
    // create text node
    var resetOptionText = document.createTextNode(chooseOneText);
    // add text node to <option>
    resetOption.appendChild(resetOptionText);
    // set value="" on the <option>
    resetOption.setAttribute("value", chooseOneValue);
    // set name="" on the <option>
    resetOption.setAttribute("name", chooseOneValue);
    return resetOption;
}

/*
* Set the complete Drop Down Box values by Using above setOptions
*/
function setApplicationLanguageDropDownBox(selectId, optionsArray)
{
   var selectElement = document.getElementById(selectId);
   if (selectElement)
   {
       setApplicationLanguageOptions(optionsArray, selectElement)
   }
}

function setOptionsFromSavedData(selectTag, valuesJSON)
{
   for (var key in valuesJSON)
   {
       var oneOption = document.createElement("option");
       oneOption.text = valuesJSON[key].value;
       selectTag.options.add(oneOption);
   }
}

// Application Language, World Languages, Religions, Colors, Shapes, Water...
function setSelectOptionsFromServerData()
{
   // Application Language Drop Down (Select/Options)
   setTimeout(function () {
       setOptionsFromSavedData(document.getElementById("Language"),worldLanguagesDropDownValues);
   }, 700);
   setTimeout(function () {
       setOptionsFromSavedData(document.getElementById("Religion"),worldReligionsDropDownValues);
   }, 750);
   if (appleProduct == false) {
       setTimeout(function () {
           setOptionsFromSavedData(document.getElementById("Water"),worldWatersDropDownValues);
       }, 800);
       setTimeout(function () {
           setOptionsFromSavedData(document.getElementById("Color"),flagsColorsDropDownValues);
       }, 850);
       setTimeout(function () {
           setOptionsFromSavedData(document.getElementById("Color2nd"),flagsColorsDropDownValues);
       }, 875);
       setTimeout(function () {
           setOptionsFromSavedData(document.getElementById("Color3rd"),flagsColorsDropDownValues);
       }, 895);
       setTimeout(function () {
           setOptionsFromSavedData(document.getElementById("Shape"),flagsShapesDropDownValues);
       }, 900);
       setTimeout(function () {
           setOptionsFromSavedData(document.getElementById("Shape2nd"),flagsShapesDropDownValues);
       }, 910);
       setTimeout(function () {
           setOptionsFromSavedData(document.getElementById("Shape3rd"),flagsShapesDropDownValues);
       }, 920);
   }
}

function muteTheSoundCodes(h2Title, parentElement, registerFlag)
{
   var playCountrySounds = document.createElement("span"); // Mute the sound
   playCountrySounds.setAttribute("id", "muteMySound");
   if (registerFlag) {
       if (parentElement) playCountrySounds.setAttribute("class", "muteMeRegister");
       else playCountrySounds.setAttribute("class", "muteMe");
   }
   else if (parentElement) playCountrySounds.setAttribute("class", "marginPointPoint2Rem muteMeRegister");
   else playCountrySounds.setAttribute("class", "marginPointPoint2Rem muteMe");
   var playCountrySoundsLabel = document.createElement("label");
   var playCountrySoundsLabelTextSpan;
   var playCountrySoundsInfoCheckBox = document.createElement("input");
   playCountrySoundsInfoCheckBox.setAttribute("id", "id_CheckBoxPlaySounds");
   playCountrySoundsInfoCheckBox.setAttribute("type", "checkbox");
   playCountrySoundsInfoCheckBox.setAttribute("class", "displayNone");
   soundOnOffIcon = document.createElement("i");
   (registerFlag)?soundOnOffIcon.setAttribute("id", "soundOnOffIconRegister"):soundOnOffIcon.setAttribute("id", "soundOnOffIcon");
   soundOnOffIcon.setAttribute("class", "material-icons");
   if (startupValuesJSONObject.isSoundOff) {
       playCountrySoundsInfoCheckBox.checked = true;
       soundOnOffIcon.textContent = "play_circle_outline";
       soundOnOffIcon.setAttribute("title", selectedApplicationLanguageTexts["title_soundOnOffIconPlay"]);
       playCountrySoundsLabelTextSpan = getASpanElement("id_PlaySound","appleIOSTop",selectedApplicationLanguageTexts["title_soundOnOffIconPlay"], myUndefined, myUndefined, true);

   } else {
       soundOnOffIcon.textContent = "pause_circle_outline";
       soundOnOffIcon.setAttribute("title", selectedApplicationLanguageTexts["title_soundOnOffIconPause"]);
       playCountrySoundsLabelTextSpan = getASpanElement("id_PlaySound","appleIOSTop",selectedApplicationLanguageTexts["title_soundOnOffIconPause"], myUndefined, myUndefined, true);
   }
   playCountrySoundsLabel.appendChild(playCountrySoundsInfoCheckBox);
   playCountrySoundsLabel.appendChild(playCountrySoundsLabelTextSpan);
   playCountrySoundsLabel.appendChild(soundOnOffIcon);
   playCountrySounds.appendChild(playCountrySoundsLabel);
   if (parentElement) {
       parentElement.appendChild(playCountrySounds);
   }
   else {
       h2First.appendChild(playCountrySounds);
       // World or Country Name
       h2First.appendChild(getASpanElement("id_CountryFacts", myUndefined,h2Title));
   }
}

function addApplicationLanguageSelectionDropDownBox(addIntoTag) // See Global only it is not using this function...
{
   // Application language Selection Drop Down Menu (no more a Box: a Select/Option)
   var dropDownTopDiv = document.createElement("div");
   dropDownTopDiv.setAttribute("class", "dropdown");
   var dropDownButton = document.createElement("button");
   dropDownButton.setAttribute("class", "dropbtn");
   dropDownButton.setAttribute("type", "button");
   setTimeout(function() {
       createAnImageInA(dropDownButton, DEFAULTLANGUAGE,
           DEFAULTCOUNTRY, DEFAULTURL, "dropDownFlagText", true);
   }, 50);
   dropDownTopDiv.appendChild(dropDownButton);
   var dropDownInnerDiv = document.createElement("div");
   dropDownInnerDiv.setAttribute("class", "dropdown-content");

   for (var langName in selectedApplicationLanguageName) {
       createAnImageInA(dropDownInnerDiv, selectedApplicationLanguageName[langName][0],
           selectedApplicationLanguageName[langName][1], selectedApplicationLanguageName[langName][2]);
   }
   dropDownTopDiv.appendChild(dropDownInnerDiv);
   if (addIntoTag) addIntoTag.appendChild(dropDownTopDiv);
   else h2First.appendChild(dropDownTopDiv);
}

function createAnImageInA(addInTag, languageName, countryName, hrefURL, spanTextClass, noHrefFlag) {
   var dropDownA = document.createElement("a");
   if (noHrefFlag) { } // no href/target/alt: The Drop Down Menu Text and Flag
   else {
       dropDownA.setAttribute("href", hrefURL);
       dropDownA.setAttribute("target", "_self");
   }
   var dropDownAImg = document.createElement("img");
   dropDownAImg.setAttribute("class", "dropdownFlag");
   dropDownAImg.setAttribute("src", "data:image/svg+xml," + flagsSVGFiles[countryName].svg);
   dropDownAImg.setAttribute("alt", countryName);
   dropDownA.appendChild(dropDownAImg);
   if (spanTextClass) dropDownA.appendChild(getASpanElement(myUndefined, spanTextClass, languageName));
   else dropDownA.appendChild(getASpanElement(myUndefined, myUndefined, languageName));
   addInTag.appendChild(dropDownA);
}

function setCombineValueCodes()
{
   if (currentEWorldPage == "Startup" || currentEWorldPage == "eWorld Global") {
       setTimeout(function() // if user has the startup mute value
       {
           if (startupValuesJSONObject.combine == "id_RadioCombineNoneSearch") {
               combineTheSearchNoneRadioBox.setAttribute("checked", true);
               document.getElementById("id_CombineSearchNone").classList.add("selectedInputTag");
               previousCombineOption = "id_RadioCombineNoneSearch";
           }
           else if (startupValuesJSONObject.combine == "id_RadioCombineAndSearch") {
               combineTheSearchAndRadioBox.setAttribute("checked", true);
               if (document.getElementById("id_CombineSearchAnd"))
                   document.getElementById("id_CombineSearchAnd").classList.add("selectedInputTag");
               previousCombineOption = "id_RadioCombineAndSearch";
           }
           else {
               combineTheSearchOrRadioBox.setAttribute("checked", true);
               document.getElementById("id_CombineSearchOr").classList.add("selectedInputTag");
               previousCombineOption = "id_RadioCombineOrSearch";
           }
           if (startupValuesJSONObject.isReverse) {
               combineTheSearchReverseRadioBox.setAttribute("checked", true);
               document.getElementById("id_CombineSearchReverse").classList.add("selectedInputTag");
           }
       }, 900);
   }
}

function combineSearchCodes(parentElement, combineClass)
{
   // Combine the Search
   var combineFieldSet = document.createElement("fieldset");
   var legendFieldSet = document.createElement("legend");
   combineFieldSet.setAttribute("class", "fieldsetForAccessibility");
   combineFieldSet.appendChild(legendFieldSet);

   // Solo or Combine Search Box
   var combineTheSearchDiv = document.createElement("div");
   combineTheSearchDiv.setAttribute("id", "combineSearch");

   var combineTheSearchLabelTextSpan = getASpanElement("id_CombineSearchText", myUndefined,
       selectedApplicationLanguageTexts["id_CombineSearchText"]);
   if (combineClass)
       combineTheSearchLabelTextSpan.classList.add(combineClass);
   combineTheSearchDiv.appendChild(combineTheSearchLabelTextSpan);

   combineTheSearchNoneRadioBox = addACombineType(combineTheSearchDiv, "X","id_CombineSearchNone","title_CombineSearchNone","id_RadioCombineNoneSearch");
   combineTheSearchAndRadioBox = addACombineType(combineTheSearchDiv, "&","id_CombineSearchAnd","title_CombineSearchAnd","id_RadioCombineAndSearch");
   combineTheSearchOrRadioBox = addACombineType(combineTheSearchDiv, "l","id_CombineSearchOr","title_CombineSearchOr","id_RadioCombineOrSearch");
   combineTheSearchReverseRadioBox = addACombineType(combineTheSearchDiv, "!","id_CombineSearchReverse","title_CombineSearchReverse","id_RadioCombineReverseSearch");

   combineFieldSet.appendChild(combineTheSearchDiv);
   parentElement.appendChild(combineFieldSet);
}

function addACombineType(combineTheSearchDiv,typeValue,typeId,typeTitle,typeRadioBoxId)
{
   var aTextSpan = getASpanElement(typeId,myUndefined,typeValue);
   aTextSpan.setAttribute("class", "selectBoxStyles inlineBlock combineCharStyle");
   aTextSpan.setAttribute("title", selectedApplicationLanguageTexts[typeTitle]);
   var aRadioBox = document.createElement("input");
   aRadioBox.setAttribute("id", typeRadioBoxId);
   aRadioBox.setAttribute("class", "displayNone");
   aRadioBox.setAttribute("type", "radio");
   if (typeValue == "!") aRadioBox.setAttribute("name", "reverse");
   else aRadioBox.setAttribute("name", "combine");
   aRadioBox.setAttribute("value", typeRadioBoxId);

   var aLabel = document.createElement("label");
   aLabel.appendChild(aRadioBox);
   aLabel.appendChild(aTextSpan);
   combineTheSearchDiv.appendChild(aLabel);
   return aRadioBox;
}

function setTheSelectedRegion(region) // used by region and register
{
   if (previousRegion == -1)
   {
       if (!document.getElementById("id_" + region).classList.contains("selectedInputTag"))
           document.getElementById("id_" + region).classList.add("selectedInputTag");
       previousRegion = region;
   }
   else
   {
       if (document.getElementById("id_" + previousRegion).classList.contains("selectedInputTag"))
           document.getElementById("id_" + previousRegion).classList.remove("selectedInputTag");
           previousRegion = region;
       if (!document.getElementById("id_" + region).classList.contains("selectedInputTag"))
           document.getElementById("id_" + region).classList.add("selectedInputTag");
   }
}

// Reverse the Report (selected countries) used by Register and Dashboard
function processReverseRadioInput()
{
   if (document.getElementById("id_CombineSearchReverse").classList.contains("selectedInputTag")) // toggle the selection
   {
       document.getElementById("id_CombineSearchReverse").classList.remove("selectedInputTag");
       document.getElementById("id_RadioCombineReverseSearch").checked = false;
   }
   else
   {
       document.getElementById("id_CombineSearchReverse").classList.add("selectedInputTag");
       document.getElementById("id_RadioCombineReverseSearch").checked = true;
   }
}

function numberFixedToString(number)
{   if (stateIsShowing) return number; // US States has formatted Population and Surface Area data already
   number = parseInt(number);
   if (number > 999999999999) // trillion
   {
       return (number/1000000000000).toFixed(2) + "T";
   }
   else if (number > 999999999) // billion
   {
       return (number/1000000000).toFixed(2) + "B";
   }
   else if (number > 999999) // million
   {
       return (number/1000000).toFixed(2) + "M";
   }
   else if (number > 999) // thousands
   {
       return (number/1000).toFixed(2) + "K";
   }
   else return number; // 0 to 999
}

function createATable(tableElement, headings, tableData, columnLocations, objectType, header, staticFlag, howManyRows)
{
   var tableTag = document.getElementById(tableElement);
   var htmlTableWithTexts = document.createElement("tbody");
   var trElement;
   var thElement;
   var tdElement;
   var textElement;
   if (howManyRows <= 0) howManyRows = 15; // default
   trElement = document.createElement("tr"); // Headings tr row
   for (var key in headings)
   {
       thElement = document.createElement("th");
       if (headings[key] == "Count") // number of Country and/or Entities here instead of "Count"
       {
           var rowCount = 0;
           for (var x in tableData)
           {
               rowCount++;
           }
           textElement = document.createTextNode(rowCount);
           thElement.appendChild(textElement);
           thElement.setAttribute("id","id_TableRowCount");
       }
       else
       {
           if (staticFlag) textElement = document.createTextNode(headings[key]); // Country Codes is a pre-defined fix data
           else textElement = document.createTextNode(categoryDescription[headings[key]]?selectedApplicationLanguageTexts[categoryDescription[headings[key]]]:headings[key]);
           thElement.appendChild(textElement);
       }
       trElement.appendChild(thElement);
   }
   htmlTableWithTexts.appendChild(trElement); // add Headings
   // Loop to define the Rows (td) in (tr)
   createTableRows(htmlTableWithTexts, trElement, tdElement, textElement, columnLocations, tableData, objectType, headings, howManyRows, staticFlag);
   if (header) document.getElementById("id_ReportHeaderParagraph").innerHTML = header;
   loadAndShowTable(tableTag, htmlTableWithTexts, staticFlag); // Load and Show the table
}

function loadAndShowTable(tableTag, htmlTableWithTexts, staticFlag)
{
   if (tableTag.firstChild)
   {
       tableTag.removeChild(tableTag.firstChild);
   }
   tableTag.appendChild(htmlTableWithTexts); // load
   if (tableTag.classList.contains("displayNone") && !staticFlag) // show
       tableTag.classList.remove("displayNone");
}

function createOneTd(trElement, tdElement, textElement, text)
{
   tdElement = document.createElement("td");
   textElement = document.createTextNode(text);
   tdElement.appendChild(textElement);
   trElement.appendChild(tdElement);
}

function createTableRows(htmlTableWithTexts, trElement, tdElement, textElement, columnLocations, tableData, objectType, headings, howManyRows, staticFlag)
{
   var usedTableRowCount = 0;
   var loop = 1;
   var aCountryConvertedNativeCountryFullName;
   var arrayOrJSONCountryName;
   for (var country in tableData) {
       usedTableRowCount++;
       trElement = document.createElement("tr");
       if (loop%2 != 0) trElement.setAttribute("class", "oddRow"); // coloring each row different alternatively
       else trElement.setAttribute("class", "evenRow");
       if (staticFlag && usedTableRowCount > howManyRows) trElement.classList.add("displayNone");
       createOneTd(trElement, tdElement, textElement, loop);
       if (objectType != "Object") { // Create a line with Long (Full) Country Name if NOT "Color", "Shape", "Water", "Language", "Religion"
           if (objectType == "Array") arrayOrJSONCountryName = country;
           else arrayOrJSONCountryName = tableData[country];
           if (arrayOrJSONCountryName.indexOf("|") != -1) { // more than one Capital City
               arrayOrJSONCountryName = arrayOrJSONCountryName.substring(0, arrayOrJSONCountryName.indexOf("|"));
           }
           // will only be active during the Countries Table Creation time for a Language
           if (typeof countryFromISOLongName != "undefined" && countryFromISOLongName[arrayOrJSONCountryName]) {
               aCountryConvertedNativeCountryFullName = countryFromISOLongName[arrayOrJSONCountryName];
           }
           else
               aCountryConvertedNativeCountryFullName = fullNameForCountry[arrayOrJSONCountryName];
           if (fullNameForCountry[aCountryConvertedNativeCountryFullName])
               aCountryConvertedNativeCountryFullName = fullNameForCountry[aCountryConvertedNativeCountryFullName];
           createOneTd(trElement, tdElement, textElement, aCountryConvertedNativeCountryFullName);
       }
       if (columnLocations == -999) { // all data will be used: Country Codes
           // get the Country Codes as an Array from JSON object: For the Country Codes Listing
           var codesArray = tableData[country];
           loop++;
           for (var x in codesArray) {
               createOneTd(trElement, tdElement, textElement, codesArray[x]);
           }
       }
       else { // only Features with the Column location will be used for the report (table)
           loop++;
           for (var x in columnLocations) {
               if (columnLocations[x] == -1) createOneTd(trElement, tdElement, textElement,
                   getFeaturesAsText(featuresOfAllCountries[tableData[country]],(headings[+x + 2].indexOf("Color") != -1)?"Color":"Shape"));
               else if (columnLocations[x] == 0 || columnLocations[x] == 7) {
                   createOneTd(trElement, tdElement, textElement, numberFixedToString(featuresOfAllCountries[tableData[country]][columnLocations[x]]["value"])); }
               else createOneTd(trElement, tdElement, textElement, featuresOfAllCountries[tableData[country]][columnLocations[x]]["value"]);
           }
       }
       htmlTableWithTexts.appendChild(trElement);
   }
}

function getFeaturesAsText(oneCountryFeatures, oneSelectionId)
{
   var featuresAsText = "";
   // only Flag Color or Shape can have multiple enteries as with the arbitary locations
   for (var y in oneCountryFeatures)
   {
       if (oneCountryFeatures[y].feature == oneSelectionId)
       {
           featuresAsText = featuresAsText + oneCountryFeatures[y]["value"];
           featuresAsText = featuresAsText + " and ";
       }
   }
   return featuresAsText.substring(0, featuresAsText.lastIndexOf(" and "));
}

function retrieveAndDisplayCountryInformation(countryName)
{
   if (dashBoardFlag) { // For Search Fields the Hide/Show is reverse. Hide the Country means Show dashBoard, show Country means Hide dashBoard
       for (var key in searchSelects) {
           if (document.getElementById(searchSelects[key])) {
               if (searchSelects[key] == "LandArea" || searchSelects[key] == "Language" || searchSelects[key] == "Religion"
                   || searchSelects[key] == "Population" || searchSelects[key] == "Reports") continue;
               if (countryName == "hide") {
                   if (document.getElementById(searchSelects[key]).classList.contains("displayNone"))
                       document.getElementById(searchSelects[key]).classList.remove("displayNone");
               } else {
                   if (!document.getElementById(searchSelects[key]).classList.contains("displayNone")) // show
                       document.getElementById(searchSelects[key]).classList.add("displayNone");
               }
           }
       }
   }
   // This must stay after "for (var key in searchSelects)" above
   // Travel State Government Search Button won't be seen if the Country is USA: Keep it Hidden: above makes it abled.
   for (var key in dataFields) {
       if (countryName == "hide") {
           if (document.getElementById("info_"+dataFields[key]) && !document.getElementById("info_"+dataFields[key]).classList.contains("displayNone"))
               document.getElementById("info_"+dataFields[key]).classList.add("displayNone");
       } else {
           countryIsShowing = true; // show
           if (document.getElementById("info_"+dataFields[key]) && document.getElementById("info_"+dataFields[key]).classList.contains("displayNone"))
               document.getElementById("info_"+dataFields[key]).classList.remove("displayNone");
       }
   }
   var oneCountryFeatures;
   if (!(countryName == "hide")) { oneCountryFeatures = retrieveAllFeaturesForThisCountry(countryName); }
}

function retrieveAllFeaturesForThisCountry(countryName)
{
   var featuresOfEachCountry = featuresOfAllCountries[countryName];
   // Set the Fields
   setCountryFieldValues(countryName, featuresOfEachCountry);
   // Set the Links
   setCountryTravelWarningLinkValues(countryName);
   // set the Country Time and Date Page Link: Trim and Replace space with "-"
   setCountryTimeDateWeatherValues(countryName, featuresOfEachCountry);
   // set the Country Wiki Page
   if (appleProduct == false) setCountryWikiValues(countryName);
   // set Country CIA Page: Hide if the "country" is a US State or British Virgin Islands
   if (appleProduct == false) setCountryCiaFactBookValues(countryName);
   // set Country UN Page: Hide if the "country" is a US State or British Virgin Islands
   setCountryUNValues(countryName);
}

function setCountryFieldValues(countryName, featuresOfEachCountry) // this will be re-structured.. rushing for iPhone...
{
   var zoomNumber = setTheZoom(featuresOfEachCountry[7]['value']); // With the Country Area: Adjust the Zoom: If a Small Country make it Bigger
   if (stateIsShowing)
       if (document.getElementById("id_ReligionDisplay")) document.getElementById("id_ReligionDisplay").innerHTML = selectedApplicationLanguageTexts["id_Religiosity"];
   else if (document.getElementById("id_ReligionDisplay")) document.getElementById("id_ReligionDisplay").innerHTML = selectedApplicationLanguageTexts["id_Religion"];
   if (stateIsShowing) document.getElementById("info_Population").href = "https://www.states101.com/populations"; /* Population */
   else document.getElementById("info_Population").href = countryCategorySharedLinks["Population"];
   document.getElementById("id_DisplayPopulation").innerHTML = numberFixedToString(featuresOfEachCountry[0]['value']) + oneBlank;
   if (document.getElementById("id_DisplayCountryCodes")) /* Country Codes */
   document.getElementById("id_DisplayCountryCodes").innerHTML = featuresOfEachCountry[1]['value'] + oneBlank + ((!stateIsShowing)?featuresOfEachCountry[1]['comment']:"");
   if (document.getElementById("info_CountryCodes"))
       if (stateIsShowing) document.getElementById("info_CountryCodes").href = "https://www.states101.com/articles/postal-codes";
       else document.getElementById("info_CountryCodes").href = countryCategorySharedLinks["CounryCodes"];
   // Google Map: set Longitude and Latitude
   if (stateIsShowing) document.getElementById("info_GoogleMap").href = "https://www.google.com/maps/place/" + usStates[countryName] + "+state+USA";
   else document.getElementById("info_GoogleMap").href = "https://www.google.com/maps/@?api=1&map_action=map&center=" +
         featuresOfEachCountry[2]['value'] + "," + featuresOfEachCountry[3]['value'] + zoomNumber;
   /* Country Currency */ if (document.getElementById("id_DisplayCurrency")) document.getElementById("id_DisplayCurrency").innerHTML = featuresOfEachCountry[4]['value'];
   /* Life Expectancy */ document.getElementById("id_DisplayLifeExpectancy").innerHTML = featuresOfEachCountry[5]['value'];
   /* Overweight */ document.getElementById("id_DisplayOverweight").innerHTML = featuresOfEachCountry[6]['value'] + "%";
   if (stateIsShowing) document.getElementById("info_Overweight").href = "https://wallethub.com/edu/fattest-states/16585/";
   else document.getElementById("info_Overweight").href = countryCategorySharedLinks["Overweight"];
   /* Surface (Land) Area */ if (document.getElementById("id_DisplayLandArea")) document.getElementById("id_DisplayLandArea").innerHTML = numberFixedToString(featuresOfEachCountry[7]['value']) + " km2";
   /* Tourism Website */ document.getElementById("info_Tourism").href = featuresOfEachCountry[8]['value'];
   /* Driving Side */ if (document.getElementById("id_DisplayDrivingSide")) document.getElementById("id_DisplayDrivingSide").innerHTML = featuresOfEachCountry[9]['value'];
   /* Offical Government Website */ if (document.getElementById("info_Government")) document.getElementById("info_Government").href = featuresOfEachCountry[10]['value'];
   /* Total and Per Capita GDP */ if (document.getElementById("id_DisplayIncome")) document.getElementById("id_DisplayIncome").innerHTML = featuresOfEachCountry[11]['value'];
   /* Gini */ if (document.getElementById("id_DisplayGini")) document.getElementById("id_DisplayGini").innerHTML = featuresOfEachCountry[12]['value'];
   /* HDI */ if (document.getElementById("id_DisplayHDI")) document.getElementById("id_DisplayHDI").innerHTML = featuresOfEachCountry[13]['value'];
   /* Capital City/Cities */ document.getElementById("id_DisplayCapitalCities").innerHTML = featuresOfEachCountry[14]['value'];
   hideWithTitle(document.getElementById("id_DisplayCapitalCities"));
   document.getElementById("info_CapitalCities").href = featuresOfEachCountry[14]['comment'];
   /* Language(s) */ document.getElementById("id_DisplayLanguage").innerHTML = featuresOfEachCountry[15]['value'];
   hideWithTitle(document.getElementById("id_DisplayLanguage"));
   if (document.getElementById("id_DisplayWater")) {
       document.getElementById("id_DisplayWater").innerHTML = featuresOfEachCountry[16]['value']; /* Water(s): ocean(s) and/or sea(s) */
       if (featuresOfEachCountry[16]['comment']) document.getElementById("id_DisplayWater").innerHTML =
           document.getElementById("id_DisplayWater").innerHTML + " " + featuresOfEachCountry[16]['comment'];
       hideWithTitle(document.getElementById("id_DisplayWater"));
   }
   if (document.getElementById("id_DisplayReligion")) { /* Religions */
       document.getElementById("id_DisplayReligion").innerHTML = featuresOfEachCountry[17]['value'];
       hideWithTitle(document.getElementById("id_DisplayReligion"));
   }
   if (appleProduct == false) showUNReportedExtraFields(featuresOfEachCountry);
}

function setTheZoom(countryLandArea)
{
   if (countryLandArea > 13000000) return "&zoom=2";
   else if (countryLandArea > 3000000) return "&zoom=4";
   else if (countryLandArea > 1500000) return "&zoom=5";
   else if (countryLandArea > 750000) return "&zoom=6";
   else if (countryLandArea < 1000) return "&zoom=10";
   else return "&zoom=7";
}

function hideWithTitle(element)
{
   var text = element.innerHTML;
   var dropDownDescription = document.getElementById("id_DisplayDDD" + element.getAttribute("id").substring(10));
   if (dropDownDescription) {
       if (text.indexOf(",") > 0)
       {
           element.innerHTML = text.substring(0, text.indexOf(",")) + "...";
           addShowDescription (dropDownDescription);
           dropDownDescription.innerHTML = text;
       } // "not any a=and in Slovak but " a " not any "and" but " and "
       else if (text.indexOf(" " + selectedApplicationLanguageTexts["id_And"].toLowerCase() + " ") > 0)
       {
           element.innerHTML = text.substring(0, text.indexOf(selectedApplicationLanguageTexts["id_And"].toLowerCase())) + "...";
           addShowDescription (dropDownDescription);
           dropDownDescription.innerHTML = text;
       }
       else {
           removeShowDescription (dropDownDescription);
       }
   }
   else removeShowDescription (dropDownDescription);
}

function addShowDescription (dropDownDescription) {
   if (dropDownDescription)
       dropDownDescription.setAttribute("class", "dropdown-content-left-description dropDownPBorder");
}

function removeShowDescription (dropDownDescription) {
   if (dropDownDescription)
       dropDownDescription.setAttribute("class", "displayNone");
}

function showUNReportedExtraFields(featuresOfEachCountry)
{
   // show Sex and Seats Held By Ratios
   document.getElementById("id_DisplaySexRatio").innerHTML = featuresOfEachCountry[18]['value'];
   document.getElementById("id_DisplaySeatRatio").innerHTML = featuresOfEachCountry[19]['value'] + "% ";
   if (!stateIsShowing) // show Cell, Internet, R&D, Clean Water and Toilet Percentages: US State show US value not individual one
   {
       document.getElementById("id_DisplayCell").innerHTML = featuresOfEachCountry[21]['value'];
       document.getElementById("id_DisplayInternet").innerHTML = featuresOfEachCountry[22]['value'] + "%";
       document.getElementById("id_DisplayRandD").innerHTML = featuresOfEachCountry[23]['value'] + "% GDP";
       document.getElementById("id_DisplayCleanWater").innerHTML = featuresOfEachCountry[24]['value'] + "%";
       document.getElementById("id_DisplayCleanToilet").innerHTML = featuresOfEachCountry[25]['value'] + "%";
   }
}

function setCountryTravelWarningLinkValues(countryName)
{
   var travelStateGovCountryName;
   if (travelWarningCountryCode[countryName]) travelStateGovCountryName = travelWarningCountryCode[countryName];
   else travelStateGovCountryName = countryName;

   if (travelStateGovCountryName == "none" || stateIsShowing)
   {
       if (!document.getElementById("info_TravelWarning").classList.contains("displayNone"))
       {
           document.getElementById("info_TravelWarning").classList.add("displayNone");
       }
   }
   else
   {
       if (document.getElementById("info_TravelWarning").classList.contains("displayNone"))
       {
           document.getElementById("info_TravelWarning").classList.remove("displayNone");
       }
       document.getElementById("info_TravelWarning").href =
           "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/" + travelStateGovCountryName + ".html";
   }
}

function setCountryTimeDateWeatherValues(countryName, featuresOfEachCountry)
{
   if (stateIsShowing)
   {
       document.getElementById("info_TimeAndDate").href = "https://www.timeanddate.com/worldclock/usa/" +
           (timeDateOrWeather[featuresOfEachCountry[14]['value']]?timeDateOrWeather[featuresOfEachCountry[14]['value']]
               :featuresOfEachCountry[14]['value'].trim().replace(/ /g, "-"));
   }
   else if (timeDateOrWeatherSmallEntities[countryName])
   {
         document.getElementById("info_TimeAndDate").href = "https://www.timeanddate.com/worldclock/" + timeDateOrWeatherSmallEntities[countryName];
   }
   else
       document.getElementById("info_TimeAndDate").href = "https://www.timeanddate.com/worldclock/" +
           (timeDateOrWeather[countryName]?timeDateOrWeather[countryName]:countryName) + "/" +
               (timeDateOrWeather[countryCapitals[countryName]]
                   ?timeDateOrWeather[countryCapitals[countryName]].trim().replace(/ /g, "-").replace(/'/g, "")
                       :countryCapitals[countryName].trim().replace(/ /g, "-").replace(/'/g, ""));
   if (appleProduct == false) {
       if (stateIsShowing) // set the Country Weather Link: Trim and Replace space with "-"
       {
           document.getElementById("info_Weather").href = "https://www.timeanddate.com/weather/usa/";
               if (timeDateOrWeather[usStates[countryName]]?timeDateOrWeather[usStates[countryName]]:usStates[countryName])
                   document.getElementById("info_Weather").href +=
                   (timeDateOrWeather[usStates[countryName]]?timeDateOrWeather[usStates[countryName]]:usStates[countryName]
                      .trim().replace(/_/g, "-"));
       }
       else if (timeDateOrWeatherSmallEntities[countryName])
       {
             document.getElementById("info_Weather").href = "https://www.timeanddate.com/weather/" + timeDateOrWeatherSmallEntities[countryName];
       }
       else document.getElementById("info_Weather").href = "https://www.timeanddate.com/weather/" +
               (timeDateOrWeather[countryName]?timeDateOrWeather[countryName]:countryName) + "/" +
                   (timeDateOrWeather[countryCapitals[countryName]]
                       ?timeDateOrWeather[countryCapitals[countryName]].trim().replace(/ /g, "-").replace(/'/g, "")
                           :countryCapitals[countryName].trim().replace(/ /g, "-").replace(/'/g, ""));
   }
}

function setCountryCiaFactBookValues(countryName)
{
   var twoDigitLowerCase;
   if (!stateIsShowing && countryTwoDigitsCodeWithName[countryName]) twoDigitLowerCase = countryTwoDigitsCodeWithName[countryName].toLowerCase();
   if (stateIsShowing || countryName == "BonaireSintEustatiusandSaba" || countryName == "Guadeloupe"
       || countryName == "Martinique" || countryName == "IsleofMan" || countryName == "Reunion" || countryName == "AlandIslands")
   {
       if (!document.getElementById("info_CIACountry").classList.contains("displayNone"))
       {
           document.getElementById("info_CIACountry").classList.add("displayNone");
       }
   }
   else
   {
       if (ciaFactBookCodes[countryName])
       {
           document.getElementById("info_CIACountry").href = "https://www.cia.gov/library/publications/the-world-factbook/geos/" + ciaFactBookCodes[countryName];
       }
       else if (countryTwoDigitsCodeWithName[countryName] && ciaCountryCode[countryTwoDigitsCodeWithName[countryName].toLowerCase()])
       {                                                      https://www.cia.gov/library/publications/resources/the-world-factbook/geos/rq.html
           document.getElementById("info_CIACountry").href = "https://www.cia.gov/library/publications/the-world-factbook/geos/" +
             ciaCountryCode[twoDigitLowerCase] + ".html";
       }
       else document.getElementById("info_CIACountry").href =
           "https://www.cia.gov/library/publications/the-world-factbook/geos/" + twoDigitLowerCase + ".html";
   }
}

function setCountryUNValues(countryName)
{
   var twoDigitLowerCase;
   if (countryTwoDigitsCodeWithName[countryName] && !stateIsShowing) twoDigitLowerCase = countryTwoDigitsCodeWithName[countryName].toLowerCase();
   if (stateIsShowing || twoDigitLowerCase == "vg" || notInUNData[countryName])
   {
       if (!document.getElementById("info_UNCountry").classList.contains("displayNone"))
       {
           document.getElementById("info_UNCountry").classList.add("displayNone");
       }
   }
   else
   {
       document.getElementById("info_UNCountry").href = "http://data.un.org/en/iso/" + twoDigitLowerCase + ".html";
   }
}

function h2HeaderCodes(ifToBeAddedParent, ifToBeAddedClass)
{
   h2First = document.createElement("H2");
   if (ifToBeAddedClass) h2First.setAttribute("class", "h2Header " + ifToBeAddedClass);
   else h2First.setAttribute("class", "h2Header");

   // not visible audio tag will play the selected Flag's national anthem
   playAnthem = document.createElement("audio");
   playAnthem.setAttribute("controls", true);
   playAnthem.setAttribute("id", "id_AudioAnthem");
   playAnthem.setAttribute("class", "displayNone");
   var source1 = document.createElement('source');
   source1.setAttribute("id", "id_Source1");
   source1.src = "/anthems/Welcome.m4a";
   playAnthem.appendChild(source1);
   var source2 = document.createElement('source');
   source2.setAttribute("id", "id_Source2");
   source2.src = "/anthems/Welcome.m4a";
   playAnthem.appendChild(source2);
   h2First.appendChild(playAnthem);
   if (ifToBeAddedParent) ifToBeAddedParent.appendChild(h2First);
}

var playGreeting
function playGreetingCodes(ifHeaderElement)
{
   // not visible audio tag will play the selected Flag's Greetings
   playGreeting = document.createElement("audio");
   playGreeting.setAttribute("controls", true);
   playGreeting.setAttribute("id", "id_AudioGreeting");
   playGreeting.setAttribute("class", "displayNone");
   var source = document.createElement('source');
   source.setAttribute("id", "id_Greeting");
   source.setAttribute("src", "/greetings/Welcome.m4a"); // placeholder
   playGreeting.appendChild(source);
   h2First.appendChild(playGreeting);
   if (ifHeaderElement) ifHeaderElement.appendChild(h2First);
   else headerElement.appendChild(h2First);
}

function startPlaying(countryName)
{
   stopAllPlaying();
   // load the greeting regardless "mute"/"pause"
   document.getElementById("id_Greeting").src = "/greetings/" + allCountryLanguages[countryName] + ".m4a";
   playGreeting.load();
   // play Greeting the fist (stop incase the anthem is currently playing)
   if (document.getElementById("id_CheckBoxPlaySounds") && document.getElementById("id_CheckBoxPlaySounds").checked == false) // use false not !: visible
   {
       playGreeting.play();
   }
   // load the anthem
   document.getElementById("id_Source1").src = "/anthems/" + countryName + ".mp3";
   if (ogaOrOgg[countryName]) document.getElementById("id_Source2").src = "/anthems/" + countryName + ".oga"; // or ogg
   else document.getElementById("id_Source2").src = "/anthems/" + countryName + ".ogg";
   playAnthem.load();
   setTimeout(function()
   {
       if (document.getElementById("id_CheckBoxPlaySounds") && document.getElementById("id_CheckBoxPlaySounds").checked == false) // use false not !: visible
       {
           playAnthem.play();
       }
   }, 4500);
}

function stopAllPlaying(pausedFlag)
{
   playAnthem.pause();
   playAnthem.currentTime = 0;
   playGreeting.pause();
   playGreeting.currentTime = 0;
   if (pausedFlag)
   {
       soundOnOffIcon.textContent = "play_circle_outline";
       soundOnOffIcon.setAttribute("title", selectedApplicationLanguageTexts["title_soundOnOffIconPlay"]);
       document.getElementById("id_PlaySound").innerHTML = selectedApplicationLanguageTexts["title_soundOnOffIconPlay"];
   }
}

function playSoundsChanged()
{
   setTimeout(function()
   {
       if (document.getElementById("id_CheckBoxPlaySounds").checked)
       {
           stopAllPlaying(true);
       }
       else
       {
           soundOnOffIcon.textContent = "pause_circle_outline";
           soundOnOffIcon.setAttribute("title", selectedApplicationLanguageTexts["title_soundOnOffIconPause"]);
           document.getElementById("id_PlaySound").innerHTML = selectedApplicationLanguageTexts["title_soundOnOffIconPause"];
           playGreeting.play();
           // give time
           setTimeout(function () // give a bit time for the greeting to be finished
           {
               if (!document.getElementById("id_CheckBoxPlaySounds") || document.getElementById("id_CheckBoxPlaySounds").checked)
               {
                   stopAllPlaying(true);
               }
               else
               {
                   playAnthem.play();
               }
           }, 4500);
       }
   }, 300);
}

// Date and Time Javascript Function to be run with one second interval
function getDateTime()
{
   // http://www.w3schools.com/jsref/jsref_obj_date.asp
   currentTime = new Date();
   currentTimeString = currentTime.toLocaleString();
   currentTimeString = currentTimeString.replace(",",""); // no comma needed in between
   return currentTimeString;
}

// Date Only
function getDateOnly()
{
   currentTime = new Date();
   return currentTime.toDateString();
}

// Trigger a Mouse Event
function triggerAMouseEvent(idName)
{
   // keep "bubbles" true... required
   var event = new MouseEvent('click', { 'view': window,'bubbles': true,'cancelable': false });
   document.getElementById(idName).dispatchEvent(event);
}

// Position the cursor on this field
function positionCurser(fieldName)
{
   document.getElementById(fieldName).focus();
}

function setFooter() {
    var footerElement = document.createElement("footer");
    footerElement.setAttribute("class","center");
    var footerP = document.createElement("p");
    footerP.setAttribute("id","id_CopyRight");
    var footerP2 = document.createElement("p");
    footerP2.setAttribute("id","id_LanguageImplementedBy");
    footerElement.appendChild(footerP);
    footerElement.appendChild(footerP2);
    return footerElement;
}

function setNavigation(dataNav) {
    var navigationElement = document.createElement("nav");
    navigationElement.setAttribute("id", "id_Navigation");
    navigationElement.setAttribute("class", "center");
    navigationElement.setAttribute("data-nav", dataNav);
    return navigationElement;
}

function importAnExternalPageJSFile(templateTagId, externalJSFileName, navigationName)
{
   initializationUtilityForAll(navigationName);
   var ifExternalJSExist = document.getElementById("id_" + navigationName + "Script");
   // remove to add again to run the application configuration js file...
   if (ifExternalJSExist) {
       ifExternalJSExist.parentElement.removeChild(ifExternalJSExist);
   }
   var externalJavaScript = document.createElement('script');
   externalJavaScript.setAttribute("id", "id_" + navigationName + "Script");
   externalJavaScript.type = 'text/javascript';
   externalJavaScript.src = externalJSFileName;
   document.head.appendChild(externalJavaScript);
}

function removeAnExternalJSFileIfExist(jsFileName)
{
   var ifExternalJSExist = document.getElementById("id_" + jsFileName + "Script");
   if (ifExternalJSExist) {
       ifExternalJSExist.parentElement.removeChild(ifExternalJSExist);
   }
}

function setNavFooterTags(navigationName) {
   document.getElementById("id_Navigation").setAttribute("data-nav", navigationName); // must be before createNaviationTags
   createNavigationTags(document.getElementById("id_Navigation"));
   document.getElementById("id_CopyRight").innerHTML = "©2017-" + new Date().getFullYear() + " k12k20.com";
}

function createNavFooterAddIntoBodyAndReplaceBody(tagBody, tagHeader, tagMain, navigationName) {
   var tagNav = setNavigation("PlaceHolder");

   var tagFooter = setFooter();

   tagBody.appendChild(tagHeader);
   tagBody.appendChild(tagMain);
   tagBody.appendChild(tagNav);
   tagBody.appendChild(tagFooter);
   setTimeout(function() {
       document.getElementById("topHTML").replaceChild(tagBody, document.body);
       setNavFooterTags(navigationName);
   },75);
}

function fillLeadingZeros(text, size)
{
   if (text)
   {
       var size = size - text.length;
       var zeros = "";
       if (size > 0)
       {
           // add blanks
           while (size > 0)
           {
               zeros += "0";
               size--;
           }
       }
   }
   return zeros + text;
}
