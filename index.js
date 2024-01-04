// document.getElementById("count-el").innerText = 3


let lapsCount=document.getElementById("count-el")

let current=document.getElementById("save-el")

let count =0;

function increment(){
    count = count +1
    lapsCount.innerText = count
    // document.getElementById("count-el").innerText = lapsCount
}

let DecrCount = document.getElementById("count-el")


function decrement(){
    let decCount = count
    if(decCount==0){
        reset();
        
        
    }else{
        count = count-1
        decCount = decCount-1
        DecrCount.innerText = decCount
    }
    
    // document.getElementById("count-el").innerText = lapsCount
}

let resetNum = document.getElementById("count-el")

function reset(){
    count = 0;
    resetNum.innerText = count
}


console.log(current);

function save(){
    let currentNew = count+" - "
    current.textContent += currentNew 

}
