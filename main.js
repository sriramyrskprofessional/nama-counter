let countEl=document.getElementById("count-el");
let count=0;
let progressEl=document.getElementById("progress-el");

function increment(){
    count+=1;
    countEl.innerHTML=count;
}
function save(){
    progressEl.innerHTML+=" -"+count+" ";
}
function reset(){
    count=0;
    countEl.innerHTML=count;
}
