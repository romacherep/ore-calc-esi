let input = document.getElementById('Token')
const urlSearchParams = new URLSearchParams(window.location.search)
const params = Object.fromEntries(urlSearchParams.entries())
console.log(params.code)
input.value = params.code
