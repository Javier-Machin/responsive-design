const win = window,
    docEl = document.documentElement,
    topNavbar = document.getElementById('nav-top'),
    logo = document.getElementById('logo'),
    navBottomText = document.getElementById('nav-bottom-text');

win.onscroll = function(){
  const sTop = (this.pageYOffset || docEl.scrollTop)  - (docEl.clientTop || 0);
  if(sTop > 10) {
    topNavbar.style.display = "none";
    logo.style.display = "inline-block";
    logo.style.padding = "7px 20px";
    logo.style.height = "34px";
    navBottomText.style.margin = "0 0 0 130px";
  } else {
    topNavbar.style.display = null;
    logo.style.display = null;
    logo.style.padding = null;
    logo.style.height = null;
    navBottomText.style.margin = null;
  }
};