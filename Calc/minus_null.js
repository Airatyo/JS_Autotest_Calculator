const puppeteer = require('puppeteer'); //подключение бибилиотеки

//Вычитание нуля
async function minus_null() {

    console.log('Запуск браузера');
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
    });

    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();  

    console.log('Переход по ссылке');
    await page.goto('https://web2.0calc.com/');


    const number5 = await page.$('#Btn5'); 
    await number5.click();

    const minus = await page.$('#BtnMinus');
    await minus.click();

    const nill = await page.$('#Btn0'); 
    await nill.click();

    const eql = await page.$('#BtnCalc');
    await eql.click();

    function getTextContent(element) {
        return element.value;
    }
    const text = await page.$eval('#input', element => element.value); 

   console.log('Проверка условия тест-кейса');
  
   if (text == '5') {
        console.log("Passed");
   } else {
       console.log("Failed");
   }
   console.log('Закрытие браузера');
   await browser.close();
}
minus_null();