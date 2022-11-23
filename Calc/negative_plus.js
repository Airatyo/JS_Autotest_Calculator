const puppeteer = require('puppeteer');
async function negative_plus() {
    console.log('Запуск браузера');
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
    });

    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();  

    console.log('Переход по ссылке');
    await page.goto('https://web2.0calc.com/');

    const minus = await page.$('#BtnMinus');
    await minus.click();

    const number1 = await page.$('#Btn6'); 
    await number1.click();

    const plus = await page.$('#BtnPlus');
    await plus.click();

    const number2 = await page.$('#Btn9');
    await number2.click();

    const eql = await page.$('#BtnCalc');
    await eql.click();

    function getTextContent(element) {
        return element.value;
    }
    const text = await page.$eval('#input', element => element.value); 

   console.log('Проверка условия тест-кейса');
  
   if (text == '3') {
        console.log("Passed");
   } else {
       console.log("Failed");
   }
   console.log('Закрытие браузера');
   await browser.close();
}
negative_plus()