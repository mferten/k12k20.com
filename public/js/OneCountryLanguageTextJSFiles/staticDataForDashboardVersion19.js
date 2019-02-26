// Get all the Country Names: Hard Key: Keep it sorted by Country for all...
// Run SELECT concat('"', country, '",') FROM countries order by country; Copy Row Unquoted
var allCountryNames = ['Afghanistan','AlandIslands','Albania','Algeria','AmericanSamoa','Andorra','Angola','Anguilla','AntiguaandBarbuda','AntarcticTreatySystem','Argentina','Armenia','Aruba',
'Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','BonaireSintEustatiusandSaba',
'BosniaandHerzegovina','Botswana','BouvetIsland','Brazil','BritishIndianOceanTerritory','BritishVirginIslands','Brunei','Bulgaria','BurkinaFaso','Burundi','Cambodia','Cameroon',
'Canada','CanaryIslands','CaboVerde','CaymanIslands','CentralAfricanRepublic','Chad','Chile','China','ChristmasIsland','CocosIslands','Colombia','Comoros','CookIslands','CostaRica',
'CotedIvoire','Croatia','Cuba','Curacao','Cyprus','Czechia','DemocraticRepublicoftheCongo','Denmark','Djibouti','Dominica','DominicanRepublic','Ecuador','Egypt','ElSalvador',
'EquatorialGuinea','Eritrea','Estonia','Eswatini','Ethiopia','FalklandIslands','FaroeIslands','Fiji','Finland','France','FrenchGuiana','FrenchPolynesia','FrenchSouthernandAntarcticLands',
'Gabon','Gambia','Georgia','Germany','Ghana','Gibraltar','Greece','Greenland','Grenada','Guadeloupe','Guam','Guatemala','Guernsey','Guinea','GuineaBissau','Guyana','Haiti',
'HeardIslandandMcDonaldIslands','Honduras','HongKong','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','IsleofMan','Israel','Italy','Jamaica','Japan','Jersey',
'Jordan','Kazakhstan','Kenya','Kiribati','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macau',
'Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','MarshallIslands','Martinique','Mauritania','Mauritius','Mayotte','Mexico','Micronesia','Moldova','Monaco',
'Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','NewCaledonia','NewZealand','Nicaragua','Niger','Nigeria','Niue',
'NorfolkIsland','NorthernMarianaIslands','NorthKorea','Norway','Oman','Pakistan','Palau','Panama','PapuaNewGuinea','Paraguay','Peru','Philippines','PitcairnIslands','Poland',
'Portugal','PuertoRico','Qatar','RepublicofCongo','Reunion','Romania','RussianFederation','Rwanda','SaintBarthelemy','SaintHelena','SaintKittsandNevis','SaintLucia','SaintMartin',
'SaintPierreandMiquelon','SaintVincentandGrenadines','Samoa','SanMarino','SaoTomeandPrincipe','SaudiArabia','Senegal','Serbia','Seychelles','SierraLeone','Singapore','SintMaarten',
'Slovakia','Slovenia','SolomonIslands','Somalia','SouthAfrica','SouthGeorgiaAndSouthSandwichIslands','SouthKorea','SouthSudan','Spain','SriLanka','StateofPalestine','Sudan',
'Suriname','SvalbardandJanMayen','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','TimorLeste','Togo','Tokelau','Tonga','TrinidadandTobago',
'Tunisia','Turkey','TurkishRepublicofNorthernCyprus','Turkmenistan','TurksandCaicosIslands','Tuvalu','Uganda','Ukraine','UnitedArabEmirates','UnitedKingdom',
'UnitedStatesMinorOutlyingIslands','UnitedStatesofAmerica','UnitedStatesVirginIslands','Uruguay','Uzbekistan','Vanuatu','VaticanCityAndHolySee','Venezuela','Vietnam',
'WallisandFutuna','WesternSahara','Yemen','Zambia','Zimbabwe'];

