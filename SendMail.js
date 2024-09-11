function sendMail()
{
    let parms = {
        name : document.getElementById("name").value,
        attending: document.querySelector('input[name="attending"]:checked').value,
        meal: document.querySelector('input[name="meal"]:checked').value,
        dietRestrictions : document.getElementById("dietRestrictions").value,
    }

    emailjs.send('service_jamesNCammy', 'template_tffkptk', 
    parms).then(alert("RSVP Sent!"))
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hamburgerDrop() {
  var x = document.getElementById("myLinks");

  if (x.style.right === "-100%" || x.style.right === "") {
    x.style.right = "0%"; // Slide in from the right
  } else {
    x.style.right = "-100%"; // Slide out of view to the right
  }
}