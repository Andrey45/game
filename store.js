let user_store = '';
let person_store = '';
//localStorage.removeItem('server')
let store_server = [];

export function name(name) {
    return new Promise((result, reject) => {
        localStorage.setItem('name', name);
        name === '' ? reject() : result()
    })
}
export function person(person) {
    return new Promise((result, reject) => {
        localStorage.setItem('person', person);
        person === '' ? reject() : result()
    })
}
export function result(result) {
    let server = JSON.parse(localStorage.getItem('server'));
    store_server = server;
    if(server === null){
        localStorage.setItem('server', JSON.stringify([{
            name: localStorage.getItem('name'),
            person: localStorage.getItem('person'),
            result: result
        }]))
    } else {
        store_server.push({
            name: localStorage.getItem('name'),
            person: localStorage.getItem('person'),
            result: result
        })
        localStorage.setItem('server', JSON.stringify(store_server));
    }
    person_store = person;
}
export function server() {
    return JSON.parse(localStorage.getItem('server'))
}