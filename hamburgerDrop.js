/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hamburgerDrop() 
{
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/* Toggles automatically between desktop and mobile modes */
function handleDeviceSpecificCode() 
{
  if (/Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent)) 
  {
    // Code for mobile devices
    console.log("Mobile device detected");
    var dropdown = document.getElementById('hamburger');
    toolbar.style.display = "inline";
  } 
  else 
  {
    // Code for desktop
    console.log("Desktop detected");
    var toolbar = document.getElementById('weddingToolbar');
    toolbar.style.display = "inline";
  }
}