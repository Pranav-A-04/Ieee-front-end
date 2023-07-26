var sidebar = document.getElementById("sidebar")
sidebar.classList.add('hide');
var bars=document.querySelector("#bars")


function side_open(){
    sidebar.classList.remove("hide");
    bars.classList.add("hide");
}

function side_close(){
    sidebar.classList.add('hide');
    bars.classList.remove("hide");
    //sidebar.classList.add("hide")
}


let map;
function initMap(){
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: {lat: 12.935222, lng:77.535481},
        mapId: "db4ee3a9dfe7654f",
        mapTypeId: "roadmap"
    });
    map.setTilt(45); 
}