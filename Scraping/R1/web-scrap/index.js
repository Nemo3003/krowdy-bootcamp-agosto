const pupeteer = require('puppeteer');
const cheerio = require('cheerio');
//const puppeteer = require('puppeteer-extra')
//to run it: node index.js

(async ()=>{
    const browser = await pupeteer.launch();

    const page = await browser.newPage();

    await page.goto("https://www.linkedin.com/in/clifford-g%C3%A1rate-5260b01b6?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADI0He4BN0ea9tAfmMcrNlTSEsdmAAAKkro");

    await page.screenshot({ path: './src/assets/image23.png' });

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

