const puppeteer = require('puppeteer');

async function fetchPageData(url) {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36');
  await page.goto(url);

  await Promise.all([
    page.waitForSelector('.oNwCmf', { visible: true }),
  ]);

  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  const html = await page.content();
  await browser.close();

  return html;
}

module.exports = {
  fetchPageData,
};
