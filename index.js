 
 let card2 = document.getElementById("trendSec");
 let blog = document.getElementById("trended");
 let about = document.querySelector('.about')
 let contact = document.querySelector('.contact')
 let mainpage = document.querySelector(".main");
 let card = document.getElementById("trendid");
 


 function homes (){

  mainpage.style.display="flex";
  blog.style.display="none";
  card2.style.display="none";
  about.style.display="none";
  contact.style.display="none";
  card.style.display="none";


    
  document.getElementById("home").style.color="rgb(26, 212, 212)";  
  document.getElementById("shops").style.color="black";
  document.getElementById("about").style.color="black";
  document.getElementById("blog").style.color="black";
  document.getElementById("contact").style.color="black";
 }




 function shops(){

    mainpage.style.display="none";
    blog.style.display="none";
    about.style.display="none";
    contact.style.display="none";
    card2.style.display="block";
    card.style.display="block";
  


  document.getElementById("shops").style.color="rgb(26, 212, 212)";  
  document.getElementById("home").style.color="black";
  document.getElementById("about").style.color="black";
  document.getElementById("blog").style.color="black";
  document.getElementById("contact").style.color="black";

    


    
}

function blogs(){
    mainpage.style.display="none";
    blog.style.display="block";
    card2.style.display="none";
    about.style.display="none";
    card.style.display="none";
    contact.style.display="none";
    

  document.getElementById("blog").style.color="rgb(26, 212, 212)";
  document.getElementById("shops").style.color="black";
  document.getElementById("home").style.color="black" ; 
  document.getElementById("about").style.color="black";
  document.getElementById("contact").style.color="black";



   

}


function abouts(){

  mainpage.style.display="none";
  blog.style.display="none";
  card2.style.display="none";
  card.style.display="none";
  contact.style.display="none";
  about.style.display="block"; 

document.getElementById("about").style.color="rgb(26, 212, 212)";
document.getElementById("shops").style.color="black";
document.getElementById("home").style.color="black" ; 
document.getElementById("blog").style.color="black";  
document.getElementById("contact").style.color="black";
}


function contacts(){

  mainpage.style.display="none";
  blog.style.display="none";
  card2.style.display="none";
  about.style.display="none";
  card.style.display="none";
  contact.style.display="block"; 

document.getElementById("contact").style.color="rgb(26, 212, 212)";
document.getElementById("shops").style.color="black";
document.getElementById("home").style.color="black" ; 
document.getElementById("blog").style.color="black"; 
document.getElementById("about").style.color="black"; 

}

  
function show (img){

  let image = document.getElementById("images"); 
  image.src=img.src;
  

  



  mainpage.style.display="none";
  blog.style.display="none";
  card2.style.display="none";
  about.style.display="none";
  card.style.display="none";
  contact.style.display="none"; 
  document.querySelector(".cart").style.display="flex";

}

function addcart (){
  
  alert("Added to Cart");
  location.reload();

}





