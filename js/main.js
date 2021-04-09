$('.owl-carouselll').owlCarousel({
    loop:true,
    autoplay:true,
    autoplaySpeed:3000,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        }
    }
})

$('.owl-carousell').owlCarousel({
    loop:true,
    autoplay:true,
    autoplaySpeed:3000,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// pagination

$(document).ready(function()
 {
   $("#tab").pagination({
   items: 5,
   contents: 'contents',
   previous: 'Previous',
   next: 'Next',
   position: 'bottom',
   });
});

// counterjs

$('.count').counterUp({
    delay: 10,
    time: 1000
});

// faqs

// const items = document.querySelectorAll(".accordion a");

// function removeAccordion(item){
//     if(item.classList.contains("active")){
//         item.classList.remove('active');
//         item.nextElementSibling.classList.remove('active');
//     }
// }

// function toggleAccordion(){
//   items.forEach(removeAccordion)
//   this.classList.add('active');
//   this.nextElementSibling.classList.add('active');
// }
 
// items.forEach(item => item.addEventListener('click', toggleAccordion));
const items = document.querySelectorAll(".accordion a");
 
function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}
 
items.forEach(item => item.addEventListener('click', toggleAccordion));

// filterjs

$(document).ready(function(){

    $('.buttons').click(function(){

        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if(filter == 'all'){
            $('.filters .image').show(400);
        }else{
            $('.filters .image').not('.'+filter).hide(200);
            $('.filters .image').filter('.'+filter).show(400);
        }

    });

    $('.gallery').magnificPopup({

        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }

    });

});

/*Jquery starts here*/
$(document).ready(function(){
    $('select.dropdown').dropdown();
    $('.ui.radio.checkbox').checkbox();
    $('.message .close')
      .on('click', function() {
        $(this)
          .closest('.message')
          .transition('fade')
        ;
    });
});
/*Jquery ends here*/

/*Javascript starts here*/
//Define some variables for hold form fields data
var fname, lname, ftname, gender, password, cpassword, address, postalzip, country;

//Process step one
function processStepOne()
{

	$('#error-msg').removeClass('hidden');   
   //Store first name into a local variable
    fname = $.trim($("#first-name").val());
    //Store last name into a local variable
    lname = $.trim($("#last-name").val());
    //Store father name into a local variable
    ftname = $.trim($("#father-name").val());
    
    //Check empty field on click of next button
    if(fname == "")
    {
       //Show the error message
       $("#error-msg").css({
           'display':'block'
       });
    }
    else if(lname == "")
    {
       //Show the error message
       $("#error-msg").css({
           'display':'block'
       });
    }
    else if(ftname == "")
    {
       //Show the error message
       $("#error-msg").css({
           'display':'block'
       });
    }
    else
    {
        //Show the loader
        $('#loader').css({
            'display':'block'
        });
        setTimeout(function(){
            //hide the loader
            $('#loader').css({
                'display':'none'
            });
            //Remove the user icon from the first step progress bar
            $(".step_one > i").removeClass('user');
            //Add the check icon to the first step progress bar
            $(".step_one > i").addClass('checkmark box').css('color','green');
            //Add caption completed to the first step bar
            $(".step_one .description").html('Completed').css('color','green');
            //Remove the active from the first step progress bar
            $(".step_one").removeClass('active');
            //Remove the disabled class from the second step progress bar
            $(".step_two").removeClass('disabled');
            //Add the active class to the second step progress bar
            $(".step_two").addClass('active');
            //Hide the error message
            $("#error-msg").css({
               'display':'none'
            });
            //Show the second step
            $("#step_two").css({
                'display':'block'
            });
            //Hide the first step
            $("#step_one").css({
                'display':'none'
            });
        },1500);
    }
}

//Back to step one
function backToStepOne()
{
    //Show the loader
    $('#loader').css({
        'display':'block'
    });
    setTimeout(function(){
        //hide the loader
        $('#loader').css({
            'display':'none'
        });
        //Hide the second step
        $("#step_two").css({
            'display':'none'
        });
        //Show the first step
        $("#step_one").css({
            'display':'block'
        });
        //Remove the check icon from the first step progress bar
        $(".step_one > i").removeClass('checkmark box');
        //Add the user icon to the first step progress bar
        $(".step_one > i").addClass('user').css('color','black');
        //Remove caption completed from the first step bar
        $(".step_one .description").html('');
        //Remove the active from the second step progress bar
        $(".step_two").removeClass('active');
        //Add the disabled class from the second step progress bar
        $(".step_two").addClass('disabled');
        //Add the active class to the first step progress bar
        $(".step_one").addClass('active');
        //Hide the error message
        $("#error-msg").css({
           'display':'none'
        });
    },1500);
}

