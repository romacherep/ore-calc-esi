console.log('Hello, World')
const input = document.getElementById('myInput')
const urlSearchParams = new URLSearchParams(window.location.search)
const params = Object.fromEntries(urlSearchParams.entries());
input.innerText=params.code
console.log(params)
