console.log("connected");

// inputs

let wind = document.getElementById("wind");
let cloud = document.getElementById("cloud");
let vis = document.getElementById("vis");
let seaState = document.getElementById("seaState");
let maxTemp = document.getElementById("maxTemp");
let minTemp = document.getElementById("minTemp")

// submit and reset

let submit = document.getElementById("submitBtn")
submit.addEventListener("click", wtWindFunc);
submit.addEventListener("click", wtCloudFunc);
submit.addEventListener("click", wtVisFunc);
submit.addEventListener("click", wtSeaStateFunc);
submit.addEventListener("click", wtMinTempFunc);
submit.addEventListener("click", wtMaxTempFunc);

submit.addEventListener("click", meWindFunc);
submit.addEventListener("click", meCloudFunc);
submit.addEventListener("click", meSeaStateFunc);
submit.addEventListener("click", meMinTempFunc);
submit.addEventListener("click", meMaxTempFunc);
submit.addEventListener("click", meVisFunc);


submit.addEventListener("click", grobCloudFunc);
submit.addEventListener("click", grobWindFunc);
submit.addEventListener("click", grobSeaStateFunc);
submit.addEventListener("click", grobMaxTempFunc);
submit.addEventListener("click", grobMinTempFunc);
submit.addEventListener("click", grobVisFunc);

submit.addEventListener("click", jetWindFunc);
submit.addEventListener("click", jetVisFunc);
submit.addEventListener("click", jetCloudFunc);
submit.addEventListener("click", jetSeaStateFunc);
submit.addEventListener("click", jetMinTempFunc);
submit.addEventListener("click", jetMaxTempFunc);

submit.addEventListener("click", apWindFunc);
submit.addEventListener("click", apCloudFunc);
submit.addEventListener("click", apVisFunc);
submit.addEventListener("click", apSeaSateFunc);
submit.addEventListener("click", apMinTempFunc);
submit.addEventListener("click", apMaxTempFunc);

let reset = document.getElementById("resetBtn")

reset.addEventListener("click", resetFunc);
// wind boxes

let wtWind = document.getElementById("wtWind");
let meWind= document.getElementById("meWind");
let apWind = document.getElementById("apWind");
let grobWind = document.getElementById("grWind");
let jetWind = document.getElementById("jetWind")

// cloud boxes

let wtCloud = document.getElementById("wtCloud");
let meCloud = document.getElementById("meCloud");
let apCloud = document.getElementById("apCloud");
let grobCloud = document.getElementById("grCloud");
let jetCloud = document.getElementById("jetCloud");


// vis

let wtVis = document.getElementById("wtVis");
let meVis = document.getElementById("meVis");
let apVis = document.getElementById("apVis");
let grobVis = document.getElementById("grVis");
let jetVis = document.getElementById("jetVis");

// sea state

let wtSeaState = document.getElementById("wtSeaState")
let meSeaState = document.getElementById("meSeaState");
let apSeaSate = document.getElementById("apSeaState");
let grobSeaState = document.getElementById("grSeaState")
let jetSeaState = document.getElementById("jetSeaState");

// max temp

let wtMax = document.getElementById("wtMax");
let meMax = document.getElementById("meMax");
let apMax = document.getElementById("apMax");
let grobMax = document.getElementById("grMax");
let jetMax = document.getElementById("jetMax");

// min temp

let wtMin = document.getElementById("wtMin");
let meMin = document.getElementById("meMin");
let apMin = document.getElementById("apMin");
let grobMin = document.getElementById("grMin");
let jetMin = document.getElementById("jetMin");

// wildcat functions

function wtWindFunc(){
    if (wind.value >= "50"){
        console.log("RED")
        wtWind.style.backgroundColor= "red";
        wtWind.innerText = "Wind -rotors can not be engaged"
    }
    else {
        console.log("GREEN");
        wtWind.style.backgroundColor = "green"
        wtWind.innerText ="Wind -rotors can be engaged"
    }
}

function wtCloudFunc(){
    if(cloud.value <= "100"){
        console.log("RED CLOUD")
        wtCloud.innerText = "Cloud - master green only"
        wtCloud.style.backgroundColor = "red";
    }
    else if(cloud.value > 100 && cloud.value < 200){
        console.log("IN BETWEEN");
        wtCloud.innerText = "Cloud - master green and green only"
        wtCloud.style.backgroundColor = "orange";
    }
    else{
        console.log("GREEN")
        wtCloud.innerText = "Cloud - master green, green and white";
        wtCloud.style.backgroundColor = "green"
    }

}

