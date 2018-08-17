$(document).ready(function () {
    new TypeIt('#typing', {
        strings: ["Web Developer based in Toronto.","I'm always looking to create fun and meaningful content.",
            "Currently a Data and Reporting Analyst for a Cosmetics company.",
            "I’m passionate about personal finance...", "mechanical watches..",
            "UFC/mixed martial arts", "..and food.","Feel free to browse my page and let me know what you think on the form below."
        ],
        speed: 70,
        breakLines: false,
        autoStart: true
    });


    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        // open or close navbar
        $('#sidebar').toggleClass('active');
        // close dropdowns
        $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    //FIREBASE

    firebase.initializeApp(config);
    var database = firebase.database().ref();

    //record form submissions
    $("#form-submit-button").on("click", function () {
        event.preventDefault();

        var newMessage = {
            name: $("#form-name").val(),
            email: $("#form-email").val(),
            message: $("#form-message").val()
        }

        if (newMessage.name && newMessage.email && newMessage.message) {
            database.push(newMessage);
            $(".form-control").val("");
            alert("Thanks for the message! I'll look into it and get back to you. - D")
        } else {
            alert("Please complete all fields before hitting 'submit'.")
        }
    })

    (function($) {
        "use strict";
    
        // manual carousel controls
        $('.next').click(function(){ $('.carousel').carousel('next');return false; });
        $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
        
    })(jQuery);

});