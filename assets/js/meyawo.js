/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// EmailJS Initialization
emailjs.init("A6lheAMoMOGn2V6IM"); 

// Form submission event
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  

    // Ambil nilai input dari form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Kirim data ke EmailJS
    emailjs.send("admin123", "template_1xj0tm5", {
        from_name: name,
        from_email: email,
        message: message
    }).then(function(response) {
        // Jika pengiriman berhasil
        console.log("Success", response);
        alert("Message sent successfully!");
    }, function(error) {
        // Jika pengiriman gagal
        console.log("Failed", error);
        alert("Message failed to send.");
    });
});

