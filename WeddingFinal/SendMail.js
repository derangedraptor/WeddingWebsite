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