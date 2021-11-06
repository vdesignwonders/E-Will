$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if($("#carouselButton").children("span").hasClass("fa-pause")){
            $("#mycarousel").carousel("pause");
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");                    
        }
        else if($("#carouselButton").children("span").hasClass("fa-play")){
            $("#mycarousel").carousel("cycle");
            $("#carouselButton").children("span").removeClass("fa-play");
            $("#carouselButton").children("span").addClass("fa-pause");                    
        }

    });

    $("#reserveform1").click(function(){
        $("#reserveform").modal('toggle');
    });

    $("#LoginButton").click(function(){
        $("#loginModal").modal('toggle');
    });
    $("#reserveClose").click(function(){
        $("#reserveform").modal('hide');
    });
    $("#loginClose").click(function(){
        $("#loginModal").modal('hide');
    });

});