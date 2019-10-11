$(document).ready(function () {
    $('#but').click(function () {
        let name = document.getElementById('name');
        if(name.value === ''){
            $('#name').addClass('error');
        } else {
            $('#name').removeClass('error');
            location.href='../mult/index.html'
        }
    })
});