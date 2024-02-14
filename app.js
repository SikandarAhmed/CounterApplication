let count = 0;

document.getElementById("decrease_button").onclick = function(){
    count-=1;
    document.getElementById("count_label").innerHTML = count;
}

document.getElementById("reset_button").onclick = function(){
    count=0;
    document.getElementById("count_label").innerHTML = count;
}

document.getElementById("increase_button").onclick = function(){
    count+=1;
    document.getElementById("count_label").innerHTML = count;

}