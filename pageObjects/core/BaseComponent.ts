import { CONSTANTS } from "./Constants"

export default class BaseComponent {
    /**
     * Purpose: this class will contain all methods
     * to interact with the element. Such as:
     * - Click on element
     * - Hover over element
     * - Send keys to element
     * - Clear text on element
     * - Drag and drop element
     * 
     * We can specific the locator for Android or iOS in this class.
     */

    protected async click(locator: string) {
        return await $(locator).click()
    }

    protected async sendKeys(locator: string, value: string, isClear = true) {
        if (isClear) {
            await $(locator).clearValue()
        }
        return await $(locator).setValue(value)
    }

    protected async getText(locator: string) {
        return await $(locator).getText()
    }

    protected async getAllElements(locator: string) {
        return $$(locator)
    }

    protected async isDisplayed(locator: string) {
        return await $(locator).isDisplayed()
    }

    protected async waitForDisplayed(locator: string) {
        return $(locator).waitForDisplayed({timeout: CONSTANTS.TIMEOUT})
    }
}