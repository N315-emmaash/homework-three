
export function changePage(pageID, subPage) {
    // console.log("sub " + subPageID);

    if(subPage == undefined){

        $.get(`pages/${pageID}/${pageID}.html`, function(data){
            // console.log(data);
            $("#app").html(data);
        }).fail((error) =>{
            if(error.status == "404"){
                // alert("Can't do this dumbass")
            }
            console.log("error", error.status);
        });
       

    } else{
        $.get(`pages/${pageID}/${subPage}.html`, function(data){
            // console.log(data);
            $("#app").html(data);
        }).fail((error) =>{
            if(error.status == "404"){
                // alert("Can't do this dumbass")
            }
            console.log("error", error.status);
        });
       
    }
    

}