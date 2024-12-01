import BasePage from "@base/BasePage";

class ElfieHomePage extends BasePage {

    // elements
    private readonly imgLogo: string = '//div[@class="app-icon-holder"]/img'
    private readonly mnuHamburger: string = '//div[@aria-label="menu"]'
    private readonly nav_HeaderNavigation: string = '//ul[@class="header-navigation"]'
    private readonly txtCopyRight: string = '//div[@class="footer-content-bottom"]'

    public async getPageUrl() {
        return await this.getCurrentUrl()
    }

    public async isAppLogoDisplayed() {
        this.waitForDisplayed(this.imgLogo)
        return await this.isDisplayed(this.imgLogo)
    }

    public async openMenu() {
        await this.click(this.mnuHamburger)
    }

    public async isHeaderNavigationDisplayed() {
        this.waitForDisplayed(this.nav_HeaderNavigation)
        return this.isDisplayed(this.nav_HeaderNavigation)
    }

    public async closeMenuIfOpened() {
        if (await this.isDisplayed(this.nav_HeaderNavigation)) {
            await this.click(this.mnuHamburger)
        }
    }
    public async getCopyRightText() {
        return await this.getText(this.txtCopyRight)
    }
}

export default new ElfieHomePage()