import {} from 'dotenv/config';

const DELAY = 150;

export const BRO_OPTION ={
    headless: process.env.PUPETEER_OPEN_BROWSER.toLowerCase()== 'true'? false: true
};
export const TAB_WAITING_REQUEST = {
    waitUntil: process.env.PUPPETEER_TAB_WAITING_REQUEST_WAITUNTIL
}

export const DELAY_OPTION = {
    delay: 150
}