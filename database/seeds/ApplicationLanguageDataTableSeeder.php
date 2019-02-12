<?php

use Illuminate\Database\Seeder;
use App\ApplicationLanguageData;
use App\ApplicationLanguage;

class ApplicationLanguageDataTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        # These will be only valid after the Application Text is defined and created
        # These are the final text for any defined Language: For now USA English and Turkey Turkish and Slovakia Slovak
        /*
            A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z
            Vowels: a, e, ı, i, o, ö, u, ü
            Consonants: b, c, ç, d, f, g, ğ, h, j, k, l, m, n, p, r, s, ş, t, v, y, z

            var lowerToUpperCaseTurkish = {"a":"A", "b": "B", "c": "C", "ç": "Ç", "d": "D", "e": "E", "f": "F", "g": "G", "ğ": "Ğ", "h": "H", "ı": "I", "i": "İ", "j": "J",
                "k": "K", "l": "L", "m": "M", "n": "N", "o": "O", "ö": "Ö", "p": "P", "r": "R", "s": "S", "ş": "Ş", "t": "T", "u": "U", "ü": "Ü", "v": "V", "y": "Y", "z": "Z"};
            var upperToLowerCaseTurkish = {"A":"a", "B": "b", "C": "c", "Ç": "ç", "D": "d", "E": "e", "F": "f", "G": "g", "Ğ": "ğ", "H": "h", "I": "ı", "İ": "i", "J": "j",
                "K": "k", "L": "l", "M": "n", "N": "n", "O": "o", "Ö": "ö", "P": "p", "R": "r", "S": "s", "Ş": "ş", "T": "t", "U": "u", "Ü": "ü", "V": "v", "Y": "y", "Z": "z"};

        */
        // javascript stringVariable.split("?"); ?=whatever is the character value
        // php $newArrayVariable = explode("?", $stringWithArrayValues); ?=whatever is the character value
        $dataTR = ["Düşük","Orta","Yüksek","Afganistan","Afganistan","Aland","Aland Adası","Arnavutluk","Arnavutluk","Cezayir","Cezayir","ABD Samoa",
        "Amerikan Samao","Andorra","Andorra","Angola","Angola","Anguilla","Anguilla","Antartika","Antarktika Antlaşması Sistemi","Antigua","Antigua ve Barbuda",
        "Arjantin","Arjantin","Ermenistan","Ermenistan","Aruba","Aruba","Avustralya","Avustralya","Avusturya","Avusturya","Azerbaycan","Azerbaycan",
        "Bahamalar","Bahamalar","Bahreyn","Bahreyn","Bangaldeş","Bangaldeş","Barbados","Barbados","Belarus","Belarus","Belçika","Belçika","Belize","Belize",
        "Benin","Benin","Bermuda","Bermuda","Butan","Butan","Bolivya","Bolivya","Bonaire","Bonaire Sint Eustatius ve Saba","Bosna","Bosna Hersek","Botsvana",
        "Botsvana","Bouvet","Bouvet Adası","Brezilya","Brezilya","BK Hint","Britanya Hint Okyanus Alanı","BBA","Britanya Bakire Adaları","Bruney","Bruney",
        "Bulgaristan","Bulgaristan","Burkina Faso","Burkina Faso","Burundi","Burundi","Kamboçya","Kamboçya","Kamerun","Kamerun","Kanada","Kanada","Kanarya",
        "Kanarya Adaları","Cabo Verde","Cabo Verde","Keymın","Keymın Adaları","OAC","Orta Afrika Cumhuriyeti","Çad","Çad","Şili","Şili","Çin","Çin","Noel Adası",
        "Noel Adası","Kokos","Kokos Adası","Kolombiya","Kolombiya","Komorlar","Komorlar","Kuk","Kuk Adaları","Kosta Rika","Kosta Rika","Kotdivuar","Kotdivuar",
        "Hırvatistan","Hırvatistan","Küba","Küba","Kuraço","Kuraço","Kıbrıs","Kıbrıs","Çekya","Çekya","Kongo DC","Kongo Demokratik Cumhuriyeti","Danimarka",
        "Danimarka","Cibuti","Cibuti","Dominika","Dominika","Dominikan","Dominik Cumhuriyeti","Ekvator","Ekvator","Mısır","Mısır","El Salvador","El Salvador",
        "E Ginesi","Ekvator Ginesi","Eritre","Eritre","Estonya","Estonya","Esvatini","Esvatini","Etiyopya","Etiyopya","Falkland","Falkland Adaları","Faroye",
        "Faroye Adaları","Fiji","Fiji","Finlandiya","Finlandiya","Fransa","Fransa","Guyana","French Guyana","Polenezya","Fransız Polenezya","Fr Antartik",
        "Fransız GÜney ve Antartik Alanı","Gabon","Gabon","Gambiya","Gambiya","Gürcistan","Gürcistan","Almanya","Almanya","Gana","Gana","Cebelitarık",
        "Cebelitarık","Yunanistan","Yunanistan","Grönland","Grönland","Grenada","Grenada","Guadelup","Guadelup","Guyam","Guyam","Guatemala","Guatemala",
        "Görnse","Görnse","Gine","Gine","Gine Bissau","Gine-Bissau","Guyana","Guyana","Haiti","Haiti","H MekDonald","Hörd ve MekDonal Adaları","Honduras",
        "Honduras","Hong Kong","Hong Kong","Macaristan","Macaristan","İzlanda","İzlanda","Hindistan","Hindistan","Endonezya","Endonezya","İran","İran","Irak",
        "Irak","İrlanda","İrlanda","Ayıl ov Men","Ayıl ov Men",
        "İsrail","İsrail","İtalya","İtalya","Jamaika","Jamaika","Japonya","Japonya","Jörsiy","Jörsiy","Ürdün","Ürdün","Kazakistan","Kazakistan","Kenya",
        "Kenya","Kiribati","Kiribati","Kosova","Kosova","Kuveyt","Kuveyt","Kırgızistan","Kırgızistan","Laos","Laos","Letonya","Letonya","Lübnan","Lübnan",
        "Lesotho","Lesotho","Liberya","Liberya","Libya","Libya","Lihtenştayn","Lihtenştayn","Litvanya","Litvanya","Lüksemburg","Lüksemburg","Makau",
        "Makau","Makedonya","Makedonya","Madagaskar","Madagaskar","Malavi","Malavi","Malezya","Malezya","Maldivler","Maldivler","Mali","Mali","Malta",
        "Malta","Marşal","Marşal Adaları","Martinik","Martinik","Moritanya","Moritanya","Morityus","Morityus","Mayot","Mayot","Meksika","Meksika",
        "Mikronezya","Mikronezya","Moldova","Moldova","Monako","Monako","Moğolistan","Moğolistan","Karadağ","Karadağ","Monserat","Monserat","Fas","Fas",
        "Mozambik","Mozambik","Myanmar","Myanmar","Namibya","Namibya","Nauru","Nauru","Nepal","Nepal","Hollanda","Hollanda","Y Kaledonya","Yeni Kaledonya",
        "Y Zelanda","Yeni Zelanda","Nikaragua","Nikaragua","Nijer","Nijer","Nijerya","Nijerya","Niyu","Niyu","Norfolk","Norfolk Adası","Mariyana",
        "Kuzey Mariyana Adaları","Kuzey Kore","Kuzey Kore","Norveç","Norveç","Umman","Umman","Pakistan","Pakistan","Palau","Palau","Panama","Panama",
        "P Y Gine","Papua Yeni Gine","Paraguay","Paraguay","Peru","Peru","Filipinler","Filipinler","Pitcairn","Pitcairn Adaları","Polonya","Polonya",
        "Portekiz","Portekiz","Puerto Riko","Puerto Riko","Katar","Katar","Kongo","Kongo Cumhuriyeti","Réunion","Réunion","Romanya","Romanya","Rusya",
        "Rusya Federasyonu","Ruanda","Ruanda","Bartelemi","Aziz Bartelemi","Az Helena","Azize Helena","Az Kits","Aziz Kits ve Nevis","Az Luciya",
        "Azize Luciya","Az Martin","Aziz Martin","Az Piyer","Aziz Piyer ve Mikelon","Az Vincen","Aziz Vincen ve Grenadin","Samoa","Samoa","San Marino",
        "San Marino","São Tomé","São Tomé ve Príncipe","Suudi Arabistan","Suudi Arabistan","Senegal","Senegal","Sırbistan","Sırbistan","Seyşeller",
        "Seyşeller","Sierra Leone","Sierra Leone","Singapur","Singapur","Az Marten","Aziz Marten","Slovakya","Slovakya","Slovenya","Slovenya",
        "Solomon","Solomon Adaları","Somali","Somali","Güney Afrika Cumhuriyeti","Güney Afrika Cumhuriyeti","G Gorgiya",
        "Güney Jorgiya ve GÜney Sandavic Adaları","Güney Kore","Güney Kore","G Sudan","Güney Sudan","İspanya","İspanya","Sri Lanka","Sri Lanka",
        "Filistin","Filistin Devleti","Sudan","Sudan","Surinam","Surinam","Svalbard","Svalbard ve Jen Mayen","İsveç","İsveç","İsviçre","İsviçre",
        "Suriye","Suriye","Tayvan","Tayvan Cumhuriyeti","Tacikistan","Tacikistan","Tanzanya","Tanzanya","Tayland","Tayland","Doğu Timor","Doğu-Timor",
        "Togo","Togo","Tokelau","Tokelau","Tonga","Tonga","Trinidad","Trinidad ve Tobago","Tunus","Tunus","Türkiye","Türkiye","KKTC",
        "Kuzey Kıbrıs Türk Cumhuriyeti","Türkmenistan","Türkmenistan","Türkler ve Kayıkları","Türkler ve Kayıkları (Turks Caicos) Adaları",
        "Tuvalu","Tuvalu","Uganda","Uganda","Ukrayna","Ukrayna","BAE","Birleşik Arap Emirlikleri","BK","Birleşik Krallık","ABD Minor",
        "ABD Minor Outlying Adaları","ABD","Amerika Birleşik Devletleri","ABD-BA","Amerikan Bakire Adaları","Uruguay","Uruguay","Özbekistan",
        "Özbekistan","Vanuatu","Vanuatu","Vatikan","Vatikan Şehri","Venezuela","Venezuela","Vietnam","Vietnam","Walis","Walis ve Futuna",
        "B Sahara","Batı Sahara","Yemen","Yemen","Zambiya","Zambiya","Zimbabve","Zimbabve","Abu Dabi","Abuja","Akra","Adamstown","Addis Ababa",
        "Cezayir","Alofi","Amman","Amsterdam","Andorra la Vella","Ankara","Antananarivo","Apia","Aşkabat","Asmara","Astana","Asunsion","Atina","Avarua",
        "Bağdat","Bakü","Bamako","Bandar Seri Begavan","Bangkok","Bangui","Banjul","Basse-Terre","Baster","Pekin","Beyrut","Belgrad","Belmopan",
        "Berlin","Bern","Bişkek","Bissau","Bloemfontein","Bogota","Brades","Brazilya","Bratislava","Brazavil","Bridgetown","Brüksel","Bükreş",
        "Budapeşte","Buenos Aires","Bujumbura","Kahire","Adalet Kampı","Kanberra","Cape Town","Karakas","Castries","Cayenne","Charlotte Amalie",
        "Kişinev","Cockburn Town","Kolombo","Konakri","Kopenhag","Dakar","Şam","Dakka","Dili","Cibuti","Dodoma","Doha","Douglas","Dublin","Duşanbe",
        "Doğu Kudüs","El Aaiún","Flying Fish Cove","Fort-de-France","Freetown","Funafuti","Gaboron","Garapan","George Town","Georgetown","Cebelitarık",
        "Guatemala","Gustavia","Hagåtña","Hamilton","Hanoi","Harare","Havana","Helsinki","Hong Kong","Honiara","İslamabad","Cakarta","Jamestown",
        "Kudüs","Juba","Kâbil","Kampala","Katmandu","Hartum","Kigali","King Edward Point","Kingston-JM","Kingston-NF","Kingstown","Kinşasa",
        "Kralendijk","Kuala Lumpur","Kuveyt","Kiev","La Paz","Las Palmas","Librevil","Lilongve","Lima","Lizbon","Lübliyana","Lobamba","Lome",
        "Londra","Longyearbyen","Luanda","Lusaka","Lüksemburg","Macau","Madrid","Majuro","Malabo","Male","Mamoudzou","Managua","Manama","Manila",
        "Maputo","Mariehamn","Marigot","Maseru","Matu-Utu","Mbabane","Melekeok","Meksika","Minsk","Mogadişu","Monako","Monrovia","Montevideo","Moroni",
        "Moskova","Muskat","Encemine","N/A-AQ","N/A-BV","N/A-HM","Nairobi","Nassau","Nepido","Yeni Delhi","Niamey","Lefkoşa","Yok","Kuzey Lefkoşa",
        "Nuakşot","Nouméa","Nuku'alofa","Nuuk","Oranjestad","Oslo","Ottava","Vagadugu","Pago Pago","Palikir","Panama","Papeete","Paramaribo","Paris",
        "Philipsburg","Punom Pen","Podgoritsa","Port Louis","Port Moresby","Port of Spain","Port Vila","Port-au-Prince","Porto-Novo","Prag","Praia",
        "Pretorya","Pristina","Pyongyang","Kito","Rabat","Reykjavik","Riga","Riyad","Road Town","Roma","Roseau","Saint George's","Saint Helier",
        "Saint John's","Saint-Denis","Saint-Pierre-PM","Saint-Pierre-TF","San Hose","San Juan","San Marino","San Salvador","Sana",
        "Santa Cruz de Tenerife","Santiago","Santo Domingo","Sao Tome","Saraybosna","Seul","Singapore","Üsküp","Sofya","Sri Jayewardenepura Kotte",
        "St Peter Port","Stanley","Stokholm","Sucre","Suva","Taipei","Tallin","Tarava","Taşkent","Tiflis","Tegusigalpa","Tahran","The Valley","Timpu",
        "Tiran","Tokelau","Tokyo","Tórshavn","Trablus","Tunus","Ulanbator","Vaduz","Valetta","Vatikan","Victoria","Viyana","Vientiane","Vilnius",
        "Varşova","Vaşington","Wellington","West Island","Willemstad","Windhoek","Yamusukro","Yaunde","Yaren","Erivan","Zagreb","Kara","Mavi","Kahverengi",
        "Giri","Yeşil","Bordo","Portakal","Pembe","Mor","Kırmızı","Safran","Beyaz","Sarı","Dolar $","ABD $","Avro €","Afghani AFN ؋",
        "Arnavut Leki LEK","Hollanda Antiller Florini ANG","Madagaskar Doları MGA","Avusturalya Doları AUD $","AUD $","Avusturalya Doları AUD $",
        "Tayland Bahtı THB ฿","Panama Balboası PAB","Etiyopya Biri ETB","Venezuela Bolivarı VEF","Bolivya Bolivyanosu BOB $b","Gana Cedisi GHS ¢",
        "Kosta Rika Kolonu CRC ₡","El Salvador Kolonu SVC $","Gambiya Dalasisi GMD","Makedonya Dinarı MKD ден","Bahreyn Dinarı BHD د.ب",
        "Cezayir Dinarı DZD","Irak Dinarı IQD","Ürdün Dinarı JOD","Kuveyt Dinarı KWD د.ك","Libya Dinarı LYD","Sırp Dinarı RSD Дин",
        "Tunus Dinarı TND","B.A.E. Dirhemi AED د.إ","Fas Dirhemi MAD","Danimarka Kronu DKK","Avustralya Doları AUD $","Barbados Doları BBD $",
        "Bermuda Doları BMD $","Brunei Doları BND $","Bahama Doları BSD $","Belize Doları BZD $","Kanada Doları CAD $","Fiji Doları FJD $",
        "Guyana Doları GYD $","Jamaika Doları JMD $","Liberya Doları LRD $","Namibya Doları NAD $","Singapur Doları SGD $","Surinam Doları SRD $",
        "Trinidad ve Tobago Doları TTD $","Zimbabve Doları ZWL $","Vietnam Dongu VND","Ermenistan Dramı AMD",
        "Mısır Lirası İsrail Yeni Şekeli Ürdün Dinarı EGP ILS JOD","Cape Verde Eskudosu CVE","Euro €","Falkland Adaları Lirası FKP £",
        "Aruba Florini AWG","Macar Forinti HUF","Burundi Frangı BIF","Kongo Frangı CDF","İsviçre Frangı CHF","Cibuti Frangı DJF",
        "Gine Frangı GNF","Komor Frangı KMF","Ruanda Frangı RWF","CFA Frangı BEAC","Bati Afrika Frangı CFA: XOF","Büyük Okyanus Fransız Frangı XPF - CFP",
        "CFA Frangı XAF","Sterlin £ GBP","Guernsey Pound GGP","Cebelitarık Pound £","Haiti Gurdesi HTG","Paraguay Guaranisi PYG","Hong Kong Doları HKD $",
        "Ukrayna Hryvniası UAH ₴","Papua Yeni Gine Kinası PGK","Laos Kipi LAK ₭","Çek Korunası CZK č","İzlanda Kronu ISK","İsveç Kronu","Danimarka Kronu DKK",
        "Norveç Kronu NOK","Hırvat Kunası HRK","Malavi Kvakası MWK","Zambian Kwacha ZMW","Angola Kvanzası AOA","Myanmar Kyatı MMK","Keyman Adaları Doları KYD $",
        "Gürcistan Larisi GEL","Honduras Lempirası HNL","Sierra Leone Leonu SLL","Moldova Leyi MDL","Romen Leyi RON","Svaziland Lilangenisi SZL",
        "Lesotho Lotisi LSL","Azerbaycan Manatı AZN","Türkmenistan Y. Manatı TMT","Bosna Konvertibl Mark BAM","Makau Patacası MOP",
        "Nijerya Nairası NGN ₦","Eritre Nakfası ERN","Bhutan Ngultrumu BTN","Norveç Kronu","Tayvan Yeni Doları NT$ TWD $","Yeni Zelanda Doları NZD $",
        "Umman Riyali OMR ﷼","Nikaragua Kordoba Orosu NIO $","Moritanya Ouguiyası MRO","Tonga Paangası TOP","Arjantin Pezosu ARS $","Şili Pezosu CLP $",
        "Kolombiya Pezosu COP $","Küba Pezosu CUP ₱","Meksika Pezosu MXN $","Filipinler Pesosu PHP ₱","Uruguay Pezosu UYU $","Mısır Lirası EGP £",
        "Lübnan Paundu LBP £","Sudan Dinarı SDG","Güney Sudan Pound SSP","Pound Sterlin GBP £","Suriye Lirası SYP £","Botsvana Pulası BWP",
        "Guatemala Kuetzalı GTQ","Güney Afrika Randı ZAR","Brazilya Reali BRL $","İran Riyali IRR ﷼","Katar Riyali QAR ﷼","Yemen Riyali YER ﷼",
        "Malezya Ringiti MYR","Suudi A. Riyali SAR ﷼","Belarus Rublesi BYR","Rus Rublesi RUB б","Maldiv Rufiyası MVR","Hindistan Rupisi INR ₹",
        "Sri Lanka Rupisi LKR","Mauritus Rupisi MUR","Nepal Rupisi NPR","Pakistani Rupee PKR","Seyşeller Rupisi","Endonezya Rupisi",
        "Solomon Adaları Doları SBD $","İsrail Yeni Şekeli ILS ₪","Kenya Şilini KES","Somali Şilini SOS $","Tanzanya Şilini TZS",
        "Uganda Şilini","Saint Helena Paundu SHP £","Peru Yeni Solu PEN","Kırgızistan Somu KGS 	лв","Tacikistan Somonisi TJS",
        "Sao Tome ve P. Dobrası","Özbekistan Sumu	UZS лв","İsviçre Frangı CHF","Bangladeş Takası BDT ৳","Samoa Talası WST",
        "Kazakhstani Tenge KZT лв","Moğolistan Tugriki MNT ₮","Vanuatu Vatusu VUV","Kuzey Kore Vonu	KPW ₩","Güney Kore Wonu	KRW ₩",
        "Doğu Karayip Doları XCD $","Fransız Ploneziya Frank XPF","Japon Yeni JPY ¥","Çin Yuanı CNY ¥","Polonya Zlotisi PLN",
        "Türk Lirası TRY ₺","Sol","Sağ","Afrikanca","Arnavutça","Amharca","Antil Krığıl  (Antillean Creole)","Arapça","Ermenice",
        "Asante","Asamiz (Assamese)","Aymara","Azerice","Bahasa","Endonez Bahasa","Bacan","Bamana","Bengal","Kamp Dilleri",
        "Beyaz Rusca","Bemba","Bengalce","Bocpuri (Bhojpuri)","Bislama","Boşnakça","Bulgarca","Burma","Katalan","Çamoro (Chamorro)",
        "Çiçeva (Chichewa)","Krığıl (Creole)","Kırayulo (Crioulo)","Hırvatça","Çekce","Danimarkaca","Dari","Divehi","Dioula",
        "Felamenkçe (Dutch)","Butanez (Dzongkha)","Makua (Emakhuwa)","İngizlice","Estonyaca","Ewe","Fante","Ficice","Filipince",
        "Fince","Fransızca","Fulani","Gelik (Gaelic)","Ganda","Gürcüce","Almanca","Yunanca","Kalaallisut (Greenlandic)","Guarani",
        "Gucurati (Gujarati)","İbranice","Hintçe","Hiri Motu","Macarca","Kiribati","İzlandaca","Endonezca (Indonesian)","İrlandaca",
        "Zulu","Italyanca","Japonca","Javaca","Kannada","Keşmirce (Kashmiri)","Kazakça","Kamir","Kinyarvanda","Kirundi","Korece",
        "Kiriyo (Krio)","Kürtçe","Kırgızca","Laoca","Letonca","Luhotşampaz (Lhotshamkha)","Lingala","Litvanca","Luganda","Lüksemburgiş",
        "Makedonca","Maithili","Makasay","Malagasi","Mıley (Malay)","Malayalam","Malti (Maltese)","Mambai","Çince","Mandinka","Marati",
        "Marşaliz","Maya","Malezian pigin","Mende","Romence","Moğolca","Monokutuba","Karadağca","Nauruca","Navat","Indebeli","Nepali",
        "Niyuce (Niuean)","Norveçce","Niyanca (Nyanja)","Oriya","Oromo","Palauca (Palaun)","Papimentu","Peştu","Farsça","Lehce",
        "Portekizce","puncapi (Punjabi)","Kicua (Quechua)","Rarotongan","Romence","Romanş (Romansch)","Rusça","Samoaca","Sango",
        "Senskirit (Sanskrit)","Saraiki","Sikot (Scots)","Sekalanga","Sepedi","Sırpça","Sesotho","Setswana","Seyşel Krığıl (Creole)",
        "Sharchhopka","Shona","İşaret dili","Sindhi","Sinhala","Swati","Slovakça","Slovence","Somalice","İspanyolca","Svahili","İsveçce","Tacikçe",
        "Tamilce","Tatar","Telugu","Temne","Tetum","Taylandca","Tigrinya","Tok Pisin","Tokelauan","Tonga","Tongaca","Türkçe","Türkmence","Tuvaluca",
        "Ukraynaca","Umbundu","Urduca","Özbekçe","Vietnamca","Velş","Volof","Xichangana","Afrika","Asya","Avrupa","Kuzey Amerika","Kuzey Amerika",
        "Okyanusya","Güney Amerika","Şüpheci","Canlıcılık (Animism)","Budizm","Hiristiyanlık","Konfüçyüsçülük","Dürzi","Halk","Hinduizm","Yerli",
        "İslam","Yahudilik","Şamanizm","Şintoizm","Taoculuk","Bağlı olmayan","Alpaka","Çapa","Angkor Wat","Hayvan","Arapça","Silahlı küre","Zırh",
        "Zırhlı","Ok","Ok başı","Balta","Muz","Grup","Bar","Varil","Körfez","Körfez defnesi","Süngü","İncil","Kuş","Kitap","Sınır","Yay","Dal",
        "Köprü","İngiliz bayrağı","Boru","Bina","Kakao","Kaktüs","Kartal","Top","Kano","Kanton","Kapak","Halı","Kale","Sedir","Zincir","Daire",
        "Karanfil","Arması","Kakao","Hindistan cevizi","Madeni para","Pusula","Akbaba","Kordon","Bereket","Adliye","İnek","Leylek","Hilâl","İbik",
        "Çapraz (Haç)","Taç","Güneyhaçı","Hançer","Çapraz","Elmas","Köpek","Yunus","Çift çapraz","Güvercin","Ejderha","Davul","Kartal","Sekiz Köşeli Yıldız",
        "Amblem","İngilizce","Eşkenar","Altı Dalgalı Kenarlı Yıldız","Yüz","Tüy","Dişi","Eğreltiotu","Fimbriation","Ateş","Beş Yaprak",
        "Beş Köşeli Yıldız","Bayrak","Fleurs-de-lys","Çiçek","Çırpma teli uçmak","On Dört Köşeli Yıldız","Dört Köşeli Yıldız","Fransızca",
        "Meyve","Vites","Haç","Küre","Keçi","Çimen","El","Harp","Şapka","Baş","Kask","Altı Köşeli Yıldız","Tepe","Kapüşon","Yatay","Boynuz",
        "İnsan Yüzü","Buz","İkizkenar","Mücevher","Anahtar","kufi","Hanımefendi","Lama","Lamba","Latin","Defne","Yaprak","Bacak","Leopar",
        "Hat","Aslan","Istakoz","Lotus","Pala","Maun (Mahogany)","Mango","Örtü","Harita","Çınar (Akçaağaç)","Miro","Anıt","Ay","Dağ",
        "Tekir (Mullet)","Namele","Küçük Hindistan Cevizi","Meşe","Kürek","Eğik","Okyanus","Zeytin","Süs","Devekuşu-tüy","Palmiye",
        "Papalık tacı","Paralelkenar","Güneş Şemsiyesi","Papağan","Desen","İnci","Penguen","Flama","Beş Köşeli Yıldız","Kişi","Sütun",
        "Çam","Ananas","Nar","Portekizce","Patates","Gökkuşağı","Koç","Işın","Dikdörtgen","Ren Geyiği","Eşkenar Dörtgen","Kurdele","Tüfek",
        "Halka","Nehir (Irmak)","Halat","Gül","Adaçayı","Yelken","Yelkenli","Saltire (haç)","Elyazısı","Deniz","Denizatı","Folk Balığı",
        "Yedi Köşeli Yıldız","Şehadet","Kılıf","Koyun","Kabuk","Kalkan","Gemi","Altı Köşeli Yıldız","Sapan","Duman","Yılan","Kar",
        "İspanyol(ca)","Mızrak","Mahmuz","Kare","Merdivenler","Sap","Yıldız","Taş","Şerit","Şeker Kamışı","Güneş","Mayıs Güneşi",
        "Kılıç","Sembol","Taegeukgi (Güney Kore Bayrağı)","Taiji (En Yüce)","Tekbir","Çadır","Sülüs","Meşale","Totem","Kule","Yamuk",
        "Yamuk Dörtgen","Ağaç","Üçgen","Üç Dişli Mızrak","Trigram","Lale","Kaplumbağa","Uzun diş","On İki Köşeli Yıldız",
        "Yirmi Dört Köşeli Yıldız","Dikey","Volkan (Yanardağ)","Su","Dalga","Dalgalar","Silah","Buğday","Tekerlek","El Arabası",
        "Beyaz Saltire","Kanat","Çelenk","Yin Yang","Zodyak","Adriyatik","Ege","Andaman","Antartik","Arap","Arafura","Arktik",
        "Atlantik","Bali","Baltık","Banda","Barent","Bengal Körfezi","Biscay Körfezi","Bering","Bering Denizleri","Bismarck",
        "Kara","Karayip","Hazar","Celebes","Kelt","Ceram","Chukchi","Doğu Çin","Doğu Sibirya","İngiliz kanalı","Flores",
        "Aden Körfezi","Akabe Körfezi","Kaliforniya Körfezi","Gine Körfezi","Meksika körfezi","Umman Körfezi","Tayland Körfezi",
        "Tayland Körfezi ve Pasifik Okyanusu","Halmahera","Hint","Hint Okyanusu","İyon","İrlanda","Java","Kara","Laccadive","Malavi Gölü",
        "Victoria Gölü","Kara İle Çevrili","Laptev","Liguria","Marmara","Akdeniz","Molacca","Natuna","Kuzey","Norveççe","Pasifik (Büyük)",
        "İran Körfezi","Filipin","Kızıl","Savu","Azov denizi","Japon Denizi","Okhotsk Denizi","Solomon","Güney Çin","Güney","Sulu","Tasman",
        "Timor","Sarı","Sarı Deniz (Yellow)"];

        $dataSK = ["Nízky","Stredný","Vysoký","Afganistan","Afganistan","Alandy","Alandské ostrovy","Albánsko","Albánsko","Alžírsko","Alžírsko",
        "Americká Samoa","Americká Samoa","Andorra","Andorra","Angola","Angola","Anguilla","Anguilla","Antarktída","Antarktický zmluvný systém",
        "Antigua","Antigua a Barbuda","Argentína","Argentína","Arménsko","Arménsko","Aruba","Aruba","Australia","Australia","Rakúsko","Rakúsko",
        "Azerbajdžan","Azerbajdžan","Bahamy","Bahamy","Bahrajn","Bahrajn","Bangladéš","Bangladéš","Barbados","Barbados","Bielorusko","Bielorusko",
        "Belgicko","Belgicko","Belize","Belize","Benin","Benin","Bermudy","Bermudy","Bhután","Bhután","Bolívia","Bolívia","Bonaire",
        "Bonaire Sint Eustatius a Saba","Bosna","Bosna a Hercegovina","Botswana","Botswana","Bouvet","Ostrov Bouvet","Brazília","Brazília",
        "Britské územie Indického oceánu","Britské územie Indického oceánu","Britské Panenské ostrovy","Britské Panenské ostrovy","Brunej",
        "Brunej","Bulharsko","Bulharsko","Burkina Faso","Burkina Faso","Burundi","Burundi","Kambodža","Kambodža","Kamerun","Kamerun","Kanada",
        "Kanada","Kanarske","Kanarske ostrovy","Kapverdy","Kapverdy","Kajmany","Kajmanské ostrovy","Stredoafrická republika",
        "Stredoafrická republika","Čad","Čad","Čile","Čile","Čína","Čína","Vianočný","Vianočný ostrov","Kokosové","Kokosové ostrovy","Kolumbia",
        "Kolumbia","Komory","Komory","Cookove","Cookove ostrovy","Kostarika","Kostarika","Pobrežie Slonoviny","Pobrežie Slonoviny","Chorvátsko",
        "Chorvátsko","Kuba","Kuba","Curaçao","Curaçao","Cyprus","Cyprus","Česko","Česko","Konžská DR","Konžská demokratická republika","Dánsko",
        "Dánsko","Džibutsko","Džibutsko","Dominika","Dominika","Dominikánska","Dominikánska republika","Ekvádor","Ekvádor","Egypt","Egypt",
        "Salvádor","Salvádor","R. Guinea","Rovníková Guinea","Eritrea","Eritrea","Estónsko","Estónsko","Eswatini","Eswatini","Etiópia","Etiópia",
        "Falklandy","Falklandské ostrovy","Faery","Faerské ostrovy","Fidži","Fidži","Fínsko","Fínsko","Francúzsko","Francúzsko","Guiana",
        "Francúzska Guiana","Polynézia","Francúzska Polynézia","Francúzske antarktické","Francúzske južné a antarktické územia","Gabon","Gabon",
        "Gambia","Gambia","Gruzínsko","Gruzínsko","Nemecko","Nemecko","Ghana","Ghana","Gibraltár","Gibraltár","Grécko","Grécko","Grónsko","Grónsko",
        "Grenada","Grenada","Guadeloupe","Guadeloupe","Guam","Guam","Guatemala","Guatemala","Guernsey","Guernsey","Guinea","Guinea","Guinea Bissau",
        "Guinea-Bissau","Guyana","Guyana","Haiti","Haiti","H McDonald","Ostrov Heard a ostrovy McDonald","Honduras","Honduras","Hong Kong",
        "Hong Kong","Maďarsko","Maďarsko","Island","Island","India","India","Indonézia","Indonézia","Irán","Irán","Irak","Irak","Írsko","Írsko",
        "Isle of Man","Isle of Man","Izrael","Izrael","Taliansko","Taliansko","Jamajka","Jamajka","Japonsko","Japonsko","Jersey","Jersey","Jordán",
        "Jordán","Kazachstan","Kazachstan","Keňa","Keňa","Kiribati","Kiribati","Kosovo","Kosovo","Kuvajt","Kuvajt","Kirgizsko","Kirgizsko","Laos",
        "Laos","Lotyšsko","Lotyšsko","Libanon","Libanon","Lesotho","Lesotho","Libéria","Libéria","Líbya","Líbya","Lichtenštajnsko","Lichtenštajnsko",
        "Litva","Litva","Luxembursko","Luxembursko","Macau","Macau","Macedónska republika","Macedónska republika","Madagaskar","Madagaskar","Malawi",
        "Malawi","Malajzia","Malajzia","Maldivy","Maldivy","Mali","Mali","Malta","Malta","Marshallove","Marshallove ostrovy","Martinik","Martinik",
        "Mauritánia","Mauritánia","Maurícius","Maurícius","Mayotte","Mayotte","Mexiko","Mexiko","Mikronézia","Mikronézia","Moldavsko","Moldavsko",
        "Monako","Monako","Mongolsko","Mongolsko","Čierna Hora","Čierna Hora","Montserrat","Montserrat","Maroko","Maroko","Mozambik","Mozambik",
        "Mjanmarsko","Mjanmarsko","Namíbia","Namíbia","Nauru","Nauru","Nepál","Nepál","Holandsko","Holandsko","N Kaledónia","Nová Kaledónia",
        "N Zéland","Nový Zéland","Nikaragua","Nikaragua","Niger","Niger","Nigéria","Nigéria","Niue","Niue","Norfolk","Norfolkský ostrov","Mariány",
        "Severné Mariány","Severná Kórea","Severná Kórea","Nórsko","Nórsko","Omán","Omán","Pakistan","Pakistan","Palau","Palau","Pakistan",
        "Pakistan","P N Guinea","Papua-Nová Guinea","Paraguaj","Paraguaj","Peru","Peru","Filipíny","Filipíny","Pitcairn","Pitcairn ostrovy",
        "Poľsko","Poľsko","Portugalsko","Portugalsko","Portoriko","Portoriko","Katar","Katar","Kongo","Konžská demokratická republika","Réunion",
        "Réunion","Rumunsko","Rumunsko","Rusko","Ruská federácia","Rwanda","Rwanda","Bartolomej","Svätý Bartolomej","Sv Helena","Svätá Helena",
        "Sv Krištof","Svätý Krištof a Nevis","Sv Lucia","Svätá Lucia","Sv Martin","Svätý Martin","Sv Peter","Svätý Peter a Michal","Sv Vincent",
        "Svätý Vincent a Grenadíny","Samoa","Samoa","San Maríno","San Maríno","Svätý Tomáš","Svätý Tomáš a Princov ostrov","Saudská Arábia",
        "Saudská Arábia","Senegal","Senegal","Srbsko","Srbsko","Seychely","Seychely","Sierra Leone","Sierra Leone","Singapur","Singapur",
        "St Maarten","Sint Maarten","Slovensko","Slovensko","Slovinsko","Slovinsko","Šalamúnske","Šalamúnove ostrovy","Somálsko","Somálsko",
        "Južná Afrika","Južná Afrika","J Gruzínsko","Južná Gruzínsko a Južné Sandwichove ostrovy","Južná Kórea","Južná Kórea","J Sudán",
        "Južný Sudán","Španielsko","Španielsko","Srí Lanka","Srí Lanka","Palestína","Palestínsky štát","Sudán","Sudán","Surinam","Surinam",
        "Svalbard","Svalbard and Jan Mayen","Švédsko","Švédsko","Švajčiarsko","Švajčiarsko","Sýria","Sýria","Taiwan","Taiwan: Čína","Tadžikistan",
        "Tadžikistan","Tanzánia","Tanzánia","Thajsko","Thajsko","Timor Leste","Timor-Leste","Togo","Togo","Tokelau","Tokelau","Tonga","Tonga",
        "Trinidad","Trinidad a Tobago","Tunisko","Tunisko","Turecko","Turecko","TRSC","Turecká republika severného Cypru","Turkménsko",
        "Turkménsko","Turks Caicos","Ostrovy Turks a Caicos","Tuvalu","Tuvalu","Uganda","Uganda","Ukrajina","Ukrajina","SAE",
        "Spojené Arabské Emiráty","UK","Spojené kráľovstvo","US Minor","Malé odľahlé ostrovy Spojených štátoch","USA","Spojené štáty","USVI",
        "Americké Panenské ostrovy","Uruguaj","Uruguaj","Uzbekistan","Uzbekistan","Vanuatu","Vanuatu","Vatikán","Vatikán a Svätá stolica",
        "Venezuela","Venezuela","Vietnam","Vietnam","Wallis","Wallis a Futuna","Západná Sahara","Západná Sahara","Jemen","Jemen","Zambia",
        "Zambia","Zimbabwe","Zimbabwe","Abú Dhabí","Abuja","Akkra","Adamstown","Addis Abeba","Alžír","Alofi","Ammán","Amsterdam","Andorra la Vella",
        "Ankara","Antananarivo","Apia","Ašchabad","Asmara","Astana","Asunción","Atény","Avarua","Bagdad","Baku","Bamako","Bandar Seri Begawan",
        "Bangkok","Bangui","Banjul","Basse-Terre","Basseterre","Peking","Bejrút","Belehrad","Belmopan","Berlín","Bern","Biškek","Bissau",
        "Bloemfontein","Bogota","Brades","Brazília","Bratislava","Brazzaville","Bridgetown","Brusel","Bukurešť","Budapešť","Buenos Aires",
        "Bujumbura","Kairo","Camp Justice","Canberra","Kapské Mesto","Caracas","Castries","Cayenne","Charlotte Amalie","Chișinău","Cockburn Town",
        "Kolombo","Konakry","Kodaň","Dakar","Damask","Dháka","Dili","Džibuti","Dodoma","Dauhá","Douglas","Dublin","Dušanbe","Východný Jeruzalem",
        "El-Aaiún","Flying Fish Cove","Fort-de-France","Freetown","Funafuti","Gaborone","Garapan","George Town","Georgetown","Gibraltár",
        "Guatemala","Gustavia","Hagåtña","Hamilton","Hanoj","Harare","Havana","Helsinki","Hong Kong","Honiara","Islamabad","Jakarta",
        "Jamestown","Jerusalem","Juba","Kábul","Kampala","Káthmandu","Khartoum","Kigali","King Edward Point","Kingston-JM","Kingston-NF",
        "Kingstown","Kinshasa","Kralendijk","Kuala Lumpur","Kuvajt","Kyjev","La Paz","Las Palmas","Libreville","Lilongwe","Lima","Lisabon",
        "Ľubľana","Lobamba","Lomé","Londýn","Longyearbyen","Luanda","Lusaka","Luxemburg","Macau","Madrid","Majuro","Malabo","Malé","Mamoudzou",
        "Managua","Manáma","Manila","Maputo","Mariehamn","Marigot","Maseru","Matu-Utu","Mbabane","Melekeok","Mexiko","Minsk","Mogadišo","Monako",
        "Monrovia","Montevideo","Moroni","Moskva","Maskat","N'Djamena","N/A-AQ","N/A-BV","N/A-HM","Nairobi","Nassau","Neipyijto","Naí Dillí",
        "Niamey","Nikózia","Žiadne","Severná Nikózia","Nouakchott","Nouméa","Nuku'alofa","Nuuk","Oranjestad","Oslo","Ottawa","Ouagadougou",
        "Pago Pago","Palikir","Panama","Papeete","Paramaribo","Paríž","Philipsburg","Phnom Pénh","Podgorica","Port Louis","Port Moresby",
        "Port of Spain","Port Vila","Port-au-Prince","Porto-Novo","Praha","Praia","Pretória","Priština","Pchjongjangu","Quito","Rabat",
        "Reykjavík","Riga","Rijád","Road Town","Rím","Roseau","Saint George's","Saint Helier","Saint John's","Saint-Denis","Saint-Pierre-PM",
        "Saint-Pierre-TF","San José","San Juan","San Maríno","San Salvador","Saná","Santa Cruz de Tenerife","Santiago","Santo Domingo",
        "Svätý Tomáš","Sarajevo","Soul","Singapur","Skopje","Sofia","Sri Jayewardenepura Kotte","St Peter Port","Stanley","Štokholm","Sucre",
        "Suva","Tchaj-pej","Tallinn","Tarawa","Taškent","Tbilisi","Tegucigalpa","Teherán","The Valley","Thimphu","Tirana","Tokelau","Tokio",
        "Tórshavn","Tripolis","Tunis","Ulanbátar","Vaduz","Valletta","Vatikán","Victoria","Viedeň","Vientian","Vilnius","Varšava",
        "Washington, D.C.","Wellington","West Island","Willemstad","Windhoek","Yamoussoukro","Yaoundé","Yaren","Jerevan","Záhreb","Čierna",
        "Modrá","Hnedá","Šedá","Zelená","Gaštanovohnedá","Oranžová","Ružová","Fialová","Červená","Šafran","Biela","Žltá","$ Dolár","$ USD",
        "€ EURO","afgánske afghani AFN","albánsky lek","ANG","Ariary MGA","AU$ AUD","AUD","Austrálský dolár AUD","thajský baht THB",
        "panamská balboa PAB","etiópský birr ETB","venezuelský bolívar fuerte VEF","bolívijské boliviano BOB","ghanský cedi GHS",
        "kostarický colón CRC","salvádorský colón SVC","gambijské dalasi GMD","macedónsky denár MKD","bahrainský dinár BHD",
        "alžírsky dinár DZD","iracký dinár IQD","jordánský dinár JOD","kuvajtský dinár KWD","libíjsky dinár LYD","srbský dinár RSD",
        "tuniský dinár TND","dirham arabských emir. AED","marocký dirham MAD","dánska koruna DKK","austrálsky dolár AUD",
        "barbadoský dolár BBD","bermudský dolár BMD","brunejský dolár BND","bahamský dolár BSD","belizský dolár BZD","kanadský dolár CAD",
        "fidžijský dolár FJD","guyanský dolár GYD","jamajský dolár JMD","libérijský dolár LRD","namíbijský dolár NAD","singapurský dolár SGD",
        "surinamský dolár SRD","trinidadsko tobagský dolár TTD","zimbabwský dolár ZWL","vietnamský dong VND","arménsky dram AMD","EGP ILS JOD",
        "kapverdské escudo CVE","Euro €","falklandská libra FKP","arubský florin AWG","maďarský forint HUF","burundský frank BIF",
        "konžský frank CDF","švajčiarsky frank CHF","džibutský frank DJF","guinejský frank GNF","komorský frank KMF","rwandský frank RWF",
        "stredoafrický frank XAF","západoafrický frank XOF","francúzsky pacifický frank XPF","stredoafrický frank XAF","britská libra GBP",
        "Guernsey libra GGP","gibraltárska libra GIP","haitský gourde HTG","paraguajské guarani PYG","hongkongský dolár HKD",
        "ukrajinská hrivna UAH","papuánska kina PGK","laoský kip LAK","česká koruna CZK","islandská koruna ISK","švédska koruna SEK",
        "dánska koruna DKK","nórska koruna NOK","chorvátska kuna HRK","malawijská kwacha MWK","zambijská kwacha ZMW","abgolská kwanza AOA",
        "mjanmarský kyat MMK","kajmanský dolár KYD","gruzínske lari GEL","honduraská lempira HNL","sierraleonské leone SLL","moldavský lei MDL",
        "rumunský lei RON","svazijský lilangeni SZL","lesothský loti LSL","azerbajdžanský manat AZN","turkménsky manat TMT",
        "bosniansko-herceg. marka BAM","macauská pataca MOP","nigérijská naira NGN","eritrejská nakfa ERN","bhutánsky ngultrum BTN",
        "nórska koruna NOK","tajwanský dolár TWD","novozélandský dolár NZD","ománsky riál OMR","nikaragujská zlatá córdoba NIO",
        "mauritánska ouguiya MRO","tonžská paanga TOP","agentínske peso ARS","čilské peso CLP","kolumbijské peso COP",
        "kubánske peso CUP","mexické peso MXN","filipínske peso PHP","uruguajské peso UYU","egyptská libra EGP",
        "libanonská libra LBP","sudánská libra SDG","južný sudán libra SSP","britská libra GBP","sýrijská libra SYP",
        "botswanská pula BWP","guatemalský quetzal GTQ","juhoafrický rand ZAR","brazílsky reál BRL","iránsky riál IRR",
        "katarský riál QAR","jemenský rial YER","malajzský ringgit MYR","saudsko arabský riál SAR","bieloruský rubeľ BYR",
        "ruský rubeľ RUB","maldivská rupia MVR","indická rupia INR","sri lanská rupia LKR","maurícijská rupia MUR","nepálska rupia NPR",
        "pakistanská rupia PKR","seychelská rupia SCR","indonézska rupia IDR","šalamúnsky dolár SBD","izraelský šekel ILS",
        "keňský šiling KES","somálsky šiling SOS","tanzánsky šiling TZS","ugandský šiling","svätohelenská libra SHP",
        "peruánsky nový sol PEN","kirgizský som KGS","tadžikistanský somoni TJS","svätotomášska dobra STD","uzbecký sum UZS",
        "švajčiarsky frank CHF","bangladéšska taka BDT","samojská tala WST","kazachstanský tenge KZT","mongolský tugrik MNT",
        "vanuatské vatu VUV","severokórejský won KPW","juhokórejský won KRW","východokaribský dolár XCD","francúzsky pacifický frank XPF",
        "japonský jen JPY","čínsky juan CNY","poľský zlotý PLN","turecká líra","Vľavo","Vpravo","africký","albánsky","amharský","antilsko kreolský","arabský",
        "armenský","asantský","ásámský","aymarský","azerbajdžanský","bahaský","bahaskoindonezský","bajanský","bambarský","bangolský","jazyk kempu","bieloruský",
        "bembský","bengálský","bhódžpurpský",
        "bislamský","bosniacký","bulharský","bamrský","katalánský","čamorský","čičewský","kreolský","krioulský","chorvátský","český","dánsky","dársky",
        "divehský","dioulská","holandský","dzongkhský","emakhuwský","anglický","estónsky","ewský","fantský","fidžijský","filipinsky","fínsky","francúzsky","fulský",
        "gaelský","gandský","gruzínsky","nemecky","grécky","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
        "","","","","","","","","","","","","","","","","","","","","","Biblia","Vták","Kniha","Okraj","Mašľa","Vetva","Most","Britská vlajka",
        "Poľnica","Budova",
        "Kakao","Kaktus","","","","","","","","","","","","","","","","","","Lano","Roh hojnosti","Súd","Krava","","Polmesiac","Symbol",
        "Kríž","Koruna","Južný kríž","Dýka","Uhlopriečne","Diamant","Pes","Delfín","Dvojitý kríž","Holubica","Drak","","","","","","","",
        "","","","","","","","","","","Kvet","","","","Francúzky","Ovocie","Prevod","Juraj","Zemeguľa","Koza","Tráva","Ruka","Harfa",
        "Klobúk","Hlava","Prilba","šesťcípa hviezda","Kopec","Kapucňa","Horizontálny","Roh","Ľudská tvár","Ľad","Rovnoramenný","Klenot",
        "Kľúč","Kuficke","Dáma","Lama","Lampa","Latinsky","Vavrín","List","Noha","Leopard","","Lev","Homár","Lotus","Mačeta","Mahagón",
        "Mango","Plášť","Mapa","Javor","","Pamätník","Mesiac","Hory","","","Muškátový oriešok","dub","","Šikmé","Oceán","Oliva","Ornament",
        "Pštrosie pierko","dlaň","Pápežova tiara","Rovnobežník","Dáždnik","Papagáj","Vzor","Perla","Tučniak","Vlajka","Pentagram","Osoba",
        "Pilier","Borovica","Ananás","Granátové jablko","Portugalský","Zamiak","Dúha","Baran","Lúč","Obdĺžnik","Sob","Kosoštvorec","Stuha",
        "Puška","Prsteň","Rieka","Lano","Ruža","Šalvia","Plachta","Plachetnica","Saltire","Skript","More","Morský konik","Pečať",
        "Sedemcípa hviezda","","Plášť","Ovca","Mušla","Štít","Loď","Šesťcípa hviezda","prak","Dym","Had","Sneh","Španielsky","Kopija","",
        "Štvorec","Schody","Stonka","Hviezda","Kameň","Pruh","Cukrová trstina","Slnko","Majové slnko","Meč","Symbol","","","","Stan","",
        "Fakľa","Totem","Veža","","Lichobežník","Strom","Trojuholník","Trojzubec","","Tulipán","Korytnačka","Tesák","Dvanásťcípa hviezda",
        "Dvadsaťštyricípa hviezda","Zvislý","Sopka","Voda","Vlna","Vlny","Zbraň","Pšenica","Koleso","Fúrik","","Krídlo","Veniec",
        "Jin a jang","Zverokruh","Jadranské","Egejské","","Antarktický","Arabské","Arafurské","Artický","Atlantický","","Baltské","",
        "Barentské","Bengálsky záliv","Biskajský záliv","Beringovo","Beringovo more","","","","","","","","","","","","","Adenský záliv",
        "Akabský záliv","Kalifornský záliv","Guinejský záliv","Mexický záliv","Ománský záliv","Thajský záliv","Thajský záliv a Tichý oceán",
        "","Indický","Indický oceán","Iónske","Írske","","","","Jazero Malawi","Jazero Victoria","Vnútrozemie","","Ligúrske","Marmarské",
        "Stredozemné","","","Severné","Nórske","Tichý","Perzský záliv","","Červené","","Azovské more","Japonské more","",
        "Šalamúnske","Juhočínske more","Juzné","","Tasmanské","Timorské","Žlté","Žlté more"];

        # Initiate a new timestamp
        $timestamp = Carbon\Carbon::now()->toDateTimeString(); # same is OK

        // Insert Turkey-Turkish Data
        foreach($dataTR as $key => $data)
        {
            ApplicationLanguageData::insert([
                 'created_at' => $timestamp,
                 'updated_at' => $timestamp,
                 'application_language_id' => "2",
                 'application_language_id_count' => $key,
                 'this_language_feature_value' => $data,
                 'based_on_application_language_id' => "999",
            ]);
        }

        // Insert Slovakia-Slovak Data
        foreach($dataSK as $key => $data)
        {
            ApplicationLanguageData::insert([
                'created_at' => $timestamp,
                'updated_at' => $timestamp,
                'application_language_id' => "3",
                'application_language_id_count' => $key,
                'this_language_feature_value' => $data,
                'based_on_application_language_id' => "999",
            ]);
        }

    }
}
