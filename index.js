$(document).ready(function(e){
  
  $win = $(window);
  $navbar = $("#header");
  $toggle = $(".toggle-button");
  var width = $navbar.width();
  
  toggle_onclick($win, $navbar, width);  
  $win.resize(function(){
    toggle_onclick($win, $navbar, width);  
  });// -window.resize()

  $toggle.click(function(e){
    $navbar.toggleClass("toggle-left");
  });


  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    strings : ['Flutter Developer',
        'Web Developer',
        'Freelancer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop:true
  });

  var typed = new Typed('#typed_2', {
    stringsElement: '#typed-strings',
    strings : [
      'Flutter Developer',
        'Web Developer',
        'Freelancer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
  });


});
 
let x=document.querySelector('#test');
x.addEventListener('click',()=>{
  alert('Mail me at "abhishekdixit1651996@gmail.com"')
})


 

  function toggle_onclick($win, $navbar, width){
    if ($win.width() <= 768) {  
      $navbar.css({left: `-${width}px`});
      
      document.getElementById("header").style.zIndex = "9999";
    }else{
      $navbar.css({left: `0px`});
      
      document.getElementById("header").style.zIndex = "0";
      
    }
  }