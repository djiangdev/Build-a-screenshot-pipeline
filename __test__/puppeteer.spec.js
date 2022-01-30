const puppeteer = require('puppeteer')

describe('jest-image-snapshot', () => {
  let browser

  beforeAll(async () => {
    browser = await puppeteer.launch()
  })

  it('works', async () => {
    const page = await browser.newPage()
    await page.goto('https://nifty-booth-0bf80f.netlify.app/')
    const image = await page.screenshot({ path: 'screenshot.png' })
    expect(image).toMatchImageSnapshot()
  })

  afterAll(async () => {
    await browser.close();
  });
})
