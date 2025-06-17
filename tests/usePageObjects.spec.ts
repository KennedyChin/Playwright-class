import test from "@playwright/test";
import { PageManager } from "../page-objects/pageManager";

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/')
})

test.skip('navigate to form page', async ({page}) => {
    const pageManager = new PageManager(page)
    await pageManager.navigateTo().formLayoutsPage()
    await pageManager.navigateTo().datepickerPage()
    await pageManager.navigateTo().smartTablePage()
    await pageManager.navigateTo().toastrPage()
    await pageManager.navigateTo().tooltipPage()
})

test('parametrized methods', async ({page}) => {
    const pageManager = new PageManager(page)

    await pageManager.navigateTo().formLayoutsPage()
    await pageManager.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com', 'Welcome1', 'Option 2')
    await pageManager.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox('John Smith', 'John@test.com', true)

    await pageManager.navigateTo().datepickerPage()
    await pageManager.onDatePickerPage().selectCommonDatePickerDateFromToday(10)
    await pageManager.onDatePickerPage().selectDatepickerWithRangeFromToday(6, 15)
})