// country name from full name in Each Language: used here to get the country...
// SELECT concat('"', long_name, '":"',country ,'",') FROM countries order by country;
var countryNameFromLongName = {"Afghanistan":"Afghanistan","Åland Islands":"AlandIslands","Albania":"Albania","Algeria":"Algeria",
"American Samoa":"AmericanSamoa","Andorra":"Andorra","Angola":"Angola","Anguilla":"Anguilla","Antarctic Treaty System":"AntarcticTreatySystem",
"Antigua and Barbuda":"AntiguaandBarbuda","Argentina":"Argentina","Armenia":"Armenia","Aruba":"Aruba","Australia":"Australia","Austria":"Austria",
"Azerbaijan":"Azerbaijan","Bahamas":"Bahamas","Bahrain":"Bahrain","Bangladesh":"Bangladesh","Barbados":"Barbados","Belarus":"Belarus",
"Belgium":"Belgium","Belize":"Belize","Benin":"Benin","Bermuda":"Bermuda","Bhutan":"Bhutan","Bolivia":"Bolivia",
"Bonaire Sint Eustatius and Saba":"BonaireSintEustatiusandSaba","Bosnia and Herzegovina":"BosniaandHerzegovina","Botswana":"Botswana",
"Bouvet Island":"BouvetIsland","Brazil":"Brazil","British Indian Ocean Territory":"BritishIndianOceanTerritory",
"British Virgin Islands":"BritishVirginIslands","Brunei":"Brunei","Bulgaria":"Bulgaria","Burkina Faso":"BurkinaFaso","Burundi":"Burundi",
"Cabo Verde":"CaboVerde","Cambodia":"Cambodia","Cameroon":"Cameroon","Canada":"Canada","Canary Islands":"CanaryIslands",
"Cayman Islands":"CaymanIslands","Central African Republic":"CentralAfricanRepublic","Chad":"Chad","Chile":"Chile","China":"China",
"Christmas Island":"ChristmasIsland","Cocos Islands":"CocosIslands","Colombia":"Colombia","Comoros":"Comoros","Cook Islands":"CookIslands",
"Costa Rica":"CostaRica","Côte d'Ivoire":"CotedIvoire","Croatia":"Croatia","Cuba":"Cuba","Curaçao":"Curacao","Cyprus":"Cyprus",
"Czechia":"Czechia","Democratic Republic of the Congo":"DemocraticRepublicoftheCongo","Denmark":"Denmark","Djibouti":"Djibouti",
"Dominica":"Dominica","Dominican Republic":"DominicanRepublic","Ecuador":"Ecuador","Egypt":"Egypt","El Salvador":"ElSalvador",
"Equatorial Guinea":"EquatorialGuinea","Eritrea":"Eritrea","Estonia":"Estonia","Eswatini":"Eswatini","Ethiopia":"Ethiopia",
"Falkland Islands":"FalklandIslands","Faroe Islands":"FaroeIslands","Fiji":"Fiji","Finland":"Finland","France":"France","French Guiana":"FrenchGuiana",
"French Polynesia":"FrenchPolynesia","French Southern and Antarctic Lands":"FrenchSouthernandAntarcticLands","Gabon":"Gabon","Gambia":"Gambia",
"Georgia":"Georgia","Germany":"Germany","Ghana":"Ghana","Gibraltar":"Gibraltar","Greece":"Greece","Greenland":"Greenland","Grenada":"Grenada",
"Guadeloupe":"Guadeloupe","Guam":"Guam","Guatemala":"Guatemala","Guernsey":"Guernsey","Guinea":"Guinea","Guinea-Bissau":"GuineaBissau",
"Guyana":"Guyana","Haiti":"Haiti","Heard Island and McDonald Islands":"HeardIslandandMcDonaldIslands","Honduras":"Honduras",
"Hong Kong":"HongKong","Hungary":"Hungary","Iceland":"Iceland","India":"India","Indonesia":"Indonesia","Iran":"Iran","Iraq":"Iraq",
"Ireland":"Ireland","Isle of Man":"IsleofMan","Israel":"Israel","Italy":"Italy","Jamaica":"Jamaica","Japan":"Japan","Jersey":"Jersey",
"Jordan":"Jordan","Kazakhstan":"Kazakhstan","Kenya":"Kenya","Kiribati":"Kiribati","Kosovo":"Kosovo","Kuwait":"Kuwait","Kyrgyzstan":"Kyrgyzstan",
"Laos":"Laos","Latvia":"Latvia","Lebanon":"Lebanon","Lesotho":"Lesotho","Liberia":"Liberia","Libya":"Libya","Liechtenstein":"Liechtenstein",
"Lithuania":"Lithuania","Luxembourg":"Luxembourg","Macau":"Macau","Macedonia":"Macedonia","Madagascar":"Madagascar","Malawi":"Malawi",
"Malaysia":"Malaysia","Maldives":"Maldives","Mali":"Mali","Malta":"Malta","Marshall Islands":"MarshallIslands","Martinique":"Martinique",
"Mauritania":"Mauritania","Mauritius":"Mauritius","Mayotte":"Mayotte","Mexico":"Mexico","Micronesia":"Micronesia","Moldova":"Moldova",
"Monaco":"Monaco","Mongolia":"Mongolia","Montenegro":"Montenegro","Montserrat":"Montserrat","Morocco":"Morocco","Mozambique":"Mozambique",
"Myanmar":"Myanmar","Namibia":"Namibia","Nauru":"Nauru","Nepal":"Nepal","Netherlands":"Netherlands","New Caledonia":"NewCaledonia",
"New Zealand":"NewZealand","Nicaragua":"Nicaragua","Niger":"Niger","Nigeria":"Nigeria","Niue":"Niue","Norfolk Island":"NorfolkIsland",
"Northern Mariana Islands":"NorthernMarianaIslands","North Korea":"NorthKorea","Norway":"Norway","Oman":"Oman","Pakistan":"Pakistan",
"Palau":"Palau","Panama":"Panama","Papua New Guinea":"PapuaNewGuinea","Paraguay":"Paraguay","Peru":"Peru","Philippines":"Philippines",
"Pitcairn Islands":"PitcairnIslands","Poland":"Poland","Portugal":"Portugal","Puerto Rico":"PuertoRico","Qatar":"Qatar",
"Republic of Congo":"RepublicofCongo","Réunion":"Reunion","Romania":"Romania","Russian Federation":"RussianFederation","Rwanda":"Rwanda",
"Saint Barthélemy":"SaintBarthelemy","Saint Helena":"SaintHelena","St. Kitts and Nevis":"SaintKittsandNevis","Saint Lucia":"SaintLucia",
"Saint Martin":"SaintMartin","Saint Pierre and Miquelon":"SaintPierreandMiquelon","Saint Vincent and the Grenadines":"SaintVincentandGrenadines",
"Samoa":"Samoa","San Marino":"SanMarino","São Tomé and Príncipe":"SaoTomeandPrincipe","Saudi Arabia":"SaudiArabia","Senegal":"Senegal",
"Serbia":"Serbia","Seychelles":"Seychelles","Sierra Leone":"SierraLeone","Singapore":"Singapore","Sint Maarten":"SintMaarten","Slovakia":"Slovakia",
"Slovenia":"Slovenia","Solomon Islands":"SolomonIslands","Somalia":"Somalia","South Africa":"SouthAfrica",
"South Georgia And South Sandwich Islands":"SouthGeorgiaAndSouthSandwichIslands","South Korea":"SouthKorea","South Sudan":"SouthSudan",
"Spain":"Spain","Sri Lanka":"SriLanka","State of Palestine":"StateofPalestine","Sudan":"Sudan","Suriname":"Suriname",
"Svalbard and Jan Mayen":"SvalbardandJanMayen","Sweden":"Sweden","Switzerland":"Switzerland","Syria":"Syria","Taiwan: Republic of China":"Taiwan",
"Tajikistan":"Tajikistan","Tanzania":"Tanzania","Thailand":"Thailand","Timor-Leste":"TimorLeste","Togo":"Togo","Tokelau":"Tokelau",
"Tonga":"Tonga","Trinidad and Tobago":"TrinidadandTobago","Tunisia":"Tunisia","Turkey":"Turkey",
"Turkish Republic of Northern Cyprus":"TurkishRepublicofNorthernCyprus","Turkmenistan":"Turkmenistan","Turks and Caicos Islands":"TurksandCaicosIslands",
"Tuvalu":"Tuvalu","Uganda":"Uganda","Ukraine":"Ukraine","United Arab Emirates":"UnitedArabEmirates","United Kingdom":"UnitedKingdom",
"United States Minor Outlying Islands":"UnitedStatesMinorOutlyingIslands","United States":"UnitedStatesofAmerica",
"United States Virgin Islands":"UnitedStatesVirginIslands","Uruguay":"Uruguay","Uzbekistan":"Uzbekistan","Vanuatu":"Vanuatu",
"Vatican City and Holy See":"VaticanCityAndHolySee","Venezuela":"Venezuela","Vietnam":"Vietnam","Wallis and Futuna":"WallisandFutuna",
"Western Sahara":"WesternSahara","Yemen":"Yemen","Zambia":"Zambia","Zimbabwe":"Zimbabwe"};

