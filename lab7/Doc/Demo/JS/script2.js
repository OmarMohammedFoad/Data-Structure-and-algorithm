/**
 * Cookies
 * Events
 * DOM
 */

// document.cookie="usrname=ahmed"
// var date = new Date()
// date.setMonth(date.getMonth()+1)
// document.cookie = "usrage=20;expires="+date.toUTCString()
document.getElementById('btn').onclick = function(){
    var date = new Date()
    date.setMonth(date.getMonth()+1)
    var usrname = document.getElementById('usrnm').value
    var usrage = document.getElementById('usrage').value
    var usrMail = document.getElementById('usrmail').value
    // document.cookie="usrname="+usrname+";expires="+date.toUTCString()
    // document.cookie="usrage="+usrage+";expires="+date.toUTCString()
    // document.cookie="usrmail="+usrMail
    setCookie("usrname",usrname,date)
    setCookie('usrmail',usrMail)
    setCookie('usrage',usrage,date)
}

function setCookie(key,value,expiryDate){
    if(expiryDate){
        document.cookie=key+"="+value+";expires="+expiryDate.toUTCString()
    }
    else{
        document.cookie=key+"="+value
    }
}

function getAllcookies(){

}

function deleteCookie(key){
    var date = new Date()
    date.setMonth(date.getMonth()-1)
    document.cookie='usrage=;expires='+date.toUTCString()
}

function hasCookie(key){
    //return boolean
}

function clearCookie(){
    
}