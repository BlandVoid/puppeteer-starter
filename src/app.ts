import puppeteer from 'puppeteer'

import { keys } from './config'

//
;(async () => {
  //launch browser
  const browser = await puppeteer.launch({
    headless: false, //launch non-headless chrome
    args: ['--start-maximized'], //browser will launch with window maximized
    defaultViewport: {
      //set viewport to window size
      height: 0,
      width: 0,
    },
  })

  try {
    //make new page
    const page = await browser.newPage()

    //go to url
    await page.goto('https://google.com', { waitUntil: 'networkidle0' })

    //wait for few seconds
    await page.waitForTimeout(10000)
  } catch (error) {
    console.log(error.message)
  }

  //close browser
  await browser.close()
})()
