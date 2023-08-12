//slide menu
$('.menu-btn').on('click', function () {
    $('.slide-menu').addClass("open");
    $('body').addClass("disable");
  });
  
  $('.close-btn p').on('click', function () {
    $('.slide-menu').removeClass("open");
    $('body').removeClass("disable");
  });

//subscribe modal

function checkForm() {

    var email = document.getElementById('subsEmail');
    var filterE = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if ( !filterE.test(email.value)) {         
        alert('Please provide your valid name and email address');                   
        $("input#subsName").focus();
        return false; 
                   
    }
    else {         
        $("#subsModal").modal('show');  
        $("input#subsName").val("");
        $("input#subsEmail").val("");
        return false;    
    }
}

// AOS

AOS.init({ disable: 'mobile' });