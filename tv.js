console.log('ohjelma alkaa')
function fetchSuccess (responce) {
    console.log('ok, responce', responce)
    responce.json().then(function (data) {
        console.log('json data', data)
        console.log('show:', data.value)
    }).catch(function (error) {
        console.error(error)
    })
}
    main()
function fetchError (error) {
    console.log('fetch error', error)
}
function main() {
    const input = document.querySelector('#query')
    const form = document.querySelector('#form')
    form.addEventListener('submit', function (event) {
    event.preventDefault();
    fetch('https://api.tvmaze.com/search/shows?q='+ input.value.trim()).then(fetchSuccess).catch(fetchError)
    /* const responce = fetch('')
    console.log('responce', responce)
     */

})}