// SELECT concat('"', country, '":"', long_name,'",') FROM countries order by long_name; MUST BE SORTED by long_name: Display Value: Soft Key
var fullNameForCountry = {"Afghanistan":"Afghanistan","AlandIslands":"Åland Islands","Albania":"Albania","Algeria":"Algeria",
"AmericanSamoa":"American Samoa","Andorra":"Andorra","Angola":"Angola","Anguilla":"Anguilla","AntarcticTreatySystem":"Antarctic Treaty System",
"AntiguaandBarbuda":"Antigua and Barbuda","Argentina":"Argentina","Armenia":"Armenia","Aruba":"Aruba","Australia":"Australia","Austria":"Austria",
"Azerbaijan":"Azerbaijan","Bahamas":"Bahamas","Bahrain":"Bahrain","Bangladesh":"Bangladesh","Barbados":"Barbados","Belarus":"Belarus",
"Belgium":"Belgium","Belize":"Belize","Benin":"Benin","Bermuda":"Bermuda","Bhutan":"Bhutan","Bolivia":"Bolivia",
"BonaireSintEustatiusandSaba":"Bonaire Sint Eustatius and Saba","BosniaandHerzegovina":"Bosnia and Herzegovina","Botswana":"Botswana",
"BouvetIsland":"Bouvet Island","Brazil":"Brazil","BritishIndianOceanTerritory":"British Indian Ocean Territory",
"BritishVirginIslands":"British Virgin Islands","Brunei":"Brunei","Bulgaria":"Bulgaria","BurkinaFaso":"Burkina Faso","Burundi":"Burundi",
"CaboVerde":"Cabo Verde","Cambodia":"Cambodia","Cameroon":"Cameroon","Canada":"Canada","CanaryIslands":"Canary Islands",
"CaymanIslands":"Cayman Islands","CentralAfricanRepublic":"Central African Republic","Chad":"Chad","Chile":"Chile","China":"China",
"ChristmasIsland":"Christmas Island","CocosIslands":"Cocos Islands","Colombia":"Colombia","Comoros":"Comoros","CookIslands":"Cook Islands",
"CostaRica":"Costa Rica","CotedIvoire":"Côte d'Ivoire","Croatia":"Croatia","Cuba":"Cuba","Curacao":"Curaçao","Cyprus":"Cyprus",
"Czechia":"Czechia","DemocraticRepublicoftheCongo":"Democratic Republic of the Congo","Denmark":"Denmark","Djibouti":"Djibouti",
"Dominica":"Dominica","DominicanRepublic":"Dominican Republic","Ecuador":"Ecuador","Egypt":"Egypt","ElSalvador":"El Salvador",
"EquatorialGuinea":"Equatorial Guinea","Eritrea":"Eritrea","Estonia":"Estonia","Eswatini":"Eswatini","Ethiopia":"Ethiopia",
"FalklandIslands":"Falkland Islands","FaroeIslands":"Faroe Islands","Fiji":"Fiji","Finland":"Finland","France":"France",
"FrenchGuiana":"French Guiana","FrenchPolynesia":"French Polynesia","FrenchSouthernandAntarcticLands":"French Southern and Antarctic Lands",
"Gabon":"Gabon","Gambia":"Gambia","Georgia":"Georgia","Germany":"Germany","Ghana":"Ghana","Gibraltar":"Gibraltar","Greece":"Greece",
"Greenland":"Greenland","Grenada":"Grenada","Guadeloupe":"Guadeloupe","Guam":"Guam","Guatemala":"Guatemala","Guernsey":"Guernsey",
"Guinea":"Guinea","GuineaBissau":"Guinea-Bissau","Guyana":"Guyana","Haiti":"Haiti","HeardIslandandMcDonaldIslands":"Heard Island and McDonald Islands",
"Honduras":"Honduras","HongKong":"Hong Kong","Hungary":"Hungary","Iceland":"Iceland","India":"India","Indonesia":"Indonesia",
"Iran":"Iran","Iraq":"Iraq","Ireland":"Ireland","IsleofMan":"Isle of Man","Israel":"Israel","Italy":"Italy","Jamaica":"Jamaica","Japan":"Japan",
"Jersey":"Jersey","Jordan":"Jordan","Kazakhstan":"Kazakhstan","Kenya":"Kenya","Kiribati":"Kiribati","Kosovo":"Kosovo","Kuwait":"Kuwait",
"Kyrgyzstan":"Kyrgyzstan","Laos":"Laos","Latvia":"Latvia","Lebanon":"Lebanon","Lesotho":"Lesotho","Liberia":"Liberia","Libya":"Libya",
"Liechtenstein":"Liechtenstein","Lithuania":"Lithuania","Luxembourg":"Luxembourg","Macau":"Macau","Macedonia":"Macedonia","Madagascar":"Madagascar",
"Malawi":"Malawi","Malaysia":"Malaysia","Maldives":"Maldives","Mali":"Mali","Malta":"Malta","MarshallIslands":"Marshall Islands",
"Martinique":"Martinique","Mauritania":"Mauritania","Mauritius":"Mauritius","Mayotte":"Mayotte","Mexico":"Mexico","Micronesia":"Micronesia",
"Moldova":"Moldova","Monaco":"Monaco","Mongolia":"Mongolia","Montenegro":"Montenegro","Montserrat":"Montserrat","Morocco":"Morocco",
"Mozambique":"Mozambique","Myanmar":"Myanmar","Namibia":"Namibia","Nauru":"Nauru","Nepal":"Nepal","Netherlands":"Netherlands",
"NewCaledonia":"New Caledonia","NewZealand":"New Zealand","Nicaragua":"Nicaragua","Niger":"Niger","Nigeria":"Nigeria","Niue":"Niue",
"NorfolkIsland":"Norfolk Island","NorthKorea":"North Korea","NorthernMarianaIslands":"Northern Mariana Islands","Norway":"Norway",
"Oman":"Oman","Pakistan":"Pakistan","Palau":"Palau","Panama":"Panama","PapuaNewGuinea":"Papua New Guinea","Paraguay":"Paraguay",
"Peru":"Peru","Philippines":"Philippines","PitcairnIslands":"Pitcairn Islands","Poland":"Poland","Portugal":"Portugal",
"PuertoRico":"Puerto Rico","Qatar":"Qatar","RepublicofCongo":"Republic of Congo","Reunion":"Réunion","Romania":"Romania",
"RussianFederation":"Russian Federation","Rwanda":"Rwanda","SaintBarthelemy":"Saint Barthélemy","SaintHelena":"Saint Helena",
"SaintLucia":"Saint Lucia","SaintMartin":"Saint Martin","SaintPierreandMiquelon":"Saint Pierre and Miquelon",
"SaintVincentandGrenadines":"Saint Vincent and the Grenadines","Samoa":"Samoa","SanMarino":"San Marino",
"SaoTomeandPrincipe":"São Tomé and Príncipe","SaudiArabia":"Saudi Arabia","Senegal":"Senegal","Serbia":"Serbia","Seychelles":"Seychelles",
"SierraLeone":"Sierra Leone","Singapore":"Singapore","SintMaarten":"Sint Maarten","Slovakia":"Slovakia","Slovenia":"Slovenia",
"SolomonIslands":"Solomon Islands","Somalia":"Somalia","SouthAfrica":"South Africa",
"SouthGeorgiaAndSouthSandwichIslands":"South Georgia And South Sandwich Islands","SouthKorea":"South Korea","SouthSudan":"South Sudan",
"Spain":"Spain","SriLanka":"Sri Lanka","SaintKittsandNevis":"St. Kitts and Nevis","StateofPalestine":"State of Palestine","Sudan":"Sudan",
"Suriname":"Suriname","SvalbardandJanMayen":"Svalbard and Jan Mayen","Sweden":"Sweden","Switzerland":"Switzerland","Syria":"Syria",
"Taiwan":"Taiwan: Republic of China","Tajikistan":"Tajikistan","Tanzania":"Tanzania","Thailand":"Thailand","TimorLeste":"Timor-Leste",
"Togo":"Togo","Tokelau":"Tokelau","Tonga":"Tonga","TrinidadandTobago":"Trinidad and Tobago","Tunisia":"Tunisia","Turkey":"Turkey",
"TurkishRepublicofNorthernCyprus":"Turkish Republic of Northern Cyprus","Turkmenistan":"Turkmenistan",
"TurksandCaicosIslands":"Turks and Caicos Islands","Tuvalu":"Tuvalu","Uganda":"Uganda","Ukraine":"Ukraine",
"UnitedArabEmirates":"United Arab Emirates","UnitedKingdom":"United Kingdom","UnitedStatesofAmerica":"United States",
"UnitedStatesMinorOutlyingIslands":"United States Minor Outlying Islands","UnitedStatesVirginIslands":"United States Virgin Islands",
"Uruguay":"Uruguay","Uzbekistan":"Uzbekistan","Vanuatu":"Vanuatu","VaticanCityAndHolySee":"Vatican City and Holy See","Venezuela":"Venezuela",
"Vietnam":"Vietnam","WallisandFutuna":"Wallis and Futuna","WesternSahara":"Western Sahara","Yemen":"Yemen","Zambia":"Zambia","Zimbabwe":"Zimbabwe"};

