$(document).ready(function () {
    new TypeIt('#typing', {
        strings: ["Web Developer based in Toronto.",/*"I'm always looking to create fun and meaningful content.",*/
            "Background in Data and Reporting Analysis.",'I live by the principle of "magis".',
            "Passionate about: personal finance, mechanical watches, food.","Let me know what you think!","Web developer based in Toronto."
        ],
        speed: 80,
        breakLines: false,
        autoStart: true
    });


    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    // $(document).on('click',"#sidebarCollapse",function () {
    //     console.log("sidebar click");
    //     // open or close navbar
    //     $('#sidebar').toggleClass('active');
    //     // close dropdowns
    //     $('.collapse.in').toggleClass('in');
    //     // and also adjust aria-expanded attributes we use for the open/closed arrows
    //     // in our CSS
    //     $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    // });

    (function($) {
        "use strict";
        // manual carousel controls
        $('.next').click(function(){ $('.carousel').carousel('next');return false; });
        $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
        
    })(jQuery);

    //FIREBASE

    var database = firebase.database().ref();

    //record form submissions
    $(document).on("click","#form-submit-button", function () {
        event.preventDefault();

        console.log("click");

        var newMessage = {
            name: $("#form-name").val(),
            email: $("#form-email").val(),
            message: $("#form-message").val()
        }

        if (newMessage.name && newMessage.email && newMessage.message) {
            database.push(newMessage);
            $(".form-control").val("");
            $("#submit-message-modal").modal('show');
        } else {
            alert("Please complete all fields before hitting 'submit'.")
        }
    })

   

});