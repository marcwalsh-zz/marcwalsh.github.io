var aboutnav = document.querySelector('#aboutnav');
var ourwork = document.querySelector('#ourwork');
var services = document.querySelector('#services');
var theteam = document.querySelector('#theteam');
var contact = document.querySelector('#contact');
var reset = document.querySelector('#reset');
    
document.querySelector('#aboutnav').addEventListener('click', function() {
    ourwork.setAttribute('src', '/images/about2.png');
    services.setAttribute('src', '/images/about3.png');
    theteam.setAttribute('src', '/images/about4.png');
    contact.setAttribute('src', '/images/about5.png');
    
});