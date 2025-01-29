document.getElementById('btn').onclick = function(){
    var n =123.45
    console.log(n.toFixed(120))
}

document.getElementById('btn1').onclick = function(){
    // console.log('syntax error'
}

document.getElementById('btn2').onclick = function(){
    console.logg('msg')
}

document.getElementById('btn3').onclick = function(){
    console.log(x)
}

function add(x,y){
    if(x&&y)
        return x + y
    else{
        throw 'invalid value'
        // var err = new Error('invalid value')
        // throw err
    }
}

try{
console.log('start')
add()
console.log('done')
}
catch(err){
    console.log()
}

console.log('step2')