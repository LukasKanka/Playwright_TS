// import třída modulů které budeme potřebovat
import { Locator, Page
} from "@playwright/test";

//definujeme třídy (class)
export class HomePage{
   page: Page;
   menu: Locator;
   title: Locator;
   item: Locator;
   addToCart: Locator;
   cardBadge: Locator;

  // vytvoříme konstruktor třídy definuje proměnou page
  constructor(page: Page) {
   this.page = page;
   this.menu = page.locator('#react-burger-menu-btn');
   this.title = page.getByText('Swag Labs');
   this.item = page.locator('#item_4_title_link');
   this.addToCart = page.locator('#add-to-cart-sauce-labs-backpack');
   this.cardBadge = page.locator('//span[@class="shopping_cart_badge"]');
  }

  // teď si definujeme metody na práci s elementy výše 
  
  async clickOnMenu() {
   await this.menu.click();
  }

   async clickOnItem() {
       await this.item.click();
  }

  
  async clickOnAddToCart() {
   await this.addToCart.click();
 }

 async clickOnCardBAdge() {
  await this.cardBadge.click();
}
   

}

