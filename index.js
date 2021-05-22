const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');
const app = express();

app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
/* app.get('/linio/:textSearch', cors(),function (req, res) {
  let textSearch = req.params.textSearch;
    (async () => {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.setDefaultNavigationTimeout(0)
        await page.goto('https://www.linio.com.mx/search?scroll=&q='+textSearch)
    
           const result = await page.evaluate(() => {
            let info = []
             let data = document.querySelectorAll('.catalogue-product');
             let dat = data.length = 5
             for (let i = 0; i < dat; i++) {
                info.push({
                    'title': data[i].querySelector('.title-section').innerText.trim().replace(/(\r\n|\n|\r)/gm, " "),
                    'price': data[i].querySelector('.price-main-md').innerText.replace('$',''),
                    'image': data[i].querySelector('.image-wrapper img').src,
                    'link': data[i].querySelector('a').href,
                    'provider' : 'Linio'
                })
            }
    
             return info
        }) 
      
        res.json(result)
      
        browser.close()
      })()
   
})
app.get('/ml/:textSearch', cors(),function (req, res) {
  var textSearch = req.params.textSearch;
  textSearch.replace(/%20/g, " ");
    (async () => {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.setDefaultNavigationTimeout(0)
        await page.goto('https://listado.mercadolibre.com.mx/'+textSearch)
    
           const result = await page.evaluate(() => {
            let info = []
            
             let data = document.querySelectorAll('.ui-search-layout__item');
             let dat = data.length = 5
             for (let i = 0; i < dat; i++) {
                info.push({
                    'title': data[i].querySelector('.ui-search-item__title').innerText.trim().replace(/(\r\n|\n|\r)/gm, " "),
                    'price': data[i].querySelector('.price-tag-fraction').innerText,
                    'image': data[i].querySelector('.ui-search-result__image img').src,
                    'link': data[i].querySelector('.ui-search-result__image a').href,
                    'provider' : 'Mercado libre'
                })
            }
    
             return info
        }) 
      
        res.json(result)
      
        browser.close()
      })()
})
app.get('/am/:textSearch', cors(),function (req, res) {
  var textSearch = req.params.textSearch;
  textSearch.replace(/%20/g, " ");
    (async () => {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.setDefaultNavigationTimeout(0)
        await page.goto(`https://www.amazon.com.mx/s?k=`+textSearch)
    
           const result = await page.evaluate(() => {
            let info = []
            
             let data = document.querySelectorAll('.s-result-item.s-asin');
             let dat = data.length = 5
             for (let i = 0; i < dat; i++) {
                info.push({
                    'title': data[i].querySelector('.a-link-normal span').innerText.trim().replace(/(\r\n|\n|\r)/gm, " "),
                    'price': data[i].querySelector('.a-size-base .a-price-whole').innerText.replace(/\.$/,''),
                    'image': data[i].querySelector('.s-image-square-aspect img').src,
                    'link': data[i].querySelector('.a-size-mini a').href,
                    'provider' : 'Amazon'
                })
            }
    
             return info
        }) 
      
        res.json(result)
      
        browser.close()
      })()
})
app.get('/wal/:textSearch', cors(),function (req, res, next ) {
  
  var textSearch = req.params.textSearch;
  textSearch.replace(/%20/g, " ");
    (async () => {
      try {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        //await page.setDefaultNavigationTimeout(0)
        await page.goto(`https://www.walmart.com.mx/productos?Ntt=`+textSearch)
    
           const result = await page.evaluate(() => {
            let info = []
            
             let data = document.querySelectorAll('.col-xs-6.col-md-4.col-lg-3.col-xl-2');
             let dat = data.length = 5
             for (let i = 0; i < dat; i++) {
                info.push({
                    'title': data[i].querySelector('.ellipsis').innerText.trim().replace(/(\r\n|\n|\r)/gm, " "),
                    'price': data[i].getAttribute('.product_price__2NBjj p').innerText.replace('$',''),
                    'image': data[i].querySelector('span img').src,
                    'link': data[i].querySelector('a').href,
                    'provider' : 'Walmart'
                })
            }
           
             return info
        }) 
      
        res.json(result)
      
        browser.close()
      } catch(e) {
        res.json(0)
        browser.close()
      }
      })()
    
})
app.get('/ele/:textSearch', cors(),function (req, res) {
  var textSearch = req.params.textSearch;
  textSearch.replace(/%20/g, " ");
    (async () => {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.setDefaultNavigationTimeout(0)
        await page.goto(`https://www.elektra.com.mx/`+textSearch)
    
           const result = await page.evaluate(() => {
            let info = []
            
             let data = Array.from(document.querySelectorAll('.Grid_container__1CMfm'));
             let dat = data.length = 5
             console.log(data[i])
             for (let i = 0; i < dat; i++) {
                info.push({
                  //'title': data[i].querySelector('h3').innerText.trim().replace(/(\r\n|\n|\r)/gm, " "),
                     // 'price': data[i].querySelector('.Grid_finalPrice__uGu4s').innerText.replace('$',''),
                   // 'image': data[i].querySelector('.Grid_image__3jG_j').src,
                    //'link': data[i].querySelector('a').href, 
                    'provider' : 'Electra'
                })
            }
    
             return info
        }) 
      
        res.json(result)
      
        browser.close()
      })()
})
app.get('/live/:textSearch', cors(),function (req, res) {
  var textSearch = req.params.textSearch;
  textSearch.replace(/%20/g, " ");
    (async () => {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.setDefaultNavigationTimeout(0)
        await page.goto(`https://www.liverpool.com.mx/tienda?s=`+textSearch)
    
           const result = await page.evaluate(() => {
            let info = []
            
             let data = document.querySelectorAll('.m-product__card.card-masonry');
             let dat = data.length = 5
             for (let i = 0; i < dat; i++) {
                info.push({
                    'title': data[i].querySelector('h5').innerText.trim().replace(/(\r\n|\n|\r)/gm, " "),
                    'price': data[i].querySelector('.a-card-discount').innerText.replace(/\$,/g,''),
                    'image': data[i].querySelector('figure img').src,
                    'link': data[i].querySelector('a').href,
                    'provider' : 'Liverpool'
                })
            }
    
             return info
        }) 
      
        res.json(result)
      
        browser.close()
      })()
})
 */
  const PORT = 3000;
  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));