$(document).ready(function () {
    let person = '';

    $('#timon_card').click(function () {
        person === '' || person === 'pumba'  ? person = 'timon' : '';
        localStorage.setItem('person', person);
        $('#timon_card').addClass('valid');
        $('#pumba_card').removeClass('valid');
    });

    $('#pumba_card').click(function () {
        person === '' || person === 'timon' ? person = 'pumba' : '';
        localStorage.setItem('person', person);
        $('#pumba_card').addClass('valid');
        $('#timon_card').removeClass('valid');
    });

    $('#but').click(function () {
        if(document.getElementById('name').value === ''){
            $('#name').addClass('error');
        } else if(person === '') {
            $('#invalid_person').text('Персонаж не выбран!!')
        } else {
            $('#name').removeClass('error');
            localStorage.setItem('name', name);
            location.href='../mult/index.html'
        }
    })
});