// these two will be used in Text and Data Languages Modules
// Run SELECT concat('"', language, '",') FROM languages order by language; Copy Row Unquoted
var languagesFromLanguageTable = ["Afrikaans","Albanian","Amharic","Arabic","Armenian","Asante","Assamese","Aymara","Azerbaijani","Bahasa","Bahasa Indonesia",
"Bajan","Bambara","Bangla","Belarusian","Bemba","Bengali","Bhojpuri","Bislama","Bosnian","Bulgarian","Burmese","Catalan","Chamorro","Chichewa",
"Creole","Crioulo","Croatian","Czech","Danish","Dari","Dhivehi","Dioula","Dutch","Dzongkha","Emakhuwa","English","Estonian","Ewe","Fante",
"Fijian","Filipino","Finnish","French","Fula","Gaelic","Ganda","Georgian","German","Greek","Greenlandic","Guarani","Gujarati","Hebrew","Hindi",
"Hiri Motu","Hungarian","I-Kiribati","Icelandic","Irish","isiZulu","Italian","Japanese","Javanese","Kannada","Kashmiri","Kazakh","Khmer",
"Kinyarwanda","Kirundi","Korean","Krio","Kurdish","Kyrgyz","Lao","Latvian","Lhotshamkha","Lingala","Lithuanian","Luganda","Luxembourgish",
"Macedonian","Maithali","Makasai","Malagasy","Malay","Malayalam","Maltese","Mambai","Mandarin","Mandinka","Marathi","Marshallese","Maya",
"Melanesian pidgin","Mende","Moldovan","Mongolian","Monokutuba","Montenegrin","Nauruan","Nawat","Ndebele","Nepali","Niuean","Norwegian",
"Nyanja","Oriya","Oromo","Palauan","Papiamento","Pashto","Persian","Polish","Portuguese","Punjabi","Quechua","Rarotongan","Romanian",
"Romansch","Russian","Samoan","Sango","Sanskrit","Saraiki","Scots","Sekalanga","Sepedi","Serbian","Sesotho","Setswana","Seychellois Creole",
"Sharchhopka","Shona","Sindhi","Sinhala","siSwati","Slovak","Slovenian","Somali","Spanish","Swahili","Swedish","Tajik","Tamil","Tatar",
"Telugu","Temne","Tetum","Thai","Tigrinya","Tok Pisin","Tokelauan","Tonga","Tongan","Turkish","Turkmen","Tuvaluan","Ukrainian","Umbundu",
"Urdu","Uzbek","Vietnamese","Welsh","Wolof","Xichangana"];

