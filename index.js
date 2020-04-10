const mySiema = new Siema();
var myVar = setTimeout(myTimer,1300);
gsap.to('.layer-1',{y:'-100vh',delay:.5});
gsap.to('.layer-2',{y:'-100vh',delay:.7});
gsap.to('.layer-3',{y:'-100vh',delay:.9});


function myTimer() {
  document.getElementById("myDIV").style.display = "none"
}

