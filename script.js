let input = document.getElementById('Token')
const urlSearchParams = new URLSearchParams(window.location.search)
const params = Object.fromEntries(urlSearchParams.entries())
input.value = params.code
