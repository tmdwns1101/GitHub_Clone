$(document).ready(function(){
    $(".logo").click(function(){
        alert("logo is clicked");
    })

    $(".main-menu").click(function(e){
       
        const elem = $(e.target)
        if (elem.hasClass("nomal") == true) {
            $(e.target).removeClass("nomal").addClass("red");
        }
        else {
            $(e.target).removeClass("red").addClass("nomal");
        }
        
       
        
    })
})