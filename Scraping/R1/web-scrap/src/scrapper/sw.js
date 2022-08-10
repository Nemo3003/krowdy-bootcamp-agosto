"use strict";

import puppeteer from 'puppeteer';
import {} from 'dotenv/config';
import { BRO_OPTION, TAB_WAITING_REQUEST, DELAY_OPTION } from '../../config/envs.js';

const pgOptions = TAB_WAITING_REQUEST
const delay = DELAY_OPTION

const email_lnk = process.env.EMAIL_LNK;
const password_lnk = process.env.PASSWORD_LNK;

/**Variables ready, next step: let's gather data */

export const getData = async () => {
    let browser;
    let data = [];
    try{
        browser = await puppeteer.launch(BRO_OPTION)
        const isLogged = await validate_login(browser)
        if(!isLogged) return {message: 'Invalid credentials'}
    
    //Link de los usuarios
    const linkUsers = await findUsers(keyword, browser)
    if(!linkUsers) return {message: 'No user found'}

    for (const link of linkUsers) {
        const user = await getUser(link, browser)
        data.push(user)}
    }catch(error){
        //Error
        console.log(error)
    } finally{
        await browser.close()
        return data
    }
}
/**LETS GET THE DATA USER */
export const userInfo = async (browser, useURL)=>{
    const urlUser = formatURL(useURL)

    //datos de promesas
    //promesa contacto
    const cont_prom = infoContact(browser, urlUser)
    //promesa experiencia
    const exp_prom = infoExperience(browser, urlUser)
    //promesa educacion
    const edu_prom = infoEducation(browser, urlUser)

    //Datos extra
    const contact = await cont_prom
    const experience = await exp_prom
    const education = await edu_prom

    return {contact, experience, education}
}
//Obtener los datos de contacto
export const infoContact = async (browser, urlUser)=>{
    const URL = urlUser + 'overlay/contact-info'
    try{
    let page = await browser.newPage()
    await page.goto(URL, pgOptions)
//manejar seccion de contact
const handleSection = (await page.$x('//section[*//h2[text()="Informacion de contacto]]'))[0]
let result = await handleSection.evaluate(section =>{
    let data = []
    const contactLink = section.querySelectorAll('section section a')
    for (const link of contactLink) {
        data.push(link.textContent.trim())
    }
    return data;
})
}catch(error){
    console.log(error)
} finally{
    await page.close()
    return result
}

}
//Obtener los datos de experiencia
export const infoExperience = async (browser, urlUser)=>{
    const URL = `${urlUser}details/experience`
    let result = null;
    try{
        let page = await browser.newPage()
        await page.goto(URL, pgOptions)

        const handleXP = (await page.$x('//section[*//h2[text()="Experiencia"]]'))[0]
        if(handleXP === undefined) return result;

        result = await handleXP.evaluate(section =>{
            let data = []
            const listItems = section.lastElementChild.firstElementChild.firstElementChild.children;
            for (let li of listItems){
                const divData = li.firstElementChild.lastElementChild.firstElementChild.firstElementChild;
                const listaSpan = divData.querySelectorAll('span > span[aria-hidden="true"]')

                const charge = listaSpan[0].textContent.trim()
                const company = listaSpan[1].textContent.trim()
                const date = listaSpan[2].textContent.trim()
                const address = !listaSpan[3]? '' : listaSpan[3].textContent

                data.push({charge, company, date, address})
            }
            return data;
        })

    }catch(error){
        console.log(error)
    }finally{
        await page.close()
        return result
    }
}
//Obtener los datos de educacion
export const infoEducation = async (browser, urlUser)=>{
    let result = null;
    const URL = `${urlUser}details/education`
    try{
        let page = await browser.newPage()
        await page.goto(URL, pgOptions)

        //No education visible
        const handleElement = (await page.$x('*[text()="NO DATA, BEEN STOLEN BEFORE"]]'))[0]
        if(handleElement === undefined) return result;

        const handleSectEdu = (await page.$x('//section[*//h2[text()="Educación"]]'))[0]
        result = await handleSectEdu.evaluate(section =>{
            let data = []
            const listItems = section.lastElementChild.firstElementChild.firstElementChild.children;
            for (let li of listItems){
                const divData = li.firstElementChild.lastElementChild.firstElementChild.firstElementChild;
                const listaSpan = divData.querySelectorAll('span > span[aria-hidden="true"]')

                const degree = listaSpan[0].textContent.trim()
                const school = listaSpan[1].textContent.trim()
                const date = listaSpan[2].textContent.trim()

                data.push({degree, school, date})
            }
            return data;
        })
    }catch(error){
        console.log(error)
    } finally{
        await page.close()
        return result
    }
}
/**LETS FIND ALL THE USERS REQUIRED */
/**GET UTILS so we can log in and use linkedin  */