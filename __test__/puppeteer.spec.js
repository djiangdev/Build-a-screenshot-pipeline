const puppeteer = require('puppeteer')

describe('jest-image-snapshot', () => {
  let browser

  beforeAll(async () => {
    browser = await puppeteer.launch()
  })

  it('works', async () => {
    const page = await browser.newPage()
    await page.goto('https://nifty-booth-0bf80f.netlify.app/')
    const image = await page.screenshot()
    expect(image).toMatchImageSnapshot({
      comparisonMethod: 'ssim',
      noColors: true
    })
  })

  afterAll(async () => {
    await browser.close()
  })
})
