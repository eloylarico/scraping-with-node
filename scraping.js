const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require('puppeteer');

  (async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.linio.com.mx/b/apple')

       const result = await page.evaluate(() => {
        let info = []
         let data = document.querySelectorAll('.catalogue-product');

         for (const a of data) {
            info.push({
                'title': a.querySelector('.title-section').innerText.trim().replace(/(\r\n|\n|\r)/gm, " "),
                'price': a.querySelector('.price-main-md').innerText
            })
        }

         return info
    }) 
  
    console.log(result)
  
    browser.close()
  })()
  