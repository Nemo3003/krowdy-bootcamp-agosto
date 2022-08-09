const pupeteer = require('puppeteer');
const cheerio = require('cheerio');
//const puppeteer = require('puppeteer-extra')
//to run it: node index.js

(async ()=>{
    const browser = await pupeteer.launch();

    const page = await browser.newPage();

    await page.goto("https://www.linkedin.com/in/ulises-mariano-melgarejo/");

    await page.screenshot({ path: '.src/assets/image23.png' });

    const pageData = await page.evaluate(()=>{
        return {
            html: document.documentElement.innerHTML,
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    });
    //console.log(pageData);

    const $ = cheerio.load(pageData.html);

    const element = $(".text-heading-xlarge inline t-24 v-align-middle break-words")
    console.log(element.text());

    await browser.close();
})();

/*
//HOW WE OBTAIN THE URL
*/

