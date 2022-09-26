
import *  as MODEL from "./model.js";
// import {
//     changePage
// } from "./model.js";
function route(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    let pageIDArray = pageID.split("/");

    pageID = pageIDArray[0];
    let subPageID = pageIDArray[1];
    // console.log("sub " + subPageID);
   


    if(pageID == ""){
        MODEL.changePage("home");
    } else{
        if(pageID == subPageID){
            MODEL.changePage(pageID);
        } else {
            MODEL.changePage(pageID, subPageID);
        }
        
    }
}

function initListeners() {
    // $("nav a ").click((e) => {
    
    //     console.log ("click");
    // });    

}

function initApp() {

    $(window).on("hashchange", route);
    route();
}
 
$(document).ready(function () {
    initApp();
initListeners();
});

// as soon as all the html has been read this document. ready starts and knows about all the elements on the screen ... good place to start a loader
// reason to put this in ... allows page to fire in the correct order
