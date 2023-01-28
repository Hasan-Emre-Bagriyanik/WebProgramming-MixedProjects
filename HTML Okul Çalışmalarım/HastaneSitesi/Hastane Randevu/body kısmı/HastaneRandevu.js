$(function(){


    var tab = $('.tab a'),
    content = $('.tabContent');

    // ilk taba aktif sınıfını ata 
    tab.filter(':first').addClass('aktif');

    //ilk içerik haric diğerlerini gizle
    content.filter(':not(:first)').hide();

    //taba tıklandığında
    tab.click(function(){
    var indis = $(this).index();
    tab.removeClass('aktif').eq(indis).addClass('aktif');
    content.hide().eq(indis).fadeIn(500)
    return false;

    })




     // Form validation
     $("input").blur(function () {
        // User Name
        if ($(this).hasClass("hastane")) {
          if ($(this).val().length == "") {
            $(this)
              .siblings("span.error")
              .text("Lütfen Verilen Hastane Alanlarından Birini Seçiniz...")
              .fadeIn()
              .parent(".form-control")
              .addClass("hasError");
            hastaneError = true;
          } 
          } else {
            $(this)
              .siblings(".error")
              .text("")
              .fadeOut()
              .parent(".form-group")
              .removeClass("hasError");
            hastaneError = false;
          
        }
        // Email
        if ($(this).hasClass("alan")) {
          if ($(this).val().length == "") {
            $(this)
              .siblings("span.error")
              .text("Lütfen Uzmanlık Alanlardan Birini Seçiniz...")
              .fadeIn()
              .parent(".form-control")
              .addClass("hasError");
            alanError = true;
          } else {
            $(this)
              .siblings(".error")
              .text("")
              .fadeOut()
              .parent(".form-group")
              .removeClass("hasError");
            alanError = false;
          }
        }
})


 // Form submit
 $("form.from1").submit(function (event) {
    event.preventDefault();

        if (
        hastaneError == true ||
        alanError == true 
        
        ) {
        $(".hastane,.alan").blur();
        } 
    });

})
