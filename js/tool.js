$(function () {
    $(window).resize(function (e) {
        var w = $(window).width();
        var h = $(window).height();
        $('.pageWidth').text(w);
        $('.pageHeight').text(h);
        console.log(23)
    })
    // $('#e').remove();
    /*--------------------製造紅圓圓-------------------*/
    var numOfCircle = 0;
    var circleAttributes = { "background-color": "red", "size": "5vw" };
    console.log(circleAttributes["size"])
    function creatCircle(x, y) {
        numOfCircle += 1;
        $("#dragon")
            .append
            ('<div id =' + "circle" + String(numOfCircle) + '; style =' + "background-color:red;width:" + circleAttributes['size'] + ";height:" + circleAttributes["size"] + ";border-radius:" + circleAttributes["size"] + ";position:fixed;top:" + y + "vh;left:" + x + "vw;z-index:-300;" + '></div > ');

    }

    /*loop動畫*/
    var circleX = Math.floor(Math.random() * 50) + 25;
    var circleY = Math.floor(Math.random() * 40) + 10;
    creatCircle(circleX, circleY);
    var unit = 3;
    var loopdragon = function () {
        //回傳0.1.2.3.4
        var randomRan = Math.floor(Math.random() * 2);
        if (randomRan) {
            circleX += unit / 2;
        } else {
            circleY -= unit / 2;
        }
        var random = Math.floor(Math.random() * 4);
        // console.log(random)
        if (random == 0) {
            circleX += unit;
        } else if (random == 1) {
            $('#dragon').empty();
        } else if (random == 2) {
            circleX -= unit;
        } else if (random == 3) {
            circleY += unit;
        } else if (random == 4) {
            circleY -= unit;
        }
        var transformPosition = transformDragon(circleX, circleY);
        circleX = transformDragon(circleX, circleY).X;
        circleY = transformDragon(circleX, circleY).Y;
        creatCircle(circleX, circleY);
        setTimeout(loopdragon, 100);
    }
    loopdragon();

    function transformDragon(x, y) {
        if (x >= 100) {
            x = 2;
        }
        if (x <= 0) {
            x = 98;
        }
        if (y >= 100) {
            y = 1;
        }
        if (y <= 0) {
            y = 98;
        }
        return { X: x, Y: y };
    }
})