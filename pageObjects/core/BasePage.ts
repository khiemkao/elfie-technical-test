import BaseComponent from "@base/BaseComponent";

export default class BasePage extends BaseComponent {

    /**
     * Purpose: this class will contain all methods to interact with the browser/page/windows
     */

    protected async sleep(second: number) {
        return await browser.pause(second * 1000)
    }

    protected async navigatePage(path: string) {
        await browser.url(process.env.BASE_URL + path)
        expect(await browser.getUrl()).toContain(path)
    }

    protected async pressDone() {
        await browser.execute('mobile: performEditorAction', {'action': 'Done'});
    }

    protected async getCurrentUrl() {
        return await browser.getUrl()
    }
}