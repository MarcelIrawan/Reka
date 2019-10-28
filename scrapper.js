const cheerio = require ('cheerio');
const axios = require ('axios');


function getReka() {
return axios.get('https://gbika.org/renungan-harian/').then((response) => {
    const $ = cheerio.load(response.data);
    const dataReka = []; // create array for data
    const urlElms = $('div.pexeto-recent-posts'); // elements we want to scrap
    urlElms.each((i, element) => {
        const reka = {
            // find the data we want to scrap with spesific attribute
            title: $(urlElms[i]).find('a').attr('data-hover'),
            link: $(urlElms).find('a').attr('href'),
            label: $(urlElms).find('span.rp-cat.a').text()
        }
        console.log(reka)
        return reka;
        // console.log(dataReka.push(reka));
    })
}
)}
console.log(getReka());

//     for(let i = 0; i < urlElms.length; i++) {
//         const urlSpan = $(urlElms[i]).find('a')[0]
//         const link = $(urlElms).find('a').attr('href')

//         if(urlSpan){
//             const urlText = $(urlSpan).text()
//             // const text = $(link).text()
//             console.log(urlText)
//             console.log(link)
//         }
//     }
// })
