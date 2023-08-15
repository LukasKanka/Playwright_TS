[Portfolio](https://www.kutac.cz#portfolio) [Blog](https://www.kutac.cz/blog) [Kontakt](https://www.kutac.cz#kontakt)

[Blog](https://www.kutac.cz/blog) [Weby a vše okolo](https://www.kutac.cz/weby-a-vse-okolo)     Async / await

# Async / await

[Kategorie](#)

[Co na srdci, to na blogu](https://www.kutac.cz/co-na-srdci-to-na-blogu) [Weby a vše okolo](https://www.kutac.cz/weby-a-vse-okolo) [Počítače a internety](https://www.kutac.cz/pocitace-a-internety) [Erasmus a cestování](https://www.kutac.cz/erasmus-a-cestovani)

[Tagy](#)

[PHP](https://www.kutac.cz/php) [JavaScript](https://www.kutac.cz/javascript) [Laravel](https://www.kutac.cz/laravel) [Go](https://www.kutac.cz/golang) [Git](https://www.kutac.cz/git) [Kvalita kódu](https://www.kutac.cz/kvalita-kodu) [Bezpečnost](https://www.kutac.cz/bezpecnost) [Databáze](https://www.kutac.cz/databaze) [Windows](https://www.kutac.cz/windows) [Linux](https://www.kutac.cz/linux) [Google](https://www.kutac.cz/google) [HTML](https://www.kutac.cz/html) [CSS](https://www.kutac.cz/css) [htaccess](https://www.kutac.cz/htaccess) [Tipy & triky](https://www.kutac.cz/tiky-a-triky) [O mně](https://www.kutac.cz/o-mne)

[Rychlé odkazy](#)

[Seriály](https://www.kutac.cz/serialy) [Testovací data k článkům](https://testdata.kutac.cz/) [Čtenářský deník](https://www.kutac.cz/co-na-srdci-to-na-blogu/ctenarsky-denicek)

25.04.2018 22:52 Michael 1 

[JavaScript](https://www.kutac.cz/javascript)

Asynchronní programování v Javascriptu bez callbacků a Promise nemusí být nutně sci-fi. Co všechno umí klíčová slova async / await?

[![Async / await v Javascriptu](:/6ce0f100ec5a4fefb8cd737380630c3e "Async / await v Javascriptu")](https://www.kutac.cz/uploads/main-41375.jpg)

S příchodem [Promise](https://www.kutac.cz/weby-a-vse-okolo/promise-v-javascriptu) se změnil a podstatně zjednodušil způsob, jakým je možné pracovat s asynchroními voláními v Javascriptu. Špatně škálovatelné volání callback funkcí nahradilo zpracování, které je přehledné, řetězitelné a s jednoduchým zachytáváním chyb. Od uvedení [generátorů](https://www.kutac.cz/weby-a-vse-okolo/generatory-v-javascriptu) je také možné pomocí pozastavitelných funkcí zpracovávat Promise  způsobem, který vypadá synchronně, ale na pozadí není (viz [příklad](https://www.kutac.cz/weby-a-vse-okolo/generatory-v-javascriptu#vyuziti-a-zaver) ve [článku o generátorech](https://www.kutac.cz/weby-a-vse-okolo/generatory-v-javascriptu)). Takový zápis může být mnohem čitelnější a čitelnější kód znamená snazší debugování. Až by mohlo někoho napadnout, proč něco takového není standardní součástí jazyka. A tak nám do Javascriptu přibyly slova async a await.

## [](#async-await)Async / Await

Klíčové slovo async je označením funkce, která je pozastavitelná, podobně jako generátory. V takto označené funkci pak lze použít klíčové slovo await. To automaticky vyřeší a přiřadí výsledek Promise do dané proměnné. Vezměme tento příklad, kdy na základě dat článku vypíšeme jméno jeho autora:

```javascript
// Požadavek pomocí Promise
function printAuthor(postId) {
  fetch(`api/posts/${postId}`)
    .then(res => res.json())
    .then(post => fetch(`api/users/${post.userId}`))
    .then(res => res.json())
    .then(user => console.log(user.name}))
    .catch(error => console.log(error))
}

printAuthor(42) // 'Douglas Adams' 
```

Stejný příklad by při použití async / await vypadal takto:

```javascript
// Požadavek pomocí async funkce
async function printAuthorAsync(postId) {
  let res = await fetch(`api/posts/${postId}`)
  const post = await res.json()

  res = await fetch(`api/users/${post.userId}`)
  const user = await res.json()

  console.log(user.name)
}

printAuthorAsync(42) // 'Douglas Adams'


```

Příklad si můžete [vyzkoušet zde](https://jsfiddle.net/xs3yvp2d/13/).

Await prakticky říká "počkej, až se vyřeší tento Promise a pokračuj". To je důležitá vlastnost, protože await pracuje pouze s Promise. Pokud dostane cokoliv jiného, převede výsledek zase na Promise. Ten vždy vrací i samotná async funkce. Celý tento mechanismus je totiž postaven nad Promise a generátory. Async / await je ve skutečnosti jenom syntaktické pozlátko a využívá stávající funkce jazyka.

## [](#vyhody)Výhody

Proč jej vlastně používat? Tím, že se zapisuje v podstatě synchronně, je mnohem čitelnější a nastavení breakpointů při debugování je tak mnohem jednodušší.

Protože každé zpracování Promise nemá odlišný scope, všechny hodnoty mohou být k dispozici v celém scopu funkce:

```javascript
// Všechny výsledky Promise mohou být k dispozici v jednom scopu
async function foo() {
  const a = await promise1()
  const b = await promise2()

  return {a, b}
}


```

Taky je možné používat klasické podmínky mnohem snáze:

```javascript
// Funkci lze jednodušše větvit podmínkami
async function foo() {
  const a = await promise1()
  const b = await promise2() 

  if (a > b) {
    return a
  }
  else {
    return b
  }
} 
```

A zachytávání výjimkek probíhá pomocí try/catch bloků:

```javascript
// Chyby jsou zachytávány try/catch bloky
async function foo() {
  try {
    const a = await promise1()
    const b = await promise2()

    return {a, b}
  }
  catch (error) {
    console.error(error)
  }
}


```

## [](#zaver)Závěr

Async / await je velmi vítaným přínosem do Javascriptu. Pro asynchronní programování nabízí mnohdy čitelnější alternativu dnes rozšířeného Promise. Je podporován v NodeJS verze > 7.10 a větší částí posledních verzí moderních [prohlížečů](https://caniuse.com/#search=await). Přesto, pokud jej hodláte použít v prohlížeči, doporučoval bych nejdříve [transformaci Babelem](https://babeljs.io/docs/plugins/transform-async-to-generator/).

* * *

Napadá vás kdy je lepší použít Promise a naopak? Máte s async / await nějaké zkušenosti? Podělte se s ostatními v komentářích.

## Přidat komentář

Tvoje jméno *

<img width="28" height="28" src=":/3b9a1daff9a44f38a09e539024d45d03"/>

Tvůj email

Tvůj web

Tvůj komentář *

Položky označené * jsou povinné. Email nebude zveřejněn

* * *

## Komentáře

27.03.2021 22:13 

**Milos Leng**

Super stranka, vysvetlenia lepsie ako v anglickych videach, ale stali mi je to malo :D

[Odpovědět](#comment-473)

© 2014 - 2023 All rights reserved, IČO: 01827219