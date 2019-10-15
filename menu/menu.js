$(document).ready(function () {
    $('#but').click(function () {
        if(document.getElementById('name').value === ''){
            $('#name').addClass('error');
        } else {
            $('#name').removeClass('error');
            // for database
            //localStorage.setItem('name', name.value)
            location.href='../mult/index.html'
        }
    })
});