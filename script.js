function Clear(){
    document.getElementById('display').value = "0"
}

function Back() {
    var ev = document.getElementById('display');
    if  (ev.value == '0'){
        return;
    }else{
    ev.value = ev.value.slice(0,-1);
    }
 }

var tempval = "";
function Solve(val) {
    var v = document.getElementById('display');
    if  (v.value == '0'){
        v.value = val;
    }else{
        v.value += val;
    } 
    
}

function Result()
{
    var num1 = document.getElementById('display').value;
    var num2 = eval(num1);

    // logic for eval function is written in python


    document.getElementById('display').value = num2;
}