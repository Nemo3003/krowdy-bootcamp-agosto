const cheerio = require('cheerio');
const request = require('request-promise');

async function init(){
    const response = await request("https://www.linkedin.com/in/ulises-mariano-melgarejo/")
    console.log(response)
}
init()
