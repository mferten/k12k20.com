"use strict";

initializationUtilityForAll(); // get the initial application values (default or saved)

var startupProgram = startupValuesJSONObject.startWith;
if (startupProgram && startupProgram == "id_Menu")
{
    setMenuImage();
}
else
{
    if (initialMenuItems[startupProgram]) initialMenuItems[startupProgram](startupProgram);
    else console.log("a bug to fix: " + startupProgram + " doesn't exist!");
}

function setMenuImage() {
    setTimeout(function() {
        currentEWorldPage = "Menu";
        var menuBody = document.createElement("body");
        menuBody.setAttribute("class","displayNone");
        menuBody.setAttribute("name","menu");
        var menuHeader = document.createElement("header");
        menuHeader.setAttribute("id","id_Header");
        menuHeader.setAttribute("class","center");
        var menuH1 = document.createElement("h1");
        menuH1.setAttribute("id","id_FirstMessage");
        menuH1.setAttribute("class","appLanguageSel");
        menuH1.innerHTML = selectedApplicationLanguageTexts["id_Menu"];
        var menuH2 = document.createElement("h2");
        addApplicationLanguageSelectionDropDownBox(menuH2);
        menuHeader.appendChild(menuH1);
        menuHeader.appendChild(menuH2);
        var menuMain = document.createElement("main");
        menuMain.setAttribute("id","mainBody");
        menuMain.setAttribute("class","center");
        var menuNav = document.createElement("nav");
        menuNav.setAttribute("id","id_Navigation");
        menuNav.setAttribute("data-nav","menu");
        menuNav.setAttribute("class","center");
        var menuFooter = document.createElement("footer");
        menuFooter.setAttribute("class","center");
        var menuFooterSpan = document.createElement("span");
        menuFooterSpan.setAttribute("id","id_CopyRight");
        var menuFooterP = document.createElement("span");
        menuFooterP.setAttribute("id","id_LanguageImplementedBy");
        menuFooter.appendChild(menuFooterSpan);
        menuFooter.appendChild(menuFooterP);

        var menuImage = document.createElement("img");
        menuImage.setAttribute("src","/images/_world.png");
        menuImage.setAttribute("alt","World View");
        menuImage.setAttribute("id","menuWorldView");
        menuMain.appendChild(menuImage);
        menuBody.appendChild(menuHeader);
        menuBody.appendChild(menuMain);
        menuBody.appendChild(menuNav);
        menuBody.appendChild(menuFooter);
        if (document.body)
            document.getElementById("topHTML").replaceChild(menuBody, document.body);
        else document.getElementById("topHTML").appendChild(menuBody);
        setNavFooterTags("menu", true);
        menuBody.classList.remove("displayNone");
        // Application Language Drop Down (Select/Options)
        setTimeout(function () {
            setApplicationLanguageDropDownBox("appLanguageToUse", JSON.parse(applicationLanguageDropDownValues));
            document.getElementById("appLanguageToUse").options[applicationTextLanguageSelectedIndex].selected = true;
        }, 450);
    },400);
}
