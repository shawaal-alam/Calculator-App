function addvalue(inputvalue){ 
    var input = document.getElementById("input")
    console.log(input)
    input.value = input.value + inputvalue
    // input.value += inputvalue
}
function  calc(){
 
    var input = document.getElementById("input")
    console.log(input.value)
     var ans = eval(input.value) 
     console.log(ans)
     input.value = ans
}
function allclear(){
        var input = document.getElementById("input")
       console.log(input.value)
       input.value = ""
}
function deleteone(){
    var input = document.getElementById("input")
    console.log(input.value)
    input.value = input.value.slice(0,-1)
}
