/**Events */
document.getElementsByTagName('h1')[0].onclick = function(){
    alert('H1 Events Demo')
}

document.getElementsByTagName('h1')[0].onclick = function(){
    console.log('test click on h1')
}

/**
 * ErrorXXXXXXXXXXXXXXXXXXXXXX
 * overwrite
 * run alert & console.logXXXXXXXXXXXXXX
 */
//[f1,f2,f3]
document.getElementsByTagName('h1')[0].addEventListener('click',function(){
    alert('call back fun1')
})
document.getElementsByTagName('h1')[0].addEventListener('click',function(){
    alert('call back fun2')
})
document.getElementsByTagName('h1')[0].addEventListener('click',function(){
    alert('call back fun3')
})
document.getElementsByTagName('h1')[0].addEventListener('click',callBackTest)
document.getElementsByTagName('h1')[0].addEventListener('mouseover',callBackTest)
document.getElementsByTagName('p')[0].addEventListener('click',callBackTest)


function callBackTest(){
    alert('hi')
    return 1
}


var obj={
    usrnm:"ahmed",
    age:20
}

obj.usrnm ="mohamed"