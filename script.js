$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    })
});

const button = document.querySelector(".scroll-down .btn-scrll");

function removeShadow() {
    button.style.boxShadow = "none";

    setTimeout(() => {
        button.style.boxShadow = "4px 6px 1px rgba(0, 0, 0, 0.8)";
      }, 500);
  }

  // Tambahkan event listener untuk menangani klik
  button.addEventListener("click", removeShadow);


  