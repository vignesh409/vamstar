const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020');
  await page.click('#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing')
  await page.waitfor(1000);
  
  const result = await page.evaluate(() => {
    let title = document.querySelector('.views-field views-field-nothing');
    let title = document.querySelector('.views-field views-field-nothing').innerText;
    return {
        PUBLICATIONDATE,
        OBJECT,
        ADDITIONALINFORMATION,
        MODALITY,
        SITUATION,
        BIDDINGDATE   
      }
    });
  return result;
};

scrape().then((value) => {
    console.log(value); // Success!
});
