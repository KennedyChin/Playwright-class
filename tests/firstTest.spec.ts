import { test } from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test.describe.skip('suite 1', () => {
    test.beforeEach(async ({page}) => {
        // await page.getByText('Charts').click()
    })

    test('navigate to Echarts page', async ({page}) => {
        await page.getByRole('link',{ name: 'Charts',exact: true}).click();
        await page.getByRole('link',{ name: 'Echarts',exact: true}).click();
    })
})

test.describe.skip('suite 2', () => {
    test.beforeEach(async ({page}) => {
        await page.getByText('Forms').click()
    })
    
    test('the first test', async ({page}) => {
        await page.getByText('Form Layouts').click()
    })
    
    test('navigate to datepicker page', async ({page}) => {
        await page.getByText('Datepicker').click()
    })
})

test.skip('Locator syntax rules', async ({page}) => {
    // by Tag name
    // await page.locator('input').click()
    await page.locator('input').first().click()

    // by ID
    page.locator('#inputEmail1')

    // by Class value
    page.locator('.shape-rectangle')

    // by Attribute
    page.locator('[placeholder="Email"]')

    // by Class value (full)
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    // combine different selectors
    page.locator('input[placeholder="Email"][nbinput]')

    // by XPath (NOT RECOMMENED)
    page.locator('//*[@id="inputEmail"]')

    // by partial text match
    page.locator(':text("Using")')

    // by exact text match
    page.locator(':text-is("Using the Grid")')
})

test('User facing locators', async ({page}) => {
    await page.getByRole('textbox', {name: 'Email'}).first().click()
    await page.getByRole('button', {name: 'Sign in'}).first().click()

    await page.getByLabel('Email').first().click()
    await page.getByPlaceholder('Jane Doe').click()

    await page.getByText('using the Grid').click()
    // await page.getByTitle('IoT Dashboard').click()

    await page.getByTestId('SignIn').click()
})