// Run SELECT concat('"', language, '":"', long_name, '",') FROM languages order by language; Copy Row Unquoted
var fullNameForLanguage = {"Afrikaans":"Afrikaans","Albanian":"Albanian","Amharic":"Amharic","Arabic":"Arabic","Armenian":"Armenian",
"Asante":"Asante","Assamese":"Assamese","Aymara":"Aymara","Azerbaijani":"Azerbaijani","Bahasa":"Bahasa","Bahasa Indonesia":"Bahasa Indonesia",
"Bajan":"Bajan","Bambara":"Bambara","Bangla":"Bangla","Belarusian":"Belarusian","Bemba":"Bemba","Bengali":"Bengali","Bhojpuri":"Bhojpuri",
"Bislama":"Bislama","Bosnian":"Bosnian","Bulgarian":"Bulgarian","Burmese":"Burmese","Catalan":"Catalan","Chamorro":"Chamorro","Chichewa":"Chichewa",
"Creole":"Creole","Crioulo":"Crioulo","Croatian":"Croatian","Czech":"Czech","Danish":"Danish","Dari":"Dari","Dhivehi":"Dhivehi","Dioula":"Dioula",
"Dutch":"Dutch","Dzongkha":"Dzongkha","Emakhuwa":"Emakhuwa","English":"English","Estonian":"Estonian","Ewe":"Ewe","Fante":"Fante","Fijian":"Fijian",
"Filipino":"Filipino","Finnish":"Finnish","French":"French","Fula":"Fula","Gaelic":"Gaelic","Ganda":"Ganda","Georgian":"Georgian","German":"German",
"Greek":"Greek","Greenlandic":"Greenlandic","Guarani":"Guarani","Gujarati":"Gujarati","Hebrew":"Hebrew","Hindi":"Hindi","Hiri Motu":"Hiri Motu",
"Hungarian":"Hungarian","I-Kiribati":"I-Kiribati","Icelandic":"Icelandic","Irish":"Irish","isiZulu":"isiZulu","Italian":"Italian","Japanese":"Japanese",
"Javanese":"Javanese","Kannada":"Kannada","Kashmiri":"Kashmiri","Kazakh":"Kazakh","Khmer":"Khmer","Kinyarwanda":"Kinyarwanda","Kirundi":"Kirundi",
"Korean":"Korean","Krio":"Krio","Kurdish":"Kurdish","Kyrgyz":"Kyrgyz","Lao":"Lao","Latvian":"Latvian","Lhotshamkha":"Lhotshamkha","Lingala":"Lingala",
"Lithuanian":"Lithuanian","Luganda":"Luganda","Luxembourgish":"Luxembourgish","Macedonian":"Macedonian","Maithali":"Maithali","Makasai":"Makasai",
"Malagasy":"Malagasy","Malay":"Malay","Malayalam":"Malayalam","Maltese":"Maltese","Mambai":"Mambai","Mandarin":"Mandarin","Mandinka":"Mandinka",
"Marathi":"Marathi","Marshallese":"Marshallese","Maya":"Maya","Melanesian pidgin":"Melanesian pidgin","Mende":"Mende","Moldovan":"Moldovan",
"Mongolian":"Mongolian","Monokutuba":"Monokutuba","Montenegrin":"Montenegrin","Nauruan":"Nauruan","Nawat":"Nawat","Ndebele":"Ndebele",
"Nepali":"Nepali","Niuean":"Niuean","Norwegian":"Norwegian","Nyanja":"Nyanja","Oriya":"Oriya","Oromo":"Oromo","Palauan":"Palauan","Papiamento":"Papiamento",
"Pashto":"Pashto","Persian":"Persian","Polish":"Polish","Portuguese":"Portuguese","Punjabi":"Punjabi","Quechua":"Quechua","Rarotongan":"Rarotongan",
"Romanian":"Romanian","Romansch":"Romansch","Russian":"Russian","Samoan":"Samoan","Sango":"Sango","Sanskrit":"Sanskrit","Saraiki":"Saraiki",
"Scots":"Scots","Sekalanga":"Sekalanga","Sepedi":"Sepedi","Serbian":"Serbian","Sesotho":"Sesotho","Setswana":"Setswana",
"Seychellois Creole":"Seychellois Creole","Sharchhopka":"Sharchhopka","Shona":"Shona","Sindhi":"Sindhi","Sinhala":"Sinhala","siSwati":"siSwati",
"Slovak":"Slovak","Slovenian":"Slovenian","Somali":"Somali","Spanish":"Spanish","Swahili":"Swahili","Swedish":"Swedish","Tajik":"Tajik",
"Tamil":"Tamil","Tatar":"Tatar","Telugu":"Telugu","Temne":"Temne","Tetum":"Tetum","Thai":"Thai","Tigrinya":"Tigrinya","Tok Pisin":"Tok Pisin",
"Tokelauan":"Tokelauan","Tonga":"Tonga","Tongan":"Tongan","Turkish":"Turkish","Turkmen":"Turkmen","Tuvaluan":"Tuvaluan","Ukrainian":"Ukrainian",
"Umbundu":"Umbundu","Urdu":"Urdu","Uzbek":"Uzbek","Vietnamese":"Vietnamese","Welsh":"Welsh","Wolof":"Wolof","Xichangana":"Xichangana"};

