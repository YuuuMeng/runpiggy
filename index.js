var timer = null;
function surprise() {
    random();
    clearInterval(timer);
    timer = setInterval(function () {
        random();
    }, 30000)
}

function logoout() {
    window.location.href = "http://www.google.com";
}

function random() {
    var i = parseInt(Math.random()*3+1);
    var s = document.getElementsByClassName("section5")[0];
    var s1 = document.getElementsByClassName("section6")[0];
    var s2 = document.getElementsByClassName("section7")[0];
    s.style.display = "none";
    s1.style.display = "none";
    s2.style.display = "none";
    if (i == 1) {
        s.style.display = "block";
    } else if (i == 2) {
        s1.style.display = "block";
    } else {
        s2.style.display = "block";
    }
}

function experience() {
    clearInterval(timer);
    var s = document.getElementsByClassName("section5")[0];
    var s1 = document.getElementsByClassName("section6")[0];
    var s2 = document.getElementsByClassName("section7")[0];
    s.style.display = "block";
    s1.style.display = "none";
    s2.style.display = "none";
}

function education() {
    clearInterval(timer);
    var s = document.getElementsByClassName("section5")[0];
    var s1 = document.getElementsByClassName("section6")[0];
    var s2 = document.getElementsByClassName("section7")[0];
    s.style.display = "none";
    s1.style.display = "block";
    s2.style.display = "none";
}

function project() {
    clearInterval(timer);
    var s = document.getElementsByClassName("section5")[0];
    var s1 = document.getElementsByClassName("section6")[0];
    var s2 = document.getElementsByClassName("section7")[0];
    s.style.display = "none";
    s1.style.display = "none";
    s2.style.display = "block";
}

function clearshow() {
    clearInterval(timer);
    var s = document.getElementsByClassName("section5")[0];
    var s1 = document.getElementsByClassName("section6")[0];
    var s2 = document.getElementsByClassName("section7")[0];
    s.style.display = "none";
    s1.style.display = "none";
    s2.style.display = "none";
}

function display1(){
    document.getElementById("box1").style.display="block";
}
function disappear1(){
    document.getElementById("box1").style.display="none";
}

function display2(){
    document.getElementById("box2").style.display="block";
}
function disappear2(){
    document.getElementById("box2").style.display="none";
}

function display3(){
    document.getElementById("box3").style.display="block";
}
function disappear3(){
    document.getElementById("box3").style.display="none";
}

var request = new XMLHttpRequest();
request.open("get","data.json");
request.send(null);
request.onload = function (ev) {
    if (request.status == 200) {
        var json = JSON.parse(request.responseText);
        document.getElementById("keydiv").innerHTML = json.key;
    }
};


var section3 = new XMLHttpRequest();
section3.open("get","section3.json");
section3.send(null);
section3.onload = function (ev) {
    if (section3.status == 200) {
        var json = JSON.parse(section3.responseText);
        document.getElementsByClassName("sub6")[0].children[0]
            .innerHTML=json.section3[0].title;
        document.getElementsByClassName("sub6")[0].children[1]
            .innerHTML=json.section3[0].value;
        document.getElementsByClassName("sub7")[0].children[0]
            .innerHTML=json.section3[1].title;
        document.getElementsByClassName("sub7")[0].children[1]
            .innerHTML=json.section3[1].value;
        document.getElementsByClassName("sub8")[0].children[0]
            .innerHTML=json.section3[2].title;
        document.getElementsByClassName("sub8")[0].children[1]
            .innerHTML=json.section3[2].value;
    }
};
