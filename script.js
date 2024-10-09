/* About Section Code */
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(event, tabname)
{
    /*Removing colour line under the Skills or Education or Experience */
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    /*Removing content under the Skills or Education or Experience */
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }

    /*Adding under line and related content to web page*/
    event.currentTarget.classList.add("active-link"); 
    // Find the tab content by ID and add 'active-tab' class to it
    var tab = document.getElementById(tabname);
    if (tab) {
        tab.classList.add("active-tab");
    } else {
        console.error("No content found with ID: " + tabname);
    }
}

 /* This section about menu bar for smaller screens like mobiles */

 function openmenu()
 {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right='0';
 }

 function closemenu()
 {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right='-200px';
 }

 