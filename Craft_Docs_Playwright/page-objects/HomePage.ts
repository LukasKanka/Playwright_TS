import { Locator, Page, expect
} from "@playwright/test";

export class HomePage{
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async gotoHome() {
        await this.page.goto('https://www.craft.me/s/Gx2Rhh07iMKxyh');
        return this;
    }
}
