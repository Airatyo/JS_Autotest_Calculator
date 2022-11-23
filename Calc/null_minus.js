const puppeteer = require('puppeteer'); //подключение бибилиотеки

//Вычитание из нуля
async function null_minus() {

    console.log('Запуск браузера');
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
    });

    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();  

    console.log('Переход по ссылке');
    await page.goto('https://web2.0calc.com/');


    const nill = await page.$('#Btn0'); 
    await nill.click();

    const minus = await page.$('#BtnMinus');
    await minus.click();

    const number3 = await page.$('#Btn3'); 
    await number3.click();

    const eql = await page.$('#BtnCalc');
    await eql.click();

    function getTextContent(element) {
        return element.value;
    }
    const text = await page.$eval('#input', element => element.value); 

   console.log('Проверка условия тест-кейса');
  
   if (text == '-3') {
        console.log("Passed");
   } else {
       console.log("Failed");
   }
   console.log('Закрытие браузера');
   await browser.close();
}
null_minus();