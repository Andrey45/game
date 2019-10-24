import  { name as server_name}  from "../store.js";
import { person as server_person } from "../store.js";

let person = '';

$(document).ready(function () {

    $('#timon_card').click(function () {
        person === '' || person === 'pumba'  ? person = 'timon' : '';
        $('#timon_card').addClass('valid');
        $('#pumba_card').removeClass('valid');
    });

    $('#pumba_card').click(function () {
        person === '' || person === 'timon' ? person = 'pumba' : '';
        $('#pumba_card').addClass('valid');
        $('#timon_card').removeClass('valid');
    });

    $('#but').click(function () {
        // Проверяем введено ли имя игрок
        server_name(document.getElementById('name').value)
            // Если да то проверяем выбран ли персонаж
            .then(() => {
                server_person(person)
                    // Если выбран то идем дальше
                    .then(() => {
                        location.href = "cut-scene.html"
                    })
                    // Если нет то кидаем ошибку
                    .catch(() => {
                        $('#invalid_person').text('Персонаж не выбран!!')
                    })
            })
            // Если ент кидаем ошибку
            .catch(() => {
                $('#name').addClass('error')
            })
    })
});