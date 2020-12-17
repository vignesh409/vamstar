const rp = require('request-promise');
const cheerio = require('cheerio');
//const request = require("request-promise");

(async () =>{

    const url ='https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020';

    const response = await request(url);   

    const $ = cheerio.load(response);

    let pub = $('span[class="col-sm-6 lbl-licitacao"]').text();
    console.log(pub);

})();