// Run SELECT distinct concat('{"value":"',value, '"},') FROM features where feature = "Language" order by value; Copy Row Unquoted
var worldLanguagesDropDownValues = [{"value":"Afrikaans"},{"value":"Albanian"},{"value":"Amharic"},{"value":"Arabic"},{"value":"Armenian"},{"value":"Asante"},{"value":"Assamese"},
{"value":"Aymara"},{"value":"Azerbaijani"},{"value":"Bahasa"},{"value":"Bahasa Indonesia"},{"value":"Bajan"},{"value":"Bambara"},{"value":"Bangla"},{"value":"Belarusian"},
{"value":"Bemba"},{"value":"Bengali"},{"value":"Bhojpuri"},{"value":"Bislama"},{"value":"Bosnian"},{"value":"Bulgarian"},{"value":"Burmese"},{"value":"Catalan"},
{"value":"Chamorro"},{"value":"Chichewa"},{"value":"Creole"},{"value":"Crioulo"},{"value":"Croatian"},{"value":"Czech"},{"value":"Danish"},{"value":"Dari"},{"value":"Dhivehi"},
{"value":"Dioula"},{"value":"Dutch"},{"value":"Dzongkha"},{"value":"Emakhuwa"},{"value":"English"},{"value":"Estonian"},{"value":"Ewe"},{"value":"Fante"},{"value":"Fijian"},
{"value":"Filipino"},{"value":"Finnish"},{"value":"French"},{"value":"Fula"},{"value":"Gaelic"},{"value":"Ganda"},{"value":"Georgian"},{"value":"German"},{"value":"Greek"},
{"value":"Greenlandic"},{"value":"Guarani"},{"value":"Gujarati"},{"value":"Hebrew"},{"value":"Hindi"},{"value":"Hiri Motu"},{"value":"Hungarian"},{"value":"I-Kiribati"},
{"value":"Icelandic"},{"value":"Irish"},{"value":"isiZulu"},{"value":"Italian"},{"value":"Japanese"},{"value":"Javanese"},{"value":"Kannada"},{"value":"Kashmiri"},
{"value":"Kazakh"},{"value":"Khmer"},{"value":"Kinyarwanda"},{"value":"Kirundi"},{"value":"Korean"},{"value":"Krio"},{"value":"Kurdish"},
{"value":"Kyrgyz"},{"value":"Lao"},{"value":"Latvian"},{"value":"Lhotshamkha"},{"value":"Lingala"},{"value":"Lithuanian"},{"value":"Luganda"},{"value":"Luxembourgish"},
{"value":"Macedonian"},{"value":"Maithali"},{"value":"Makasai"},{"value":"Malagasy"},{"value":"Malay"},{"value":"Malayalam"},{"value":"Maltese"},{"value":"Mambai"},
{"value":"Mandarin"},{"value":"Mandinka"},{"value":"Marathi"},{"value":"Marshallese"},{"value":"Maya"},{"value":"Melanesian pidgin"},{"value":"Mende"},{"value":"Moldovan"},
{"value":"Mongolian"},{"value":"Monokutuba"},{"value":"Montenegrin"},{"value":"Nauruan"},{"value":"Nawat"},{"value":"Ndebele"},{"value":"Nepali"},{"value":"Niuean"},
{"value":"Norwegian"},{"value":"Nyanja"},{"value":"Oriya"},{"value":"Oromo"},{"value":"Palauan"},{"value":"Papiamento"},{"value":"Pashto"},{"value":"Persian"},{"value":"Polish"},
{"value":"Portuguese"},{"value":"Punjabi"},{"value":"Quechua"},{"value":"Rarotongan"},{"value":"Romanian"},{"value":"Romansch"},{"value":"Russian"},{"value":"Samoan"},
{"value":"Sango"},{"value":"Sanskrit"},{"value":"Saraiki"},{"value":"Scots"},{"value":"Sekalanga"},{"value":"Sepedi"},{"value":"Serbian"},{"value":"Sesotho"},{"value":"Setswana"},
{"value":"Seychellois Creole"},{"value":"Sharchhopka"},{"value":"Shona"},{"value":"Sindhi"},{"value":"Sinhala"},{"value":"siSwati"},{"value":"Slovak"},
{"value":"Slovenian"},{"value":"Somali"},{"value":"Spanish"},{"value":"Swahili"},{"value":"Swedish"},{"value":"Tajik"},{"value":"Tamil"},{"value":"Tatar"},
{"value":"Telugu"},{"value":"Temne"},{"value":"Tetum"},{"value":"Thai"},{"value":"Tigrinya"},{"value":"Tok Pisin"},{"value":"Tokelauan"},{"value":"Tonga"},{"value":"Tongan"},
{"value":"Turkish"},{"value":"Turkmen"},{"value":"Tuvaluan"},{"value":"Ukrainian"},{"value":"Umbundu"},{"value":"Urdu"},{"value":"Uzbek"},{"value":"Vietnamese"},
{"value":"Welsh"},{"value":"Wolof"},{"value":"Xichangana"}];

