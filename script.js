const menuIcon =document.getElementById("menu-icon");
const menuActiveIcon =document.getElementById("menu-active-icon");
const navItems =document.getElementById("nav-items");
const overlay=document.getElementById("overlay");

menuIcon.addEventListener('click', (e)=>{
   
    menuActiveIcon.style.display ="inline-block";
    menuActiveIcon.style.zIndex="100";
    menuIcon.style.display="none";
    navItems.style.display="inline-block";
    navItems.style.backgroundColor = '#fff';
    navItems.style.width = '80%';
    navItems.style.height = '100%';
    navItems.style.marginLeft = '80px';
    navItems.style.paddingLeft = '2rem';
    navItems.style.paddingBottom = '20px';
    navItems.style.paddingTop= '25%';
    navItems.style.fontWeight= 'bold';
    navItems.style.zIndex= '99';
    overlay.style.display="block";


});

menuActiveIcon.addEventListener('click', (e)=>{
   
    menuActiveIcon.style.display ="none";
    menuIcon.style.display="inline-block";
    navItems.style.display="none";
    overlay.style.display="none";
    
});