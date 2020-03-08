$(document).ready(function(){
    $(".logo").click(function(){
        alert("logo is clicked");
    })

    $(".main-menu").click(function(e){
       
        const elem = $(e.target)
        if (elem.hasClass("normal") == true) {
            $(e.target).removeClass("normal").addClass("red");
        }
        else {
            $(e.target).removeClass("red").addClass("normal");
        }
        
       
        
    })
})