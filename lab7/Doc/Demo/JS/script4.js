// document.getElementsByClassName('parent')[0].onclick = function(){
//     console.log('parent')
// }
// document.getElementsByClassName('midChild')[0].onclick = function(){
//     console.log('midChild')
//     event.stopPropagation()
// }
// document.getElementsByClassName('lastChild')[0].onclick = function(event){
//     console.log('lastChild')
    
// }
// document.getElementsByClassName('parent')[0].addEventListener('click',function(){
//     console.log('parent')
// })
// document.getElementsByClassName('midChild')[0].addEventListener('click',function(){
//     console.log('midChild')
// },true)
// document.getElementsByClassName('lastChild')[0].addEventListener('click',function(){
//     console.log('lastChild')
// })
// document.getElementsByClassName('lastChild2')[0].addEventListener('click',function(){
//     console.log('lastChild2')
// })

// Event Object
//create instance from event
var myEvent = new Event('seen')
//add event on obj
var obj = document.getElementsByTagName('h1')[0]

obj.addEventListener('seen',function(event){
    console.log(event)
    alert('custom event')
})
var x =50
setTimeout(function(){
    if(x >=10){
        //Fire event
        obj.dispatchEvent(myEvent)
    }
},2000)




