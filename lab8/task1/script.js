var paragraph = document.getElementById("paragraph");
        
var buttons_fontfamily = document.querySelectorAll(".buttons-fontFamily button");
var main_section = document.querySelectorAll(".menu-section");

main_section.forEach((section)=>{
    console.log(section.children[1].className);

    var buttons = section.children[1].children;

//   console.log(buttons);

    for (let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener("click",function(){
            if(section.children[1].className == "buttons-fontFamily"){
                paragraph.style.fontFamily = buttons[i].innerHTML;
            }else if(section.children[1].className == "buttons-textAlign"){
                paragraph.style.textAlign = buttons[i].innerHTML;
            }else if(section.children[1].className == "buttons-textDecoration"){
                paragraph.style.textDecoration = buttons[i].innerHTML;
            }else if(section.children[1].className == "buttons-textTransform"){
                paragraph.style.textTransform = buttons[i].innerHTML;
            }else if(section.children[1].className == "buttons-lineHeight"){
                paragraph.style.lineHeight = buttons[i].innerHTML;
            }else if(section.children[1].className == "buttons-textIndent"){
                paragraph.style.textIndent = buttons[i].innerHTML;
            }
            else if(section.children[1].className == "buttons-letterSpacing"){
                paragraph.style.letterSpacing = buttons[i].innerHTML;
            }
    })
  
    }
    
})

// var buttons_textAligns = document.querySelectorAll(".buttons-textAlign button");

// for (let i = 0; i < buttons_fontfamily.length; i++) {
//     buttons_fontfamily[i].addEventListener("click",function(){
//         paragraph.style.fontFamily = buttons_fontfamily[i].innerHTML;
//     })
// }


// for (var i = 0; i < buttons_textAligns.length; i++) {

//     console.log(buttons_textAligns[i]);
   
//     buttons_textAligns[i].addEventListener("click",function(){
//      console.log("sdas");
     
//      paragraph.style.textAlign = this.innerHTML;
//  })
 
    
// }



// for (var i = 0; i < buttons_textAligns.length; i++) {

//     console.log(buttons_textAligns[i]);
   
//     buttons_textAligns[i].addEventListener("click",function(){
     
//      paragraph.style.textAlign = this.innerHTML;
//  })
 
    
// }



    