function wtVisFunc(){
    if(vis.value < 300){
        wtVis.innerText = "Visibility OOL";
        wtVis.style.backgroundColor = "red"

    }
    else if (vis.value >= 300 && vis.value <500){
        wtVis.innerText = "Visibility - master green only";
        wtVis.style.backgroundColor = "red"
    }
    else if (vis.value >= 500 && vis.value <900){
        wtVis.innerText = "Visibility - master green and green only";
        wtVis.style.backgroundColor = "orange"
    }
    else {
        wtVis.innerText = "Visibility - master green, green and white"
        wtVis.style.backgroundColor = "green"
    }
}

function wtSeaStateFunc(){
    if (seaState.value >= 6){
        wtSeaState.innerText = "Sea state OOL";
        wtSeaState.style.backgroundColor = "red"
    }
    else {
        wtSeaState.innerText = "Sea state in limits";
        wtSeaState.style.backgroundColor = "green"
    }
}

function wtMinTempFunc(){
    if (minTemp.value >= -26 ){
        wtMin.innerText = "Min temp in limits";
        wtMin.style.backgroundColor = "green";
    }
    else {
        wtMin.innerText = "Min temp too low"
    }
}

function wtMaxTempFunc(){
    if (maxTemp.value <50 ){
        wtMax.innerText = "Max temp in limits";
        wtMax.style.backgroundColor= "green"
    }
    else {
        wtMax.innerText = "Max temp OOL";
        wtMax.style.backgroundColor = "red";
    }
}

// merlin

function meWindFunc(){
    if (wind.value <=39){
        meWind.innerText = "Wind in limits";
        meWind.style.backgroundColor = "green";
    }
    else if (wind.value >40 && wind.value < 55){
        meWind.innerText = "Wind OOL for spreading or folding W/O rotor break & attaching/removing rope tethers to main rotor blade";
        meWind.style.backgroundColor = "orange"
    }
    else {
        meWind.innerText = "Wind OOL - must not be started or shut down"
        meWind.style.backgroundColor = "red"
    }
}

function meCloudFunc(){
    if (cloud.value <200){
        meCloud.innerText = "< 200ft";
        meCloud.style.backgroundColor = "red";
    }
    else {
        meCloud.style.backgroundColor = "green";
    }
}

function meVisFunc(){
    meVis.style.backgroundColor = "grey";
}

function meSeaStateFunc(){
    if (seaState.value > 6){
        meSeaState.innerText = "Sea state OOL";
        meSeaState.style.backgroundColor = "red";
    }
    else {
        meSeaState.innerText = "Sea state in limits";
        meSeaState.style.backgroundColor = "green";
    }
}

function meMinTempFunc(){
    if (minTemp.value < -20){
        meMin.innerText = "Min temp too low";
        meMin.style.backgroundColor = "red";
    }
    else {
        meMin.innerText = "Min temp in limits";
        meMin.style.backgroundColor = "green"
    }
}

function meMaxTempFunc(){
    if (maxTemp.value >50){
        meMax.innerText = "Max temp too high";
        meMax.style.backgroundColor = "red";
    }
    else {
        meMax.innerText = "Max temp in limits";
        meMax.style.backgroundColor = "green";
    }
}

// apache

function apWindFunc(){
    if (wind.value > 35){
        apWind.innerText = "Wind OOL for rotor start up within 30 deg of nose";
        apWind.style.backgroundColor = "red";
    }
    else if (wind.value <= 35 && wind.value > 25){
        apWind.innerText = "Wind OOL for rotor start up - except within 30 deg of nose";
        apWind.style.backgroundColor = "orange";
    }
    else {
        apWind.innerText = "Wind in limits";
        apWind.style.backgroundColor = "green";
    }
}

function apCloudFunc(){
    if(cloud.value < 700){
        apCloud.innerText = "Cloud OOL";
        apCloud.style.backgroundColor = "red";
    }
    else {
        apCloud.innerText = "Cloud in limits";
        apCloud.style.backgroundColor = "green"
    }
}

function apVisFunc(){
    if (vis.value < 1500){
        apVis.innerText = "Visibility OOL for day flying & night flying";
        apVis.style.backgroundColor = "red";
    }
    else if (vis.value >=1500 && vis.value < 3000){
        apVis.innerText = "Visibility OOL for night flying";
        apVis.style.backgroundColor = "orange";
    }
    else {
        apVis.innerText = "Visibility in limits";
        apVis.style.backgroundColor = "green";
    }
}

function apMinTempFunc(){
    if(minTemp.value <= -32){
        apMin.innerText = "Min temp OOL - freezing engine oil";
        apMin.style.backgroundColor = "red";
    }
    else if (minTemp.value > -32 && minTemp.value < 3){
        apMin.innerText = "Anti icing used when vis is < 1000m in rain, fog or cloud or < 3000m in snow";
        apMin.style.backgroundColor = "orange";
    }
    else {
        apMin.innerText = "Min temp in limits";
        apMin.style.backgroundColor = "green";
    }
}

