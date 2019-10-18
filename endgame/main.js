import { server} from "../store.js";
$(document).ready(function () {
   $('#data').html(`${server().map(item => {
       return `<tr><td>${item.name}</td><td>${item.person}</td><td>${item.result}</td></tr>`
   })}`)
});