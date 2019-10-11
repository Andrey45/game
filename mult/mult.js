document.addEventListener('DOMContentLoaded', function() {
    // sslider = Simple SLIDER
    function sslider() {

        var current = 0,
            i,
            slider = document.querySelector('[data-js="sslide"]'),
            allImages =  slider.querySelectorAll('img'),
            imgWidth = Math.ceil(100 / allImages.length),
            sliderWidth = allImages.length * 100;

        slider.style.width = sliderWidth + '%';

        for(i = 0; i <= allImages.length - 1; i++) {
            allImages[i].style.width = imgWidth + '%';
        }

        function animateRight(cur) {
            var i = imgWidth,
                time = 50;
            var animate = setInterval(function() {
                if(i <= sliderWidth) {
                    allImages[cur].style.marginLeft = "-" + i + "%";
                    i--;
                } else {
                    clearInterval(animate);
                }
            }, time);
        }

        function animateLeft(cur) {
            var i = 0,
                time = 50;
            var animate = setInterval(function() {
                if(i <= imgWidth) {
                    allImages[cur].style.marginLeft = "-" + i  + "%";
                    i++;
                } else {
                    clearInterval(animate);
                }
            }, time);
        }

        setInterval(function () {
            if(current <= allImages.length - 2) {
                animateLeft(current);
                current++;

            } else {
                //перехлд на страницу игры
                window.location.href = "../game/index.html";
            }
        }, 3000);
    } // end
    sslider();
});