//Process step two
function processStepTwo()
{
	$('#error-msg').removeClass('hidden'); 
    //Store password into a local variable
    password = $.trim($("#password").val());
    //Store confirm password into a local variable
    cpassword = $.trim($("#confirm-password").val());
    
    //Check empty field on click of next button
    if(password == "")
    {
       //Show the error message
       $("#error-msg").css({
           'display':'block'
       });
    }
    else if(cpassword == "")
    {
       //Show the error message
       $("#error-msg").css({
           'display':'block'
       });
    }
    else
    {
        if(password == cpassword)
        {
            //Show the loader
            $('#loader').css({
                'display':'block'
            });
            setTimeout(function(){
                //hide the loader
                $('#loader').css({
                    'display':'none'
                });
                //Remove the user icon from the second step progress bar
                $(".step_two > i").removeClass('shield');
                //Add the check icon to the second step progress bar
                $(".step_two > i").addClass('checkmark box').css('color','green');
                //Add caption completed to the second step progress bar
                $(".step_two .description").html('Completed').css('color','green');
                //Remove the active from the second step progress bar
                $(".step_two").removeClass('active');
                //Remove the disabled class from the third step progress bar
                $(".step_three").removeClass('disabled');
                //Add the active class to the third step progress bar
                $(".step_three").addClass('active');
                //Hide the error message
                $("#error-msg").css({
                   'display':'none'
                });
                //Show the third step
                $("#step_three").css({
                    'display':'block'
                });
                //Hide the second step
                $("#step_two").css({
                    'display':'none'
                });
            },1500);
        }
        else
        {
           //Show the alert instead of an error message
           alert('Sorry! both passwords must have same values.');
           //Note: Instead of alert here you can show an error message just like empty field message
        }
    }
}

//Back to step two
function backToStepTwo()
{
    //Show the loader
    $('#loader').css({
        'display':'block'
    });
    setTimeout(function(){
        //hide the loader
        $('#loader').css({
            'display':'none'
        });
        //Hide the third step
        $("#step_three").css({
            'display':'none'
        });
        //Show the second step
        $("#step_two").css({
            'display':'block'
        });
        //Remove the check icon from the second step progress bar
        $(".step_two > i").removeClass('checkmark box');
        //Add the shield icon to the second step progress bar
        $(".step_two > i").addClass('shield').css('color','black');
        //Remove caption completed from the second step progress bar
        $(".step_two .description").html('');
        //Remove the active from the third step progress bar
        $(".step_three").removeClass('active');
        //Add the disabled class to the third step progress bar
        $(".step_three").addClass('disabled');
        //Add the active class to the second step progress bar
        $(".step_two").addClass('active');
        //Hide the error message
        $("#error-msg").css({
           'display':'none'
        });
    },1500);
}

//Process step three
function processStepThree()
{
	$('#error-msg').removeClass('hidden'); 
    //Store password into a local variable
    address = $.trim($("#address").val());
    //Store postal ZIP into a local variable
    postalzip = $.trim($("#postal-zip").val());
    //Store country into a local variable
    country = $.trim($("#country").val());
    
    //Check empty field on click of next button
    if(address == "")
    {
       //Show the error message
       $("#error-msg").css({
           'display':'block'
       });
    }
    else if(postalzip == "")
    {
       //Show the error message
       $("#error-msg").css({
           'display':'block'
       });
    }
    else if(country == "")
    {
       //Show the error message
       $("#error-msg").css({
           'display':'block'
       });
    }
    else
    {
        //Show the loader
        $('#loader').css({
            'display':'block'
        });
        setTimeout(function(){
            //hide the loader
            $('#loader').css({
                'display':'none'
            });
            //Remove the map icon from the third step progress bar
            $(".step_three > i").removeClass('map');
            //Add the check icon to the third step progress bar
            $(".step_three > i").addClass('checkmark box').css('color','green');
            //Add caption completed to the third step progress bar
            $(".step_three .description").html('Completed').css('color','green');
            //Remove the active from the third step progress bar
            $(".step_three").removeClass('active');
            //Hide the error message
            $("#error-msg").css({
               'display':'none'
            });
            //Show the fourth step
            $("#step_four").css({
                'display':'block'
            });
            //Hide the third step
            $("#step_three").css({
                'display':'none'
            });
        },1500);
    }
}

//Cancel the submission of the form
function submitCancel()
{
    if(confirm('Are you 100% sure want to cancel?'))
    {
       window.location.assign('index.html');
    }
}

//Hide the error message on focus event for input field
function hideErrorMsg(id){
    $("#"+id).fadeOut(500);
}
/*Javascript ends here*/
