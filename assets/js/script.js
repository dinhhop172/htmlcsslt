var backtop = document.getElementById('backtop');
setInterval(function(){
   var header = window.pageYOffset;
   // console.log(header);
   if(header >= 150){
      backtop.classList.add('show');
      backtop.classList.remove("hide");
   }else{
      backtop.classList.add('hide');
      backtop.classList.remove("show");
   }
}, 500);

// alert(header);

backtop.addEventListener('click', function(){
   window.scroll({
      top: 0,
      behavior: "smooth",
   });
});
