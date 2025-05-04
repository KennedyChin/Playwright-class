import test, { expect } from "@playwright/test";

// 請求會花費15秒
test.beforeEach(async({page}, testInfo) => {
    await page.goto('http://uitestingplayground.com/ajax')
    await page.getByText('Button Triggering AJAX Request').click()
    // testInfo.setTimeout(testInfo.timeout + 2000)
})

test.skip('auto waiting', async ({page}) => {
    const successButton = page.locator('.bg-success')
    // await successButton.click()

    // const test = await successButton.textContent()    

    // await successButton.waitFor({state: 'attached'})
    // const test = await successButton.allTextContents()

    // expect(test).toContain('Data loaded with AJAX get request.')

    await expect(successButton).toHaveText('Data loaded with AJAX get request.', {timeout: 20000})
})

test.skip('alternative waits', async ({page}) => {
    const successButton = page.locator('.bg-success')

    // wait for element
    await page.waitForSelector('.bg-success')

    // wait for particular response
    // await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

    // wait for network calls to be completed ("Not Recomnnanded")
    // 如果有一些API卡住了，那整個測試都會因為等待而卡住
    // await page.waitForLoadState('networkidle')

    const text = await successButton.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request.')
})

test('timeouts', async({page}) => {
    const successButton = page.locator('.bg-success')
    await successButton.click()

    // test.setTimeout(10000)
    // test.slow()
    // await successButton.click({timeout: 16000})
})