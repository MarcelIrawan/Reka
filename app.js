// Scraper
const cheerio = require ('cheerio');
const axios = require ('axios');


return axios.get('https://gbika.org/renungan-harian/').then((response) => {
    const $ = cheerio.load(response.data);
    const urlElms1 = $('div.section-boxed'); // elements we want to scrap
    const $element = $(urlElms1);
    
    // const label = $element.find('span.rp-cat a').attr('href')
    // const title = $element.find('div.rp-info a').attr('data-hover')
    // const link = $element.find('div.rp-info a').attr('href')
    const dataReka = {
        title: $element.find('div.rp-info a').attr('data-hover'),
        label: $element.find('span.rp-cat a').attr('href'),
        link: $element.find('div.rp-info a').attr('href')
    }
    console.log(dataReka)
})

