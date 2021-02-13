// request Classic
const https = require('https')
const querystring = require('querystring');

const urlParams = querystring.stringify({
    'api_key': 'M1J6HIVT7GZ6OL3BIVGXLQNA7O9F8CGWYVT1GCD5CWD0L904MCPFOPVR5B3S5QPT3N5WT1RVM490DGK7',
    'url': 'https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020',  
})

const options = {
    hostname: 'app.scrapingbee.com',
    port: '443',
    path: '/api/v1?' + urlParams,
    method: 'GET',
    
}

const req = https.request(options, res => {
    console.log(`statusCode: ${ res.statusCode }`)
    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.error(error)
})

req.end()