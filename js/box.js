$(function () {
    $(window).resize(function (e) {
       console.log(12)

    })
    var mouseX = 0;
    var mouseY = 0;
    var istouch = false;
    var cubepositionX = $('.cube').offset().left || 0;
    var cubepositionY = $('.cube').offset().top || 0;
    console.log($('.cube').offset().top, $('.cube').offset().left, $('.side').height(), $('.side').width())
    $('.side').on('mouseover', () => {
        var windowX = $(window).width();
        var windowY = $(window).height();
        istouch = true;
    })
    $(document).on('mousemove', ((e) => {
        mouseX = e.pageX;
        mouseY = e.pageY;
        var cubepositionX = $('.cube').offset().left;
        var cubepositionY = $('.cube').offset().top;
        var $cube = $('.cube');
        var cubeheight = $('.side').height();
        var cubewidth = $('.side').width();
        var Xmin = cubepositionX - (cubewidth / 2);
        var Xmax = cubepositionX + (cubewidth / 2);
        var Ymin = cubepositionY - (cubeheight / 2);
        var Ymax = cubepositionY + (cubeheight/ 2);
        var rotateX = 0;
        var rotateY = 0;
        if (e.pageX >= Xmin && e.pageX <= Xmax && e.pageY >= Ymin && e.pageY <= Ymax) {
            // console.log((180 / (Xmax - Xmin)) * (mouseX - Xmin))
            rotateX = ((180 / (Xmax - Xmin)) * (mouseX - Xmin)-90);
            rotateY = ((180 / (Ymax - Ymin)) * (mouseY - Ymin)-90);
        }
        // if (e.pageY >= Ymin && e.pageY <= Ymax) {
        //     // console.log((180 / (Ymax - Ymin)) * (mouseY - Ymin))
        //     rotateY = ((180 / (Ymax - Ymin)) * (mouseY - Ymin)-90);
        // }
        $cube.css("transform", "rotateX("+ rotateY +"deg) rotateY("+ -rotateX +"deg)")
    }))
    
    /*-------------------------跟著滑鼠的游標圖------------------------------------------*/
    var $magicpen = $('.magicpen');
    // $('body *').addClass('.magicpen_hover');
    $('body').on('mousemove mouseover', ((e) => {
        mouseX = e.pageX;
        mouseY = e.pageY;
        // console.log(($magicpen.height()/2))
        // console.log($magicpen.offset().top,$magicpen.offset().left)
        $magicpen.css('top',mouseY-($magicpen.height()/2))
        $magicpen.css('left',mouseX-($magicpen.width()/2))
        // console.log(e)
    }))
    // $("body").on('mouseover',".magicpen_hover",()=>{
    //     console.log(1)
    //     $magicpen.css('background','white');
    // })
        
       
        
})