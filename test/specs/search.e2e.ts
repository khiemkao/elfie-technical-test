import ElfieHomePage from "@pages/ElfieHome.page"
import GoogleSearchPage from "@pages/GoogleSearch.page"

describe('Search Google by company name', () => {

    const keyword: string = 'elfie'
    const ELFIE_URL: string = 'www.elfie.co'
    const COPYRIGHT: string = 'Copyright 2023 Elfie Pte. Ltd.'

    it('The company name should be the first result', async () => {
        await GoogleSearchPage.navigate()
        await GoogleSearchPage.searchBy(keyword)
        await GoogleSearchPage.gotoFirstResult()
        expect(await ElfieHomePage.getPageUrl()).toContain(ELFIE_URL)
    })

    it('Verify displaying the Elfie logo', async () => {
        expect(await ElfieHomePage.isAppLogoDisplayed).toBeTruthy()
    })

    it('Open Hamburger menu', async () => {
        await ElfieHomePage.openMenu()
        expect(await ElfieHomePage.isHeaderNavigationDisplayed()).toBeTruthy
    })

    it('Verify Copy Right content', async () => {
        await ElfieHomePage.closeMenuIfOpened()
        expect(await ElfieHomePage.getCopyRightText()).toEqual(COPYRIGHT)
    })
})
