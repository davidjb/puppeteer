import puppeteer from 'puppeteer';

async function main() {
  const browser = await puppeteer.launch({
    protocol: 'webDriverBiDi',
  });

  const page = await browser.newPage();

  await browser.userAgent();

  await page.close();
  await browser.close();
}
void main();
