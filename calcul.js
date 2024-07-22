let output = document.getElementById("ecrn");


function display(num){
    output.value += num ; 
}

function Clear(){
    output.value = "";
}

function Delete(){
    output.value = output.value.slice(0,-1);
}

function calc(){
    try{
        output.value = eval(output.value)
    }
    catch(err){
        output.value = "error"
    }
}





function pi(){
    output.value += 3.14159265359
}

function sin(){
    output.value = Math.sin(output.value)
}

function cos(){
    output.value = Math.cos(output.value)
}

function sqrt(){
    output.value = Math.sqrt(output.value,2)
}

function tan(){
    output.value = Math.tan(output.value)
}

// fonction puisance 
function pow(){
    var y = 1 ;
    for( var i = 1 ; i<= 7 ; i++){
        y = output.value*y ; 
    }
    output.value = y ;
    
}
function log(){
    output.value = Math.log(output.value)
}

// fonction factorielle 
function fact(){
    var i , num , f ; 
    f=1 ; 
    num = output.value ; 
    for (i=1 ; i <= num ; i++ ){
        f=f*i;
    }
    output.value = f ;
}
