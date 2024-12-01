import BasePage from "@base/BasePage";

class GoogleSearchPage extends BasePage {

    readonly path: string = '/'

    // elements
    private readonly txtSearch: string = 'textarea[name="q"]'
    private readonly txtFirstResultTitle: string = '//div[@id="rso"]/div[1]//a[@role="presentation"]'

    public async navigate() {
        await this.navigatePage(this.path)
    }

    public async searchBy(keyword: string) {
        await this.sendKeys(this.txtSearch, keyword)
        await this.pressDone()
        
    }

    public async gotoFirstResult() {
        await this.click(this.txtFirstResultTitle)
        await this.sleep(5)
    }
}

export default new GoogleSearchPage()