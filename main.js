$(document).ready(function(){

    //Navbar to appear on the scroll
    $(window).scroll(function(){
        if(this.scrollY > 200){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    var typed = new Typed(".typing-1",{
        strings:[
            "Student", "Future Web Developer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2",{
        strings:[
            "Student", "Future Web Developer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});