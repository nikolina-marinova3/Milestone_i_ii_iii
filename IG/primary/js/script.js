// immediately invoked function expression
// show menu

(function() {
  const menuInfo = document.getElementById("menu-info");
  const menuInfoClose = document.getElementById("menu-info-close");
  const menu = document.getElementById("mobile-menu");
    
  // show menu
  menuInfo.addEventListener("click", function() {
    menu.classList.toggle("show-menu");
  });
  // close menu
  menuInfoClose.addEventListener("click", function() {
    menu.classList.toggle("show-menu"); 
  });
})();

