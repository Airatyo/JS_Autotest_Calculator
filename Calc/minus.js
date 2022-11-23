const puppeteer = require('puppeteer');
async function minus() {
    console.log('Запуск браузера');
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
    });

    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();  

    console.log('Переход по ссылке');
    await page.goto('https://web2.0calc.com/');

    const number1 = await page.$('#Btn9'); 
    await number1.click();

    const plus = await page.$('#BtnMinus');
    await plus.click();

    const number2 = await page.$('#Btn3');
    await number2.click();

    const eql = await page.$('#BtnCalc');
    await eql.click();

    function getTextContent(element) {
        return element.value;
    }
    const text = await page.$eval('#input', element => element.value); 

   console.log('Проверка условия тест-кейса');
  
   if (text == '6') {
        console.log("Passed");
   } else {
       console.log("Failed");
   }
   console.log('Закрытие браузера');
   await browser.close();
}
minus()