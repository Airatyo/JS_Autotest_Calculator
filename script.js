const puppeteer = require('puppeteer'); //подключение бибилиотеки
// описание функции 
async function metroTest() {

    console.log('Запуск браузера');
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
    });

    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();  

    console.log('Переход по ссылке');
    await page.goto('https://yandex.ru/metro/moscow?scheme_id=sc34974011');

    const from = await page.$('[placeholder="Откуда"]');
    await from.type('ховрино');
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    console.log("Заполнено поле Откуда, выбрана станция во всплывающем списке");

    const to = await page.$('[placeholder="Куда"]');
    await to.type('вднх');
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    console.log("Заполнено поле Куда, выбрана станция во всплывающем списке");
    console.log("Появился маршрут");

    console.log('Проверка условия тест-кейса');
    const a = await page.$('[class="route-snippet-view _active _type_metro"]');
    if (a != null) {
        console.log("Passed");
    } else {
        console.log("Failed");
    }
    console.log('Закрытие браузера');
    await browser.close();
}
metroTest();