// Run SELECT distinct concat('{"value":"',value, '"},') FROM features where feature = "Religion" order by value; Copy Row Unquoted
var worldReligionsDropDownValues = [{"value":"Agnostic"},{"value":"Animism"},{"value":"Buddhism"},{"value":"Christianity"},{"value":"Confucianism"},{"value":"Druze"},{"value":"Folk"},{"value":"Hinduism"},
{"value":"Indigenous"},{"value":"Islam"},{"value":"Judism"},{"value":"Shamanism "},{"value":"Shintoism"},{"value":"Taoism"},{"value":"Unaffiliated"}];

// Run SELECT distinct concat('{"value":"',value, '"},') FROM features where feature = "Water" order by value; Copy Row Unquoted
var worldWatersDropDownValues = [{"value":"Adriatic"},{"value":"Aegean"},{"value":"Andaman"},{"value":"Antarctic"},{"value":"Arabian"},{"value":"Arafura"},{"value":"Arctic"},{"value":"Atlantic"},
{"value":"Bali"},{"value":"Baltic"},{"value":"Banda"},{"value":"Barent"},{"value":"Bay of Bengal"},{"value":"Bay of Biscay"},{"value":"Bering"},{"value":"Bering Seas"},
{"value":"Bismarck"},{"value":"Black"},{"value":"Caribbean"},{"value":"Caspian"},{"value":"Celebes"},{"value":"Celtic"},{"value":"Ceram"},{"value":"Chukchi"},
{"value":"East China"},{"value":"East Siberian"},{"value":"English Channel"},{"value":"Flores"},{"value":"Gulf of Aden"},{"value":"Gulf of Aqaba"},{"value":"Gulf of California"},
{"value":"Gulf of Guinea"},{"value":"Gulf of Mexico"},{"value":"Gulf of Oman"},{"value":"Gulf of Thailand"},{"value":"Gulf of Thailand & Pacific Ocean"},
{"value":"Halmahera"},{"value":"Indian"},{"value":"Indian Oceans"},{"value":"Ionian"},{"value":"Irish"},{"value":"Java"},{"value":"Kara"},{"value":"Laccadive"},
{"value":"Lake Malawi"},{"value":"Lake Victoria"},{"value":"Landlocked"},{"value":"Laptev"},{"value":"Ligurian"},{"value":"Marmara"},
{"value":"Mediterranean"},{"value":"Molucca"},{"value":"Natuna"},{"value":"North"},{"value":"Norwegian"},{"value":"Pacific"},{"value":"Persian Gulf"},
{"value":"Philippine"},{"value":"Read"},{"value":"Red"},{"value":"Savu"},{"value":"Sea of Azov"},{"value":"Sea of Japan"},{"value":"Sea of Okhotsk"},
{"value":"See of Japan"},{"value":"Solomon"},{"value":"South China"},{"value":"Southern"},{"value":"Sulu"},{"value":"Tasman"},
{"value":" Timor"},{"value":" Yellow"},{"value":"Yellow Sea"}];

// Run SELECT distinct concat('{"value":"',value, '"},') FROM features where feature = "Color" order by value; Copy Row Unquoted
var flagsColorsDropDownValues = [ {"value":"Black"},{"value":"Blue"},{"value":"Brown"},{"value":"Gray"},{"value":"Green"},{"value":"Maroon"},{"value":"Orange"},{"value":"Pink"},
{"value":"Purple"},{"value":"Red"},{"value":"Saffron"},{"value":"White"},{"value":"Yellow"}];

