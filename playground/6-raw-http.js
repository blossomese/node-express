const http = require('http')
const url = `http://api.weatherstack.com/current?access_key=2b07af24957165eb00eba3afbbee5d32&query=45,-75&units=f`;

const request = http.request(url, (response) =>{
    let data = ''
    response.on('data', (chunk) => {
        data += chunk
    
    })

    response.on('end', () => {
  const body = JSON.parse(data)
  console.log(body);
    })
})

request.on('error', (error)=> {
    console.log('An error', error);
})

request.end()