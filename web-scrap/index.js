const pupeteer = require('puppeteer');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer-extra')
//to run it: node index.js

(async ()=>{
    const browser = await pupeteer.launch();

    const page = await browser.newPage();

    await page.goto("https://www.amazon.com/Presto-22-inch-Electric-Griddle-Removable/dp/B005FYF3OY/");

    await page.screenshot({ path: './assets/image2.png' });

    const pageData = await page.evaluate(()=>{
        return {
            html: document.documentElement.innerHTML,
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    });
    //console.log(pageData);

    const $ = cheerio.load(pageData.html);

    const element = $("#productTitle")
    console.log(element.text());

    await browser.close();
})();

/*
//HOW WE OBTAIN THE URL
*/

