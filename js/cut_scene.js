document.addEventListener('DOMContentLoaded', function() {
    function slider() {
        let current = 0,
            i,
            slider = document.querySelector('[data-js="slider"]'),
            allImages =  slider.querySelectorAll('img'),
            imgWidth = Math.ceil(100 / allImages.length),
            sliderWidth = allImages.length * 100;
        slider.style.width = sliderWidth + '%';

        for(i = 0; i <= allImages.length - 1; i++) {
            allImages[i].style.width = imgWidth + '%';
        }

        function animateLeft(cur) {
            let i = 0,
                time = 50;
            let animate = setInterval(function() {
                if(i <= imgWidth) {
                    allImages[cur].style.marginLeft = "-" + i  + "%";
                    i++;
                } else {
                    clearInterval(animate);
                }
            }, time);
        }

        document.addEventListener('keypress', function(event) {
            if (event.code === 'Space') {
                window.location.href = 'game.html';
            }
        });

        setInterval(function () {
            if(current <= allImages.length - 2) {
                animateLeft(current);
                current++;

            }

            else {
                //переход на страницу игры
                window.location.href = "game.html";
            }
        }, 3000);
    } // end
    slider();
});

