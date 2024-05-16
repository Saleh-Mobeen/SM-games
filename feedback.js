


function gmail(game) {
  warn()
    // Change the email address, subject, and body as per your requirements
    var emailAddress = "smturbo23@gmail.com";
    var subject = `Feedback for ${game}`;
    var body = "";
  
    // Construct mailto link
    var gmailComposeLink = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(emailAddress) + "&su=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
window.open(gmailComposeLink);

  }

  function outlook(game) {
    warn()
    // Change the email address, subject, and body as per your requirements
    var emailAddress = "smturbo23@gmail.com";
    var subject = `Feedback for ${game}`;
    var body = "";
  
    // Construct mailto link
    var mailtoLink = "https://outlook.live.com/owa/?path=/mail/action/compose&to=" + encodeURIComponent(emailAddress) + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  
    // Open the default email client in the browser
    window.open(mailtoLink);
  }

  function yahoo(game) {
    warn()
    // Change the email address, subject, and body as per your requirements
    var emailAddress = "smturbo23@gmail.com";
    var subject = `Feedback for ${game}`;
    var body = "";
  
    // Construct mailto link
    var mailtoLink = "https://compose.mail.yahoo.com/?to=" + encodeURIComponent(emailAddress) + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  
    // Open the default email client in the browser
    window.open(mailtoLink);
  }

  function warn() {
    window.alert("Please note: To ensure that your feedback reaches me accurately, please do not modify the subject or recipient fields when composing your email. Your feedback is important to us, and we appreciate your cooperation. Thank you!")
    
  }