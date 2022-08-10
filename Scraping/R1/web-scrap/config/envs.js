import {} from 'dotenv/config';

const DELAY = 150;

export const BRO_OPTION ={
    headless: process.env.PUPETEER_OPEN_BROWSER.toLowerCase()== 'true'? false: true
}