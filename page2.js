document.getElementById("bookmark2").addEventListener("click", () => {
  document.getElementById("bookmark2").classList.toggle("active");
  if (document.getElementById("bookmark2").classList.contains("active")) {
    document.getElementById("circle").style.fill = "hsl(176, 72%, 28%)";
    document.getElementById("path").style.fill = "white";
    document.getElementById("bookmark2").style.color = "hsl(176, 72%, 28%)";
  } else {
    document.getElementById("circle").style.fill = "black";
    document.getElementById("path").style.fill = "gray";
    document.getElementById("bookmark2").style.color = "hsl(0, 0%, 48%)";
  }
});

document.getElementById("project").addEventListener("click", () => {
  document.getElementById("modal-default").style.display = "block";
});

document.getElementById("closemodal").addEventListener("click", () => {
  document.getElementById("modal-default").style.display = "none";
});

document.getElementById("radio").addEventListener("focusin", () => {
  document.getElementById("foot1").style.display = "none";
  document.getElementById("foot2").style.display = "none";
});

document.getElementById("radio1").addEventListener("focusin", () => {
  document.getElementById("foot1").style.display = "flex";
  document.getElementById("foot2").style.display = "none";
});

document.getElementById("radio2").addEventListener("focusin", () => {
  document.getElementById("foot1").style.display = "none";
  document.getElementById("foot2").style.display = "flex";
});

document.getElementById("continue1").addEventListener("click", () => {
  document.getElementById("modal-complete").style.display = "block";
  document.getElementById("modal-default").style.display = "none";
  let text1 = document.getElementById("many1").textContent;
  document.getElementById("many1").innerHTML = text1 - 1;
  document.getElementById("many2").innerHTML = text1 - 1;
});

document.getElementById("continue2").addEventListener("click", () => {
  document.getElementById("modal-complete").style.display = "block";
  document.getElementById("modal-default").style.display = "none";
  let text2 = document.getElementById("many3").textContent;
  document.getElementById("many3").innerHTML = text2 - 1;
  document.getElementById("many4").innerHTML = text2 - 1;
});

document.getElementById("got").addEventListener("click", () => {
  document.getElementById("modal-complete").style.display = "none";
});

document.getElementById('open').addEventListener('click',()=>{
  document.getElementById('open').classList.toggle("active");
  if(document.getElementById('open').classList.contains("active")){
    document.getElementById('menu').style.display="none";
     document.getElementById('close').style.display="block";
     document.getElementById('curtain').style.display="block";
  }else{
    document.getElementById('menu').style.display="block";
     document.getElementById('close').style.display="none";
     document.getElementById('curtain').style.display="none";
  }  
})