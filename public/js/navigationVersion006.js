"use strict";

var inlineBlockOnes = { "id_Register":true, "id_Citations":true, "id_AboutMe":true, "id_TextLanguages":true, "id_DataLanguages":true, };
var previousMenuItem = "none";

function createNavigationTags(navElement)
{
    previousMenuItem = "none";
    // Navigation element
    var whereNav = navElement.getAttribute("data-nav");
    // Citation, Registration, Web Page Text Language, Data Language, About
    var navUlElement = document.createElement("ul");
    navUlElement.setAttribute("class", "margin1ThirdRem");
    navUlElement.setAttribute("role", "menu");
    navUlElement.setAttribute("aria-expanded", false);
    navElement.appendChild(navUlElement);
    // Only Menu Has All Pages the Rest has Only the Menu
    if (whereNav == "menu")
    {
        // World: Search/Filter/Report
        createOneNavItem("workWithFlagsdashBoard","appLanguageSel","id_Searching","Searching",navUlElement,navElement,whereNav);
        // Regions: Surf
        createOneNavItem("workWithWorldFlags","appLanguageSel","id_Surfing","Surfing",navUlElement,navElement,whereNav);
        // Country Codes
        createOneNavItem("workWithCountryCodes","appLanguageSel","id_Countries","CountryCodes",navUlElement,navElement,whereNav);
        // startUp
        createOneNavItem("registerMe","appLanguageSel","id_Register","Register",navUlElement,navElement,whereNav);
        // Citations
        createOneNavItem("citations","appLanguageSel","id_Citations","Citations",navUlElement,navElement,whereNav);
        // About Me Box
        createOneNavItem("workWithAboutMe","appLanguageSel","id_AboutMe","AboutMe",navUlElement,navElement,whereNav);
        // Blank Line
        createOneNavItemBlank(navUlElement);
        // Application Text Languages
        createOneNavItem("workWithApplicationTextLanguage","appLanguageSel","id_TextLanguages","TextLanguages",navUlElement,navElement,whereNav);
        // Application Data Languages
        createOneNavItem("workWithApplicationDataLanguage","appLanguageSel","id_DataLanguages","DataLanguages",navUlElement,navElement,whereNav);
    }
    else createOneNavItem("menu","appLanguageSel","id_Menu","Menu",navUlElement,navElement,whereNav);
}

function createOneNavItem(navAId,navAClass,navTextId,navValue,navUlElement,navElement,whereNav)
{
    if (whereNav == navValue) {} // don't show itself: forget being a Desktop Application Programmer
    else
    {
        var worldFlags = document.createElement("a");
        worldFlags.setAttribute("class", navAClass + " menuItem");
        var worldFlagsTextElement = getASpanElement(navTextId, myUndefined,
            selectedApplicationLanguageTexts[navTextId]);
        worldFlags.name = navValue;
        worldFlags.appendChild(worldFlagsTextElement);
        var navLiElementTextLang = document.createElement("li");
        if (inlineBlockOnes[navTextId]) navLiElementTextLang.setAttribute("class", "inlineBlock");
        if (navValue == "countryList") navLiElementTextLang.setAttribute("class", "workWithCountryList");
        navLiElementTextLang.setAttribute("role", "menuitem");
        navLiElementTextLang.setAttribute("id", "id_Li" + navValue);
        navLiElementTextLang.appendChild(worldFlags);
        navUlElement.appendChild(navLiElementTextLang);
        // this fixes the Apple (iPhone/iPad) click missing problem.. Not handle with addEvents' clickEvents
        navLiElementTextLang.addEventListener("click", startNavigationItem, false);
    }
}

function startNavigationItem(event) {
    if (event.target && event.target.id && initialMenuItems[event.target.id]) {
        if (previousMenuItem != event.target.id) { // ignores the same menu selection (no extra navigation item creation: double triple...
            if (event.target.id == "id_Searching" || event.target.id == "id_Surfing" || event.target.id == "id_Countries")
                document.getElementById("id_LiSearching").innerHTML = '<svg width="100%" height="2.1rem" viewBox="0 0 219.5 66"><g><rect class="fillProgress" x="4.583" y="5" fill="#72CC58" width="198.879" height="56"/></g><g><path class="outline" fill="#cc496a" d="M219.5,14.25h-11.456V0H0v66h208.044V51.75H219.5V14.25z M198.879,56H9.165V10h189.714V56z"/></g></svg>';
            initialMenuItems[event.target.id](event.target.id);
            previousMenuItem = event.target.id;
        }
    }
}

function createOneNavItemBlank(navUlElement) {
    var navLiElementTextLang = document.createElement("li");
    navLiElementTextLang.setAttribute("class", "registerH2");
    navUlElement.appendChild(navLiElementTextLang);
}
