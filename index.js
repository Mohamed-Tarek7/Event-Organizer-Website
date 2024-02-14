let colorList = document.getElementsByClassName("change-color");
let gearBlock = document.getElementsByClassName("gear-span");
let visible = false;

var mySwiper = new Swiper('.container', {
    loop: true,
    
    autoplay: {
        delay: 1300,
        disableOnInteraction: true,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPreView: 4,

   });
mySwiper;

function changeColor(){
    if (visible == true){
        colorList[0].style.display = "none";
        gearBlock[0].style.right = "0px";
        colorList[0].style.position = "none";
    }
    else{
        colorList[0].style.display = "inline-block";
        gearBlock[0].style.right = "120px";
        colorList[0].style.position = "fixed";
    }

    visible = !visible;
}

function chooseColor(){
    let newColor = this.style.color;
    document.documentElement.style.setProperty("--main-color", newColor);
}