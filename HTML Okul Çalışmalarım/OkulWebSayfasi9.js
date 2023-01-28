function Validate()
{

    var isim= document.getElementById("name").value;
    var email= document.getElementById("mail").value;
    var password= document.getElementById("pass").value;
    var passwordConfirm= document.getElementById("passConfirm").value;
    var post= document.getElementById("postCode").value;
    var SehirSeciniz= document.getElementById("cityOption").value;
    /*
    if (isim==""){
        document.getElementById('demo1').innerHTML ="Lütfen isim alanını doldurunuz";

    }

    else if (email==""){
        document.getElementById('demo2').innerHTML ="Lütfen email alanını doldurunuz";
    }

    else if (password==""  && password < 5){
        document.getElementById('demo3').innerHTML ="Lütfen şifre alanını doldurunuz";
    }

    else if(passwordConfirm == "" || passwordConfirm < 5){
        document.getElementById('demo4').innerHTML ="Lütfen şifre tekrarı alanını doldurunuz";
    }

    else if(post=="" || post < 5){
        document.getElementById('demo5').innerHTML ="Lütfen posta kodu alanını doldurunuz";
    }
    else if(cityO=="" || post < 5){
        document.getElementById('demo6').innerHTML ="Lütfen bir alanını seçiniz";
    }
    else{
        document.getElementById('all').innerHTML= "İşleminiz başarı ile gerçekleştirildi"; 
    }

*/
    var isimE;
    var emailE;
    var passE;
    var passConfE;
    var postCodeE;
    var cityOptionE;

    if(isim==""){
        document.getElementById('demo1').innerHTML ="Lütfen isim alanını doldurunuz...";
        isimE = true;
    }
    else{
        isimE = false;
    }

    if(email.value.length == "" || !email.value.includes("@") || !email.value.includes(".com"))
    {
        document.getElementById("demo2").innerHTML = "Lütfen e-mail adresinizi doğru giriniz...";
        emailE = true;
    }
    else
    {
        emailE = false;
    }
    
    if(password.value.length == 0 || password.value.length < 5)
    {
        document.getElementById("demo3").innerHTML = "Lütfen boş ya da en az 5 karakterden az şifre olmamalıdır...";
        passE = true;
    }
    else
    {
        passE = false;
    }
    

    if(passwordConfirm.value != password.value)
    {
        document.getElementById("demo4").innerHTML = "Lütfen ilk şifre ile aynı olmalıdır...";
        passConfE = true;
    }
    else
    {
        passConfE = false;
    }

    if(post.value.length != 5)
    {
        document.getElementById("demo5").innerHTML = "Posta kodu en az 5 karakter olmalıdır...";
        postCodeE = true;
    }
    else
    {
        postCodeE = false;
    }

    if(form.SehirSeciniz.value == 0)
    {
        document.getElementById("demo6").innerHTML = "Lütfen Bir Şehir Seçiniz...";
        cityOptionE = true;
    }
    else
    {
        cityOptionE = false;
    }

    if(emailE == false && passE == false && passConfE == false &&  postCodeE == false && cityOptionE == false)
        {
            alert("Tebrikler...\nİşleminiz başarı ile gerçekleşmiştir...")
        }










        

    }
