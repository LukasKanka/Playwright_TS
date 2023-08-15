export async function loadHomepage ( page ) {
    await page.goto('https://Lukan.cz');
    await page.getByText('Accept').click();
};

export async function cokieeAccept ( page ) {
    await page.getByText('Accept').click();
};