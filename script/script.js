console.log('Hello, World')
const auth = "Basic MjYyN2M5N2EzNDVlNDQ3Y2EwYjdiMWM4MWI5YmE5MWU6WkE4RlpLRTFOMjJvYlpDVGZSdkV1STZBdXpTOXF6ZGZaMDRaeUJ5eA=="
const urlSearchParams = new URLSearchParams(window.location.search)
const params = Object.fromEntries(urlSearchParams.entries());
fetch('https://login.eveonline.com/oauth/token',{
    method:'POST',
    headers:{
        "Content-Type":"application/json",
        "Authorization":auth
    },
    body:{"grant_type":"authorization_code", "code":params.code}
}).then(data=>{
    return data.json()
}).then(token=>{
    console.log(token);
})
console.log(params)