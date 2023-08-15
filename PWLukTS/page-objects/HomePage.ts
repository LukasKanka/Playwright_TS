import { Locator, Page, expect
} from "@playwright/test";
export class HomePage{
    page: Page;
    cookiesButtonAccept: Locator;
    cookiesButtonDecline: Locator;
    menuButtonUvodniStrana: Locator;
    menuButtonOMne: Locator;
    menuButtonZasadyOchranyOsobnichUdaju: Locator;
    menuButtonPodporovatele: Locator;
    searchButton: Locator;
    searchFieldInput: Locator;
   // verifyTitleHomePage: Locator;
    XsocialButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.cookiesButtonAccept = page.getByText('Accept');
        this.cookiesButtonDecline = page.getByText('Decline');
        this.menuButtonUvodniStrana = page.getByRole('link', { name: 'Úvodní stránka' });
        this.menuButtonOMne = page.getByRole('link' , { name: 'O Mně' });
        this.menuButtonZasadyOchranyOsobnichUdaju = page.getByRole('link' , { name: 'Zásady ochrany osobních údajů' });
        this.menuButtonPodporovatele = page.getByRole('link' , { name: 'Podporovatelé' });
        this.searchFieldInput = page.locator('//*[@id="search-7"]/form/label/input');
        this.searchButton = page.locator('#search-7 > form > button > svg > use');
       // this.verifyTitleHomePage = expect.toHaveTitle('Lukáš bloguje - Blog o všem možném i nemožném');
        this.XsocialButton = page.locator('#block-54 > ul > li.wp-social-link.wp-social-link-twitter.wp-block-social-link > a > svg > path');
        
    }

    async gotoHome() {
        await this.page.goto('https://www.lukan.cz/');
        return this;
       }

    async clickCookiesButtonAccept() {
        await this.cookiesButtonAccept.click();
        return this;
    }   

    async clickCookiesButtonDecline() {
        await this.cookiesButtonDecline.click();
        return this;
    }

    async clickUvodniStranaButton() {
        await this.menuButtonUvodniStrana.click();
        return this;
    }

    async clickOMneButton() {
        await this.menuButtonOMne.click();
        return this;
    }

    async clickZOOUButton() {
        await this.menuButtonZasadyOchranyOsobnichUdaju.click();
        return this;
    }

    async clickPodporovateleButton() {
        await this.menuButtonPodporovatele.click();
        return this;
    }
    async enterTextSearchFields() {
        await this.searchFieldInput.fill('Test');
        return this;
    }

    async clickSearchButton() {
        await this.searchButton.click();
        return this;
    }

    async clickXsocialButton() {
        await  this.XsocialButton.click();
        return this;
    }

 


}