function apMaxTempFunc(){
    apMax.style.backgroundColor = "grey";
}

function apSeaSateFunc(){
    if (seaState.value < 6){
        apSeaSate.style.backgroundColor = "green"
        apSeaSate.innerText = "Sea state in limits";
    }
    else {
        apSeaSate.style.backgroundColor = "red";
        apSeaSate.innerText = "Sea state OOL";
    }
}

// grob

function grobCloudFunc(){
    if (cloud.value <200){
        grobCloud.innerText = "Cloud - master green & green only";
        grobCloud.style.backgroundColor = "red";
    }
    else if (cloud.value >=200 && cloud.value <300){
        grobCloud.innerText = "Cloud - master green, green & white only";
        grobCloud.style.backgroundColor = "orange";
    }
    else  if (cloud.value >=300){
        grobCloud.innerText = "Cloud - master green, green, white and amber";
        grobCloud.style.backgroundColor = "green";
    }
}

function grobWindFunc(){
    if (wind.value > 35){
        grobWind.innerText = "Wind OOL";
        grobWind.style.backgroundColor = "red";
    }
    else {
        grobWind.innerText = "Wind in limits";
        grobWind.style.backgroundColor = "green";
    }
}

function grobSeaStateFunc(){
    if (seaState.value){
        grobSeaState.innerText = "N/A"
        grobSeaState.style.backgroundColor = "grey";
    }
}

function grobMaxTempFunc(){
    if (maxTemp.value > 38){
        grobMax.innerText = "Max temp too high";
        grobMax.style.backgroundColor = "red";
    }
    else  {
        grobMax.innerText = "Max temp in limits"
        grobMax.style.backgroundColor = "green";
    }
}

function grobMinTempFunc(){
    if (minTemp.value <0){
        grobMin.style.backgroundColor = "red";
        grobMin.innerText = "Not Cleared to fly in icing conditions due to lack of airframe anti/de-icing equipment"
    }
    else{
        grobMin.style.backgroundColor = "green"
        grobMin.innerText = "Min temp in limits"
    }
}

function grobVisFunc(){
    if (vis.value < 500){
        grobVis.innerText = "OOL for take off while vis is < 500";
        grobVis.style.backgroundColor = "red";
    } else if (vis.value >=500 && vis.value <1500){
        grobVis.innerText = "Visibility - clear for take off but OOL for transit until vis exceeds 1500m";
        grobVis.style.backgroundColor = "orange";
    }
    else {
        grobVis.innerText = "Visibility in limits";
        grobVis.style.backgroundColor = "green";
    }
}

// jet

function jetWindFunc(){
    if (wind.value >= 40){
        jetWind.innerText = "Wind OOL";
        jetWind.style.backgroundColor = "red";
    }
    else if (wind.value <40 ){
        jetWind.innerText = "Wind in limits";
        jetWind.style.backgroundColor = "green";
    }
}

function jetVisFunc(){
    if (vis.value < 3000){
        jetVis.innerText = "Vis OOL";
        jetVis.style.backgroundColor = "red";
    }
    else if (vis.value>=3000 && vis.value < 8000){
        jetVis.innerText = "Vis marginal";
        jetVis.style.backgroundColor = "orange";
    }
    else if (vis.value >=8000){
        jetVis.innerText = "Vis in limits";
        jetVis.style.backgroundColor = "green";
    }
}

function jetCloudFunc(){
    if (cloud.value < 700){
        jetCloud.innerText = "Cloud OOL";
        jetCloud.style.backgroundColor = "red";
    }
    else if (cloud.value >= 700 && cloud.value < 3000){
        jetCloud.innerText = "Cloud marginal";
        jetCloud.style.backgroundColor = "orange";
    }
    else if (cloud.value >= 3000){
        jetCloud.innerText = "Cloud in limits";
        jetCloud.style.backgroundColor = "green";
    }
}

function jetSeaStateFunc(){
    if (seaState.value >=6){
        jetSeaState.innerText = "Sea state OOL";
        jetSeaState.style.backgroundColor = "red";
    }
    else {
        jetSeaState.innerText = "Sea state in limits";
        jetSeaState.style.backgroundColor = "green";
    }
}

function jetMinTempFunc(){
    jetMin.style.backgroundColor = "grey";
}

function jetMaxTempFunc(){
    jetMax.style.backgroundColor = "grey";
}




let container = document.querySelector(".container")

function resetFunc(){
    wind.value = "";
    cloud.value = "";
    vis.value = "";
    seaState.value = "";
    minTemp.value = "";
    maxTemp.value = "";
    container.style.backgroundColor = "white";

}