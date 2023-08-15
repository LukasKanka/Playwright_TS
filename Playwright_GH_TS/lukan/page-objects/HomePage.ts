import { Locator, Page
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
    }

    async gotoHome() {
        await this.page.goto('https://www.lukan.cz/');
       }

    async clickCookiesButtonAccept() {
        await this.cookiesButtonAccept.click();
    }   

    async clickCookiesButtonDecline() {
        await this.cookiesButtonDecline.click();
    }

    async clickUvodniStranaButton() {
        await this.menuButtonUvodniStrana.click();
    }

    async clickOMneButton() {
        await this.menuButtonOMne.click();
    }

    async clickZOOUButton() {
        await this.menuButtonZasadyOchranyOsobnichUdaju.click();
    }

    async clickPodporovateleButton() {
        await this.menuButtonPodporovatele.click();
    }
    async enterTextSearchFields() {
        await this.searchFieldInput.fill('Test');
    }

    async clickSearchButton() {
        await this.searchButton.click();
    }


};