let dd = document.querySelector(".Up");

window.onscroll = function(){
    this.scrollY >= 500?dd.classList.add("show"):dd.classList.remove("show");
};

dd.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

window.addEventListener('scroll' , reveal );

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(let i = 0 ; i<reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
window.addEventListener('scroll' , reveall );

function reveall(){
    var revealls = document.querySelectorAll('.reveall');

    for(let i = 0 ; i<revealls.length; i++){
        var windowheight = window.innerHeight;
        var revealltop = revealls[i].getBoundingClientRect().top;
        var reveallpoint = -550;

        if(revealltop < windowheight - reveallpoint){
            revealls[i].classList.add('active');
        }
        else{
            revealls[i].classList.remove('active');
        }
    }
}



var expanded = false;

function showCheckboxes(){
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}

var expandedd = false;

function showCheckboxes1(){
    var checkboxes1 = document.getElementById("checkboxes1");
    if (!expandedd) {
        checkboxes1.style.display = "block";
        expandedd = true;
    } else {
        checkboxes1.style.display = "none";
        expandedd = false;
    }
}

function clearAll(){
    let elemcheck = document.getElementsByName('check');
    let elemchecklenth = elemcheck.length;
    for(var x = 0 ;x < elemchecklenth ; x++){
        elemcheck[x].checked = false;
    }
}

// var xx = false;
// function done(){
//     if(!xx){

//     }
// }