// Run SELECT distinct concat('{"value":"',value, '"},') FROM features where feature = "Shape" order by value; Copy Row Unquoted
var flagsShapesDropDownValues = [{"value":"Alpaca"},{"value":"Anchor"},{"value":"Angkor Wat"},{"value":"Animal"},{"value":"Arabic"},{"value":"Armillary sphere"},{"value":"Armour"},{"value":"Armoured"},
{"value":"Arrow"},{"value":"Arrowhead"},{"value":"Axe"},{"value":"Banana"},{"value":"Band"},{"value":"Bar"},{"value":"Barrel"},{"value":"Bay"},{"value":"Bay laurel"},{"value":"Bayonet"},
{"value":"Bible"},{"value":"Bird"},{"value":"Book"},{"value":"Border"},{"value":"Bow"},{"value":"Branch"},{"value":"Bridge"},{"value":"British-Flag"},{"value":"Bugle"},{"value":"Building"},
{"value":"Cacao"},{"value":"Cactus"},{"value":"Candor"},{"value":"Cannon"},{"value":"Canoe"},{"value":"Canton"},{"value":"Cap"},{"value":"Carpet"},{"value":"Castle"},{"value":"Cedar"},
{"value":"Chain"},{"value":"Circle"},{"value":"Clove"},{"value":"Coat of Arms"},{"value":"Cocoa"},{"value":"Coconut"},{"value":"Coin"},{"value":"Compass"},{"value":"Condor"},{"value":"Cord"},
{"value":"Cornucopia"},{"value":"Courthouse"},{"value":"Cow"},{"value":"Crane"},{"value":"Crescent"},{"value":"Crest"},{"value":"Cross"},{"value":"Crown"},{"value":"Crux"},{"value":"Dagger"},
{"value":"Diagonal"},{"value":"Diamond"},{"value":"Dog"},{"value":"Dolphin"},{"value":"Double Cross"},{"value":"Dove"},{"value":"Dragon"},{"value":"Drum"},{"value":"Eagle"},
{"value":"Eight-Pointed Star"},{"value":"Emblem"},{"value":"English"},{"value":"Equilateral"},{"value":"Estoile"},{"value":"Face"},{"value":"Feather"},{"value":"Female"},{"value":"Fern"},
{"value":"Fimbriation"},{"value":"Fire"},{"value":"Five-Petal"},{"value":"Five-Pointed"},{"value":"Five-Pointed Star"},{"value":"Flag"},{"value":"Fleurs-de-lys"},{"value":"Flower"},
{"value":"Fly whisk"},{"value":"Forteen-Points Star"},{"value":"Four-Pointed Star"},{"value":"French"},{"value":"Fruit"},{"value":"Gear"},{"value":"George"},{"value":"Globe"},{"value":"Goat"},
{"value":"Grass"},{"value":"Hand"},{"value":"Harp"},{"value":"Hat"},{"value":"Head"},{"value":"Helmet"},{"value":"Hexagram"},{"value":"Hill"},{"value":"Hood"},{"value":"Horizontal"},
{"value":"Horn"},{"value":"Human Face"},{"value":"Ice"},{"value":"Isosceles"},{"value":"Jewel"},{"value":"Key"},{"value":"Kufic"},{"value":"Lady"},{"value":"Lama"},{"value":"Lamp"},
{"value":"Latin"},{"value":"Laurel"},{"value":"Leaf"},{"value":"Leg"},{"value":"Leopard"},{"value":"Line"},{"value":"Lion"},{"value":"Lobster"},{"value":"Lotus"},{"value":"Machete"},
{"value":"Mahogany"},{"value":"Mango"},{"value":"Mantle"},{"value":"Map"},{"value":"Maple"},{"value":"Miro"},{"value":"Monument"},{"value":"Moon"},{"value":"Mountain"},{"value":"Mullet"},
{"value":"Namele"},{"value":"Nutmeg"},{"value":"Oak"},{"value":"Oar"},{"value":"Oblique"},{"value":"Ocean"},{"value":"Olive"},{"value":"Ornament"},{"value":"Ostrich-plume"},{"value":"Palm"},
{"value":"Papal tiara"},{"value":"Parallelogram"},{"value":"Parasol"},{"value":"Parrot"},{"value":"Pattern"},{"value":"Pearl"},{"value":"Penguin"},{"value":"Pennon"},{"value":"Pentagram"},
{"value":"Person"},{"value":"Pillar"},{"value":"Pine"},{"value":"Pineapple"},{"value":"Pomegranate"},{"value":"Portuguese"},{"value":"Potato"},{"value":"Rainbow"},{"value":"Ram"},
{"value":"Ray"},{"value":"Rectangle"},{"value":"Reindeer"},{"value":"Rhombus"},{"value":"Ribbon"},{"value":"Rifle"},{"value":"Ring"},{"value":"River"},{"value":"Rope"},{"value":"Rose"},
{"value":"Sage"},{"value":"Sail"},{"value":"Sailboat"},{"value":"Saltire"},{"value":"Script"},{"value":"Sea"},{"value":"Seahorse"},{"value":"Seal"},{"value":"Seven-Pointed Star"},
{"value":"Shahada"},{"value":"Sheath"},{"value":"Sheep"},{"value":"Shell"},{"value":"Shield"},{"value":"Ship"},{"value":"Six-Pointed Star"},{"value":"Sling"},{"value":"Smoke"},
{"value":"Snake"},{"value":"Snow"},{"value":"Spanish"},{"value":"Spear"},{"value":"Spur"},{"value":"Square"},{"value":"Stairs"},{"value":"Stalk"},{"value":"Star"},{"value":"Stone"},
{"value":"Stripe"},{"value":"Sun"},{"value":"Sun of May"},{"value":"Surgarcane"},{"value":"Sword"},{"value":"Symbol"},{"value":"Taegeukgi"},{"value":"Taiji"},{"value":"Takbir"},
{"value":"Tent"},{"value":"Thuluth"},{"value":"Torch"},{"value":"Totem"},{"value":"Tower"},{"value":"Trapezium"},{"value":"Trapezoid"},{"value":"Tree"},{"value":"Triangle"},
{"value":"Trident"},{"value":"Trigram"},{"value":"Tulip"},{"value":"Turtle"},{"value":"Tusk"},{"value":"Twelve-Pointed Star"},{"value":"Twenty-Four-Pointed Star"},{"value":"Vertical"},
{"value":"Volcano"},{"value":"Water"},{"value":"Wave"},{"value":"Waves"},{"value":"Weapon"},{"value":"Wheat"},{"value":"Wheel"},{"value":"Wheelbarrow"},{"value":"White Saltire"},
{"value":"Wing"},{"value":"Wreath"},{"value":"Yin Yang"},{"value":"Zodiac"}];
